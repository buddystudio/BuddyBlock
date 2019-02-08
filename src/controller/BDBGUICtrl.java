package controller;

import util.base.Preferences;

import model.BDBParameters;
import view.BDBDialogWindow;
import view.BDBGUIView;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.concurrent.Worker;
import javafx.concurrent.Worker.State;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.input.MouseButton;
import javafx.scene.input.MouseEvent;
import javafx.stage.WindowEvent;

public class BDBGUICtrl 
{
	private BDBGUIView gui;
	
	private double xOffset = 0;
    private double yOffset = 0;
	
	public BDBGUICtrl(BDBGUIView view) 
	{
		this.gui = view;
		
		view.primaryStage.setOnCloseRequest(new EventHandler<WindowEvent>() 
		{
			@Override
			public void handle(final WindowEvent event) 
			{
				BDBDialogWindow dialog = new BDBDialogWindow(" 关闭", "项目已修改，是否保存当前项目后关闭？", true, true, true, false);
				
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
						dialog.close();
						
						// 保存参数
			        	BDBParameters.writeProfile();
			        	
						BDBParameters.webView.getEngine().executeScript("saveXML()");
						view.primaryStage.close();
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
			        	
						view.primaryStage.close();
						dialog.close();
					}
				});
				
				if (isCodeChange()) 
				{
					dialog.show();
					// Hold on.
					event.consume();
				}
			}
		});
		
		// Load complete.
		BDBParameters.webView.getEngine().getLoadWorker().stateProperty().addListener(  
	        	new ChangeListener<State>() 
	            {  
	            	@Override public void changed(ObservableValue ov, State oldState, State newState) 
	                {  
	            		if (newState == Worker.State.SUCCEEDED) 
	                    {
	            			//BDBParameters.webView.setCache(false);
	            			
	            			//set the board and com in webpage
	            			
	            			String board = Preferences.get("board");
	            			String com = Preferences.get("serial.port");
	            			/*String cmd = String.format("setElementText('%s','%s')","lbl_board", board);
	            			
	            			BDBParameters.webView.getEngine().executeScript(cmd);
	            			
	            			cmd = String.format("setElementText('%s','%s')","lbl_port",com);
	            			BDBParameters.webView.getEngine().executeScript(cmd);*/
	                    }  
	                    else if (newState == Worker.State.FAILED)
	                    {
	                    }
	                    else
	                    {
	                    }
	                }  
	            });
		
		// 点击设置按钮
        gui.titlePanel.settingBtn.setOnAction(new EventHandler<ActionEvent>() 
        {
            @Override
            public void handle(ActionEvent event) 
            {
            	//BDDrawUtil.showInTheMiddle(gui.settingWindow);
            	
            	gui.settingWindow.show();
            }
        });
		
		// 点击关闭按钮
        gui.titlePanel.closeBtn.setOnAction(new EventHandler<ActionEvent>() 
        {
            @Override
            public void handle(ActionEvent event) 
            {
            	BDBDialogWindow dialog = new BDBDialogWindow(" 关闭", "项目已修改，是否保存当前项目后关闭？", true, true, true, false);
				
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
						// 保存参数
			        	BDBParameters.writeProfile();
			        	
						dialog.close();
						BDBParameters.webView.getEngine().executeScript("saveXML()");
						
						// 关闭窗口
			            System.exit(0);
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
			            System.exit(0);
						dialog.close();
					}
				});
				
				if (isCodeChange()) 
				{
					dialog.show();
					
					// Hold on.
					event.consume();
				}
				else
				{
					// 关闭窗口
		            System.exit(0);
				}
            }
        });

        // 点击最大化按钮
        gui.titlePanel.maxBtn.setOnAction(new EventHandler<ActionEvent>() 
        {
            @Override
            public void handle(ActionEvent event) 
            {
	            // Don't work in Mac OS X.
	        	//if(!BDParameters.os.equals("Mac OS X"))
	        	{
	        		// 窗口最大化与恢复
	            	setResizeWindow();
	        	}
            }
        });
        
        // 点击最小化按钮
        gui.titlePanel.minBtn.setOnAction(new EventHandler<ActionEvent>() 
        {
            @Override
            public void handle(ActionEvent event) 
            {
                // 最小化
                //gui.primaryStage.setIconified(true);
            	setMinWindow();
            }
        });
        
        // 双击标题栏放大与恢复窗口
        gui.titlePanel.setOnMouseClicked(new EventHandler<MouseEvent>() 
        {
            @Override
            public void handle(MouseEvent mouseEvent) 
            {
                if(mouseEvent.getButton().equals(MouseButton.PRIMARY))
                {
                    if(mouseEvent.getClickCount() == 2)
                    {
                    	// Don't work in Mac OS X.
                    	//if(!BDParameters.os.equals("Mac OS X"))
                    	{
                    	 	// 窗口最大化与恢复
                        	setResizeWindow();
                    	}	
                    }
                }
            }
        });
        
        // 点击关于按钮
        gui.titlePanel.aboutBtn.setOnAction(new EventHandler<ActionEvent>() 
        {
            @Override
            public void handle(ActionEvent event) 
            {
                // 弹出关于我们按钮
            	gui.aboutWindow.show();
            }
        });
        

        // 点击开始拖动窗口
        gui.titlePanel.setOnMousePressed(new EventHandler<MouseEvent>() 
        {
            @Override
            public void handle(MouseEvent event) 
            {
                xOffset = event.getSceneX();
                yOffset = event.getSceneY();
            }
        });

        // 拖动窗口
        gui.titlePanel.setOnMouseDragged(new EventHandler<MouseEvent>() 
        {
            @Override
            public void handle(MouseEvent event) 
            {
                // 如果是最大化则不能拖动（或恢复窗口）
                if(gui.guiModel.isMaximized == false)
                {
                	// 不能拖动
                    gui.primaryStage.setX(event.getScreenX() - xOffset);
                    gui.primaryStage.setY(event.getScreenY() - yOffset);
                }
                else
                {
                	// 恢复窗口
                    setResizeWindow();
                }   
            }
        });
		
	}

	boolean isCodeChange() 
	{
		String newXMLCode = BDBParameters.webView.getEngine().executeScript("getXML()").toString();
		String xmlCode = BDBParameters.code.getXmlCode();
		
		if (newXMLCode.equals("<xml></xml>") || newXMLCode.equals("<xml xmlns=\"http://www.w3.org/1999/xhtml\"></xml>"))
			return false;
		
		if (!newXMLCode.equals(xmlCode))
			return true;
		
		return false;
	}
	

    private void setMinWindow()
    {
    	gui.primaryStage.setIconified(true);
    }
    
    private void setResizeWindow()
    {
        if (gui.guiModel.isMaximized == true) 
        {
        	// 获取分割位置信息
        	//pos = gui.splitPanel.getDividers().get(0).getPosition();
        	
            // 恢复原来的位置
            gui.primaryStage.setX(gui.guiModel.preX);
            gui.primaryStage.setY(gui.guiModel.preY);

            // 恢复原来的尺寸
            //gui.primaryStage.setWidth(1280);
            //gui.primaryStage.setHeight(800 + 10 + 10);
            
            gui.primaryStage.setWidth(BDBParameters.curWidth);
            gui.primaryStage.setHeight(BDBParameters.curHeight);

            // 更新状态标签
            gui.guiModel.isMaximized = false;
        } 
        else 
        {
            // 获取分割位置信息
        	//pos = gui.splitPanel.getDividers().get(0).getPosition();

            // 记录窗体当前的位置
            gui.guiModel.preX = gui.primaryStage.getX();
            gui.guiModel.preY = gui.primaryStage.getY();
            
            BDBParameters.curWidth = gui.primaryStage.getWidth();
        	BDBParameters.curHeight = gui.primaryStage.getHeight();

            // 自定义最大化
            if(BDBParameters.os.equals("Mac OS X"))
            {
            	gui.primaryStage.setX(0);
                gui.primaryStage.setY(22);
                gui.primaryStage.setWidth(gui.visualBounds.getWidth());
                gui.primaryStage.setHeight(gui.visualBounds.getHeight() + 4);
            }
            else
            {
            	gui.primaryStage.setX(-1);
                gui.primaryStage.setY(-1);
                gui.primaryStage.setWidth(gui.visualBounds.getWidth() + 2);
                gui.primaryStage.setHeight(gui.visualBounds.getHeight() + 2);
            }
            
            // 更新状态标签
            gui.guiModel.isMaximized = true;
        }
    }
}
