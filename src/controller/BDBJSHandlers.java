package controller;

import java.io.File;
import java.io.IOException;
import java.util.Base64;

//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;

import util.io.BDCodeReader;
import util.io.BDCodeWriter;
import util.io.BDFileProc;
import model.BDBParameters;
import model.BDCodeModel;
import model.BDSerialManager2;
import view.BDBConsoleWindow;
import view.BDBDialogWindow;
import view.BDBPreSettingWindow;
import view.BDBWorkspace;
import view.BDComWindow;
import view.BDCompileAndUploadWindow;
import view.BDConsoleWindow;
import view.BDExampleWindow;
import view.BDHintDialogWindow;
import controller.BDBConsoleWindowCtrl;

import util.debug.*;

import javafx.application.Platform;
import javafx.concurrent.Task;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.scene.web.PopupFeatures;
import javafx.scene.web.PromptData;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebEvent;
import javafx.scene.web.WebView;
import javafx.stage.FileChooser;
import javafx.stage.Stage;
import javafx.stage.WindowEvent;
import javafx.util.Callback;


public class BDBJSHandlers 
{

	//private static final Logger logger = LogManager.getLogger(BDBJSHandlers.class);
	private static boolean canUpload = false;
	
	public static Thread uploadThread 	= null;
	public static Thread compileThread = null;
	
	public static BDCompileAndUploadWindow cauwView = new BDCompileAndUploadWindow();
	public static BDCompileAndUploadCtrl cauwCtrl = new BDCompileAndUploadCtrl(cauwView);
	
	// Handles window.alert() call by displaying a dialog
	public static void alertHandler(WebEvent<String> e) 
	{
		// Show an alert in a new window
		Stage stage = new Stage();
		
		stage.setTitle("Alert");
		
		Label msg = new Label(e.getData());

		if (e.getData().toString().equals("upload")) 
		{
			// return;
		}

		Button okBtn = new Button("OK");
		
		okBtn.setOnAction(e2 -> stage.close());
		
		VBox root = new VBox(20, msg, okBtn);
		
		root.setAlignment(Pos.CENTER);
		
		Scene scene = new Scene(root);
		
		stage.setScene(scene);
		stage.showAndWait();
	}

	static void test() 
	{
		String a = (String) BDBParameters.webView.getEngine().executeScript("getXML()");
		// (String)BDBParameters.webView.getEngine().executeScript("Blockly.Arduino.workspaceToCode()");
		// String a
		System.out.println(a);
	}

	// Returns a Callback to handle window.prompt() call by displaying a dialog
	public static Callback<PromptData, String> getPromptHandler() 
	{
		Callback<PromptData, String> handler = pData -> 
		{
			/*
			 * // Show a window to accept the user input Stage stage = new
			 * Stage(); stage.setTitle("Prompt");
			 */

			// System.out.println(pData.getDefaultValue());
			String command = pData.getMessage();
			String content = pData.getDefaultValue();

			switch (command) 
			{
				case "compile":
					compileAndUpload(content);
					return null;
	
				case "createXml":
					createXML();
					return null;
					
				case "saveAs":
					saveAsXML(content);
					return null;
					
				case "saveXml":
					// Save XML
					saveXML(content);
					return null;
	
				case "loadXml":
					loadXML();
					return null;
	
				case "setting":
					setting();
					return null;
					
				case "serial":
					serial();
					return null;
					
				case "example":
					example();
					return null;
			}

			/*
			 * Label msgLbl = new Label(pData.getMessage()); TextField dataFld =
			 * new TextField(); dataFld.setText(pData.getDefaultValue()); Button
			 * okBtn = new Button("OK"); okBtn.setOnAction(e -> stage.close());
			 * VBox root = new VBox(20, msgLbl, dataFld, okBtn);
			 * root.setAlignment(Pos.CENTER); Scene scene = new Scene(root, 320,
			 * 240); stage.setScene(scene); stage.showAndWait(); String userData
			 * = dataFld.getText();
			 * 
			 */

			// Show a popup in a new window.
			BDBDialogWindow dialog = new BDBDialogWindow(" 输入", pData.getMessage(), true, false, true, true);
			
			dialog.okBtn.setOnAction(e -> dialog.close());
			dialog.cancleBtn.setOnAction(e -> dialog.close());
			
			dialog.txt.setText(pData.getDefaultValue());
			dialog.showAndWait();
			
			String userData = dialog.txt.getText();
			
			return userData;
		};

		return handler;
	}
	
	private static void createXML()
	{
		BDBDialogWindow dialog = new BDBDialogWindow(" 新建", "项目已修改，是否保存当前项目后关闭？", true, true, true, false);
		
		// Dialog cancle button on click.
		dialog.cancleBtn.setOnAction(new EventHandler<ActionEvent>() 
		{
			@Override
			public void handle(ActionEvent event) 
			{
				dialog.close();
			}
		});

		// Dialog OK button on click.
		dialog.okBtn.setOnAction(new EventHandler<ActionEvent>() 
		{
			@Override
			public void handle(ActionEvent event) 
			{
				// 关闭窗口
				dialog.close();
				
				// 保存参数
	        	BDBParameters.writeProfile();
				BDBParameters.webView.getEngine().executeScript("saveXML()");
				
				// Create new XML file.
				BDBParameters.webView.getEngine().executeScript("location.reload()");
			}
		});

		// Dialog giveup button on click.
		dialog.giveupBtn.setOnAction(new EventHandler<ActionEvent>() 
		{
			@Override
			public void handle(ActionEvent event) 
			{
				// 保存参数
	        	BDBParameters.writeProfile();
	        	
				// 关闭窗口
				dialog.close();
				
				// Create new XML file.
				BDBParameters.webView.getEngine().executeScript("location.reload()");
			}
		});
		
		if (isCodeChange()) 
		{
			dialog.show();
		}
		else
		{
			// Create new XML file.
			BDBParameters.webView.getEngine().executeScript("location.reload()");
		}
	}
	
	private static boolean isCodeChange() 
	{
		String newXMLCode = BDBParameters.webView.getEngine().executeScript("getXML()").toString();
		String xmlCode = BDBParameters.code.getXmlCode();
		
		if (newXMLCode.equals("<xml></xml>") || newXMLCode.equals("<xml xmlns=\"http://www.w3.org/1999/xhtml\"></xml>"))
			return false;
		
		if (!newXMLCode.equals(xmlCode))
			return true;
		
		return false;
	}
	
	private static void example()
	{
		BDExampleWindow exampleWindow = new BDExampleWindow();
		new BDExampleWindowCtrl(exampleWindow);
		
		System.out.println("Example");
		exampleWindow.show();
	}
	
	public static BDHintDialogWindow hintDialogWindow = new BDHintDialogWindow("  提示", "请先确定计算机已经连接开发板！");
	
	private static void serial() 
	{
		BDComWindow comWindow = new BDComWindow();        // 串口通讯窗口

		BDBParameters.serialports = BDSerial.list();

		if (BDBParameters.serialports.isEmpty()) 
		{
			// 弹出对话框提示用户未接入开发板
			hintDialogWindow.show();
			
			if(BDBParameters.os.equals("Mac OS X"))
			{
				return;
			}
			
			// 弹出子窗口与主窗口居中
			//showInTheMiddle(hintDialogWindow);

			// 如果未连接则返回
			return;
		}

		// 串口通讯
		BDComWindowCtrl comWindowCtrl = new BDComWindowCtrl(comWindow);

		// 显示串口通讯窗口
		comWindow.show();
	}

	/*
	 * setting broad type and serial port
	 */
	private static void setting() 
	{
		BDBPreSettingWindow preSettingWnd = new BDBPreSettingWindow();
		
		try 
		{
			new BDBPreSetWindowCtrl(preSettingWnd);
			
			preSettingWnd.show();

		} 
		catch (Exception ex) 
		{
			ex.printStackTrace();
		}
	}

	private static void saveXML(String content) 
	{
		if (BDBParameters.filepath == null || BDBParameters.filepath.isEmpty()) 
		{
			saveAsXML(content);
		} 
		else 
		{
			try 
			{
				BDCodeWriter.fileWriter(BDBParameters.filepath, content);
			} 
			catch (Exception ex) 
			{
				ex.printStackTrace();
			}
			
			BDBParameters.code.setInoCode(new BDInoCode(
					BDBParameters.webView.getEngine().executeScript("Blockly.Arduino.workspaceToCode()").toString()));
			
			BDBParameters.code.setXmlCode(BDBParameters.webView.getEngine().executeScript("getXML()").toString());
		}
	}

	private static void loadXML() 
	{
		try 
		{
			// load XML file.
			FileChooser fileChooser = new FileChooser();
			// Set extension filter
			FileChooser.ExtensionFilter extFilterXML = new FileChooser.ExtensionFilter("源文件 (*.xml)", "*.xml");
			fileChooser.getExtensionFilters().add(extFilterXML);
			// Show open file dialog
			File file = fileChooser.showOpenDialog(null);
			if (file == null)
				return;

			String xml = BDCodeReader.readFileByLines(file.getPath());
			//System.out.println("updateXML(\'" + xml + "\')");
			// Base64 encode.
			xml = Base64.getEncoder().encodeToString(xml.getBytes());
			
			BDBParameters.webView.getEngine().executeScript("updateXML(\"" + xml + "\")");
			BDBParameters.code.setInoCode(new BDInoCode(
					BDBParameters.webView.getEngine().executeScript("Blockly.Arduino.workspaceToCode()").toString()));
			
			BDBParameters.code.setXmlCode(BDBParameters.webView.getEngine().executeScript("getXML()").toString());
			BDBParameters.filepath = file.getPath();
		} 
		catch (IOException e1) 
		{
			e1.printStackTrace();
		}
	}

	private static void saveAsXML(String content) 
	{
		try 
		{
			FileChooser fileChooser = new FileChooser();
			// Set extension filter
			FileChooser.ExtensionFilter extFilterXML = new FileChooser.ExtensionFilter("源代码  (*.xml)", "*.xml");
			fileChooser.getExtensionFilters().add(extFilterXML);
			// Show open file dialog
			File file = fileChooser.showSaveDialog(null);
			if (file == null)
				return;
			BDCodeWriter.fileWriter(file.getPath(), content);
			BDBParameters.code.setInoCode(new BDInoCode(
					BDBParameters.webView.getEngine().executeScript("Blockly.Arduino.workspaceToCode()").toString()));
			BDBParameters.code.setXmlCode(BDBParameters.webView.getEngine().executeScript("getXML()").toString());
			BDBParameters.filepath = file.getPath();
		} 
		catch (IOException e1) 
		{
			e1.printStackTrace();
		}
	}

	private static void compileCode(BDBConsoleWindowCtrl consoleWindowCtrl,String content) 
	{
		// Save Code
		//System.out.println("Save Code.......");
		//consoleShow("compile", content); //just for debug
		
		// 输出编译初始化信息
		System.out.println("");
		System.out.println("*********************************************************");
		System.out.println("");
		System.out.println("BuddyBlock : 请稍后，源码即将开始编译...");
		System.out.println("");
		System.out.println("*********************************************************");
		System.out.println("");
				
		String classname = BDBParameters.sketchName;

		String compilepath = BDBParameters.sketchpath + "\\build";
		String codeFileName = BDBParameters.sketchpath + "\\" + classname + ".ino";
		
		try 
		{
			BDCodeWriter.preparePath(BDBParameters.sketchpath);
			BDCodeWriter.fileWriter(codeFileName, content);
		} 
		catch (IOException e) 
		{
			//logger.debug(e.getMessage());
		}
		
		if (!BDCompiler.clearBuildPath(compilepath))
			return;
		
		BDInoCode code = new BDInoCode();
		
		code.setCodeText(content);
		code.className = classname;
		code.name = codeFileName;
		
		BDBParameters.code.setInoCode(code);
		
		try 
		{
			code.preprocess(compilepath, new BDPreprocessor());
			
			BDCompiler compiler = new BDCompiler();	
			
			compiler.addProgressStatusListener(consoleWindowCtrl);			
			
			// compile arduino code
			
			// 编译
			boolean isSuccess = compiler.compile(compilepath, compilepath, classname, code.getImportedLibraries(), true);
			
			if(!isSuccess)
			{				
				canUpload = false;
				
				// compile faild
				Platform.runLater(new Runnable() 
				{
					@Override
					public void run() 
					{
						consoleWindowCtrl.getView().lbl.setText("很遗憾，编译失败！");
						
						// 更新烧录进度对话框，隐藏进度条显示操作按钮
						consoleWindowCtrl.addBtns();
					}
				});
			}
										
		} 
		catch (Exception e) 
		{
			canUpload = false;
			//logger.debug(e.getMessage());
		}
		
		// 关闭窗口中止编译操作
		consoleWindowCtrl.consoleWindow.setOnHiding(new EventHandler<WindowEvent>() 
		{
			@SuppressWarnings("deprecation")
			@Override
			public void handle(WindowEvent event) 
			{
				/*
				if(compileThread != null)
				{
					if(!compileThread.isAlive())
					{
						return;
					}
				        		 
				    // 终止编译
				    compileThread.stop();
				        		 
				    System.out.println("");
				    System.out.println("*********************************************************");
				    System.out.println("");
				    System.out.println("BuddyBlock : 很遗憾，编译操作已终止！");
				    System.out.println("");
				    System.out.println("*********************************************************");
				    System.out.println("");
				 }
				 */
				        	 
				 if(uploadThread != null)
				 {
				    if(!uploadThread.isAlive())
					{
					   return;
					}
				        		 
				    // 终止上传
				    uploadThread.stop();
				        		 
				   System.out.println("");
				   System.out.println("*********************************************************");
				   System.out.println("");
				   System.out.println("BuddyBlock : 很遗憾，烧录操作已终止！");
				   System.out.println("");
				   System.out.println("*********************************************************");
				   System.out.println("");
				  }
				}
			});
	}
	
	
	private static boolean uploadCode(BDBConsoleWindowCtrl consoleWindowCtrl, String content,boolean canUpload ) 
	{
		compileCode(consoleWindowCtrl,content);
		
		if(!canUpload)
			return false;

		BDUploader uploader;
		
		consoleWindowCtrl.setUploadStyle();
		
		uploader = new BDAvrdudeUploader();
		uploader.addProgressStatusListener(consoleWindowCtrl);
		
		String compilepath = BDBParameters.sketchpath + "\\build";
		
		try 
		{
			Platform.runLater(new Runnable() 
			{
				@Override
				public void run() 
				{
					consoleWindowCtrl.getView().lbl.setText("正在烧录...");
					
					// 输出烧录初始化信息
					System.out.println("");
					System.out.println("*********************************************************");
					System.out.println("");
					System.out.println("BuddyBlock : 请稍后，烧录操作即将开始...");
					System.out.println("");
					System.out.println("*********************************************************");
					System.out.println("");
				}
			});
			
			// 上传
			Boolean isSuccess = uploader.uploadUsingPreferences(compilepath, BDBParameters.code.getInoCode().className, false);

			return isSuccess;
		} 
		catch (Exception ex) 
		{
			//ex.printStackTrace();
			// System.out.println(e.getMessage());

			Platform.runLater(new Runnable() 
			{
				@Override
				public void run() 
				{
					consoleWindowCtrl.getView().lbl.setText("很遗憾，烧录失败！");
					
					// 烧录不成功
					System.out.println("");
					System.out.println("*********************************************************");
					System.out.println("");
					System.out.println("BuddyBlock : 很遗憾，烧录不成功！");
					System.out.println("");
					System.out.println("*********************************************************");
					System.out.println("");
					
					// 更新烧录进度对话框，隐藏进度条显示操作按钮
					consoleWindowCtrl.addBtns();
				}
			});
			
			return false;
		}
	}

	// 点击烧录按钮后首先触发
	private static void compileAndUpload(String content)
	{
		// 获取临时文件
		String tempPath = System.getProperty("java.io.tmpdir") + "BDTmpPath";
		String builtPath = tempPath + File.separator + "Built";
		String codePath = tempPath + File.separator + "Code";

		//System.out.println("builtPath: " + builtPath);
		//System.out.println("codePath: " + codePath);
		
		// 保存临时源码文件
		String code = content;

		cauwCtrl.openFileFromCode(builtPath + File.separator, codePath + File.separator);
		
		// 显示编译功能窗口
		cauwView.show();

		cauwView.getSerialListCombox().setItems(new BDSerialManager2().getPortList());
		
		if(cauwView.getSerialListCombox().getItems().get(0).equals("未连接"))
		{
			cauwView.getSerialListCombox().getSelectionModel().select(0);
		}
		else
		{
			cauwView.getSerialListCombox().getSelectionModel().select(cauwView.getSerialListCombox().getItems().size() - 1);
		}
		
		// 更新串口号
		cauwCtrl.updateSerialPorts();
		
		try 
		{
			// 清除已经存在的目录
			BDFileProc.deleteDir(tempPath);
			BDFileProc.deleteDir(builtPath);
			BDFileProc.deleteDir(codePath);
			
			// 创建源码临时目录
			File file01 = new File(tempPath);
			File file02 = new File(builtPath);
			File file03 = new File(codePath);

	        // Create temporary directory.
	        file01.mkdir();
	        file02.mkdir();
	        file03.mkdir();
	        
	        //System.out.println(codePath + "Code.ino");
	        
			// 写入文件
			BDCodeWriter.fileWriter(codePath + File.separator + "Code.ino", code);
			
			// 更改保存状态
			//workspaceCtrl.workspaceView.workspaceModel.curTab.code.isSaved = true;
		} 
		catch (IOException ex) 
		{
			//logger.error(this.toString(), ex);
		}
		
		if(true)
		{
			return;
		}
		
		BDBParameters.serialports = BDSerial.list();

		//if no serialport is selected, do not upload
		if (!BDBParameters.serialports.isEmpty() && BDBParameters.connectCom!=null) 
		{
			canUpload = true;			
		}
		else
		{
			// 弹出对话框提示用户未接入开发板
			hintDialogWindow.show();
			
			// 如果未连接则返回
			return;
		}

		BDBConsoleWindow consoleWindow = new BDBConsoleWindow();
		BDBConsoleWindowCtrl consoleWindowCtrl = new BDBConsoleWindowCtrl(consoleWindow);

		// 烧录
		consoleWindow.show();
		
		Task<Void> progressTask = new Task<Void>() 
		{
			@Override
			protected Void call() throws Exception 
			{
				try
				{
					// 编译上传
					if (uploadCode(consoleWindowCtrl,content,canUpload)) 
					{
						Platform.runLater(new Runnable() 
						{
							@Override
							public void run() 
							{
								consoleWindowCtrl.getView().lbl.setText("恭喜你，烧录已完成！");
								
								// 烧录成功
								System.out.println("");
								System.out.println("*********************************************************");
								System.out.println("");
								System.out.println("BuddyBlock : 恭喜您，烧录成功！");
								System.out.println("");
								System.out.println("*********************************************************");
								System.out.println("");
								
								// 更新烧录进度对话框，隐藏进度条显示操作按钮
								consoleWindowCtrl.addBtns();
							}
						});
					}
					else
					{
						// 烧录不成功
						System.out.println("");
						System.out.println("*********************************************************");
						System.out.println("");
						System.out.println("BuddyBlock : 很遗憾，烧录不成功！");
						System.out.println("");
						System.out.println("*********************************************************");
						System.out.println("");
						
						// 更新烧录进度对话框，隐藏进度条显示操作按钮
						consoleWindowCtrl.addBtns();
					}
				}
				catch(Exception ex)
				{
					
				}
				
				throw new UnsupportedOperationException("Not supported yet.");
			}
		};

		// 开始编译上传任务
		//new Thread(progressTask).start();
		
		// 开始编译上传任务
		uploadThread = new Thread(progressTask);
				
		uploadThread.start();
	}
	

	// Returns a Callback to handle window.open() call by displaying the popup
	// in a separate window using a separate WebEngine
	public static Callback<PopupFeatures, WebEngine> getPopupHandler() 
	{
		Callback<PopupFeatures, WebEngine> handler = pFeatures -> 
		{
			// Show a popup in a new window
			Stage stage = new Stage();
			stage.setTitle("Popup");
			WebView poupView = new WebView();
			VBox root = new VBox(poupView);
			Scene scene = new Scene(root);
			stage.setScene(scene);
			stage.show();
			System.out.println();

			return poupView.getEngine();
		};
		
		return handler;
	}

	// Returns a Callback to handle window.confirm() call by displaying a dialog
	public static Callback<String, Boolean> getConfirmHandler() 
	{
		Callback<String, Boolean> handler = msg -> 
		{

			// Show a popup in a new window.
			BDBDialogWindow dialog = new BDBDialogWindow(" 提示", msg, true, false, true, false);

			dialog.okBtn.setOnAction(e -> 
			{
				dialog.okBtn.getProperties().put("userPressed", true);
				dialog.close();
			});

			dialog.cancleBtn.setOnAction(e -> dialog.close());

			dialog.showAndWait();

			Boolean userSelection = (Boolean) dialog.okBtn.getProperties().get("userPressed");
			userSelection = (userSelection == null ? false : true);

			/*
			 * 
			 * // Show a popup in a new window Stage stage = new Stage();
			 * stage.setTitle("Confirm"); Label msgLbl = new Label(msg); Button
			 * okBtn = new Button("OK"); okBtn.setOnAction(e -> {
			 * okBtn.getProperties().put("userPressed", true); stage.close();
			 * });
			 * 
			 * Button cancelBtn = new Button("Cancel"); cancelBtn.setOnAction(e
			 * -> stage.close()); HBox buttons = new HBox(20, okBtn, cancelBtn);
			 * buttons.setAlignment(Pos.CENTER); VBox root = new VBox(20,
			 * msgLbl, buttons); Scene scene = new Scene(root, 320, 240);
			 * stage.setScene(scene); stage.showAndWait(); Boolean userSelection
			 * = (Boolean) okBtn.getProperties().get("userPressed");
			 * userSelection = (userSelection == null ? false : true);
			 * 
			 */

			return userSelection;

		};
		return handler;
	}

	static void consoleShow(String command, String content) 
	{
		System.out.println("=====================");
		System.out.println(String.format("command:%s \n content:\n %s", command, content));
		System.out.println("=====================");
	}
}
