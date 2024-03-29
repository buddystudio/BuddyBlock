/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Base64;

import util.debug.BDInoCode;

/*import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;*/

import util.io.BDCodeReader;

//import com.mongcj.util.io.BDCodeReader;

import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.control.TreeItem;
import javafx.scene.control.TreeView;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.input.MouseButton;
import javafx.scene.input.MouseEvent;
import model.BDBParameters;
import model.BDCodeModel;
import view.BDExampleWindow;

/**
 *
 * @author gsh
 */
public class BDExampleWindowCtrl 
{
	//private static final Logger logger = LogManager.getLogger();
	
	public BDExampleWindow rootWindow;
	//public BDWorkspaceCtrl rootWorkspaceCtrl;
	
    //public BDExampleWindowCtrl(BDExampleWindow exampleWindow, BDWorkspaceCtrl workspaceCtrl)
    public BDExampleWindowCtrl(BDExampleWindow exampleWindow)
    {
    	rootWindow = exampleWindow;
    	//rootWorkspaceCtrl = workspaceCtrl;
 
    	// Get example files path.
        String path = System.getProperty("user.dir") + File.separator + "examples";
        
        // 测试目录
        File file = new File(path);
        
        File[] exRootList = file.listFiles();

        Image icon = new Image(getClass().getResourceAsStream("/resources/images/iconDoc.png"));
        Image icon2 = new Image(getClass().getResourceAsStream("/resources/images/iconDoc2.png"));

        ImageView iv = new ImageView(icon);

        exampleWindow.rootItem = new TreeItem<String> ("例子程序", iv);
        exampleWindow.rootItem.setExpanded(true);
        
        for (int i = 0; i < exRootList.length; i++) 
        {
            if (exRootList[i].isDirectory()) 
            {
                ImageView iv2 = new ImageView(icon);

                TreeItem<String> item = new TreeItem<String> (exRootList[i].getName(), iv2);
                
                File subFile = new File(path + File.separator + exRootList[i].getName());
                
                File[] exSubList = subFile.listFiles();
                
                for (int j = 0; j < exSubList.length; j++)
                {
                    if (exSubList[j].isDirectory()) 
                    {
                    		File subFile2 = new File(path + File.separator + exRootList[i].getName() + File.separator + exSubList[j].getName());
                    		
                    		File[] exSubList2 = subFile2.listFiles();
                       
                    		ImageView iv3 = new ImageView(icon2);
                       
                    		iv3.setId(exSubList[j].getPath());
                       
                    		if (exSubList2[0].isDirectory()) 
                    		{
                         	iv3 = new ImageView(icon);
                           
                         	iv3.setId(null);
                    		}

                    		TreeItem<String> item2 = new TreeItem<String> (exSubList[j].getName(), iv3);
 
                    		for (int k = 0; k < exSubList2.length; k++) 
                    		{
                    			if (exSubList2[k].isDirectory()) 
                    			{
                    				ImageView iv4 = new ImageView(icon2);
                                
                    				iv4.setId(exSubList[j].getPath());

                    				TreeItem<String> item3 = new TreeItem<String> (exSubList2[k].getName(), iv4);
                    				item2.getChildren().add(item3);
                    			}
                    		}
                       
                       item.getChildren().add(item2);
                    }
                }
                
                exampleWindow.rootItem.getChildren().add(item);
            }
        }
        
        exampleWindow.tree = new TreeView<String> (exampleWindow.rootItem); 
        
        // Double click the tree item and import the selected source code file.
        exampleWindow.tree.setOnMouseClicked(new EventHandler<MouseEvent>() 
        {    
            @Override
            public void handle(MouseEvent mouseEvent) 
            {
            	if(mouseEvent.getButton().equals(MouseButton.PRIMARY))
                {
                    if(mouseEvent.getClickCount() == 2)
                    {
                    	// Open the source code file.
                        try
						{
							openFile();
						} catch (IOException e)
						{
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
                    }
                }
            }
        });
 
        exampleWindow.contain.getChildren().add(exampleWindow.tree);
        exampleWindow.contain.getChildren().add(exampleWindow.importBtn);
        
        exampleWindow.tree.getStyleClass().add("mylistview");
        
        exampleWindow.tree.setMinHeight(500);
        
        // Click import button and import the source code file.
        exampleWindow.importBtn.setOnAction(new EventHandler<ActionEvent>() 
        {    
            @Override
            public void handle(ActionEvent event) 
            {
	        	// Open the source code file.
	            try
				{
					openFile();
				} catch (IOException e)
				{
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
            }
        });
    }
    
    public void openFile() throws UnsupportedEncodingException, FileNotFoundException, IOException
    {
        String path = "";
        String name = "";
        
        try
        {
        	path = this.rootWindow.tree.getSelectionModel().getSelectedItem().getGraphic().getId();
        	name = this.rootWindow.tree.getSelectionModel().getSelectedItem().getValue();
        }
        catch(Exception e) 
        {
        	return;
        }
        
        // If the file exist.
        if(path != null)
        {
        	path = path + File.separator + name + ".xml";
        	
        	File file = new File(path);

			String xml = BDCodeReader.readFileByLines(file.getPath());
			//System.out.println("updateXML(\'" + xml + "\')");
			// Base64 encode.
			xml = Base64.getEncoder().encodeToString(xml.getBytes());

			BDBParameters.webView.getEngine().executeScript("updateXML(\"" + xml + "\")");
			BDBParameters.code.setInoCode(new BDInoCode(
			BDBParameters.webView.getEngine().executeScript("Blockly.Arduino.workspaceToCode()").toString()));
			
			// 更新文件名
			BDBParameters.webView.getEngine().executeScript("updateFileName('" + name + ".xml" +"')");
			BDBParameters.filename = name + ".xml";
			
            // 关闭窗口
            // Close the window.
            this.rootWindow.close();
        }
    }
}
