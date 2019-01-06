/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import util.base.Preferences;
import util.debug.BDSerial;

import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import model.BDBParameters;

import view.BDBPreSettingWindow;

/**
 *
 * @author gsh
 */
public class BDBPreSetWindowCtrl 
{
    public BDBPreSettingWindow preSettingWindow;
    
    public BDBPreSetWindowCtrl(BDBPreSettingWindow psw) throws Exception 
    {       
        this.preSettingWindow = psw;
        
        Preferences.init(null);
        Preferences.set("upload.verbose", "true");    

        if(preSettingWindow.combPin.getItems().size()==0) 
        { 
            preSettingWindow.combPin.setValue("未连接");
                       
            BDBParameters.serialports.clear();
            BDBParameters.connectCom = null;
        }
        else
        {    
            BDBParameters.serialports = BDSerial.list();            
            Preferences.set("serial.port", preSettingWindow.combPin.getSelectionModel().getSelectedItem().toString());            
            BDBParameters.connectCom = Preferences.get("serial.port");
        }
        
        preSettingWindow.btnSubmit.setOnAction(new EventHandler<ActionEvent>()
        {    
            @Override
            public void handle(ActionEvent event)  
            {
                if(BDBParameters.serialports.isEmpty())  
                {
                    // 如果未连接则返回
                    //return;
                }
                
                //menuView.lbBoard.setText("当前板型：" + preSettingWindow.combMode.getValue().toString());
                //menuView.lbCom.setText("当前串口：" + preSettingWindow.combPin.getValue().toString());
                String com= preSettingWindow.combPin.getSelectionModel().getSelectedItem().toString();
                String board=preSettingWindow.combMode.getValue().getType();
                
                // 设置开发板型号和串口序号
                Preferences.set("serial.port",com);
                BDBParameters.connectCom = com;
                BDBParameters.boardType  = board;
                Preferences.set("board",board);                
                Preferences.save();
                String cmd = String.format("setElementText('%s','%s')","lbl_board", board);
        		BDBParameters.webView.getEngine().executeScript(cmd);
        		cmd = String.format("setElementText('%s','%s')","lbl_port",com);
        		BDBParameters.webView.getEngine().executeScript(cmd);
                preSettingWindow.close();
            }
        });
        
        // 暂时屏蔽显示编译细节的选项
        /*
		 * preSettingWindow.chkShowDebug.selectedProperty().addListener((ov,
		 * old_val, new_val)->{ if(new_val){ Preferences.set("showdebug",
		 * "True"); } else{ Preferences.set("showdebug", "False"); }
		 * Preferences.save(); });
		 */

	}
}
