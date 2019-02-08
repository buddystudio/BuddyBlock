/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package view;

import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.image.Image;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.stage.StageStyle;

/**
 *
 * @author gsh
 */
public class BDBDialogWindow extends BDBWindow
{
    public Image image;
    public Label msgLbl;
    
    public Button okBtn = new Button("确定");
    public Button giveupBtn = new Button("放弃");
    public Button cancleBtn = new Button("取消");
    
    public TextField txt  = new TextField();
    
    public BDBDialogWindow(String title, String msg, boolean okBtnEnable, boolean giveupBtnEnable, boolean cancleBtnEnable, boolean txtEnable)
    {
        // 窗口初始化
    	//super.init(360, 132);
    	super.init(500, 132);
    	
    	if(txtEnable == true)
    	{
    		this.setHeight(218);
    	}
        
        // 总在最前方
        this.setAlwaysOnTop(true);
       
        // 只有关闭按钮的窗口
        this.initStyle(StageStyle.UTILITY);
       
        this.setResizable(false);
       
        this.setTitle(title);
        this.setScene(scene);
       
        okBtn.setPrefWidth(105);
        okBtn.setPrefHeight(20);
        giveupBtn.setPrefWidth(105);
        giveupBtn.setPrefHeight(20);
        cancleBtn.setPrefWidth(105);
        cancleBtn.setPrefHeight(20);
       
        okBtn.setFont(Font.font(null, FontWeight.NORMAL, 14));
        giveupBtn.setFont(Font.font(null, FontWeight.NORMAL, 14));
        cancleBtn.setFont(Font.font(null, FontWeight.NORMAL, 14));

        VBox contain  = new VBox();
       
        //contain.setPadding(new Insets(10,0,5,0));  // 设置边距
        //contain.setSpacing(5);                    // 设置间距
       
        contain.setAlignment(Pos.CENTER);
       
        VBox topPanel = new VBox();
        HBox bottomPanel = new HBox();
       
        topPanel.setPadding(new Insets(25,0,15,0));      // 设置边距
        topPanel.setSpacing(15);                         // 设置间距
        bottomPanel.setPadding(new Insets(15,0,20,0));   // 设置边距
        bottomPanel.setSpacing(7);                       // 设置间距
       
        topPanel.setAlignment(Pos.CENTER);
        bottomPanel.setAlignment(Pos.CENTER);
       
        //image = new Image("images/iconIsSave.png");
       
        //ImageView iv = new ImageView(image);
       
        msgLbl = new Label(msg);
       
        msgLbl.setFont(Font.font(null, FontWeight.BOLD, 18));
       
        topPanel.setStyle("-fx-background-color:#ffffff");
        //topPanel.getChildren().add(iv);
        topPanel.getChildren().add(msgLbl);
       
        this.scene.getStylesheets().add("resources/style/msgWindowStyle.css");;
       
        okBtn.setStyle("-fx-background-color: #c2c2c2;");
       
        okBtn.getStyleClass().add("okBtn");
        giveupBtn.getStyleClass().add("okBtn");
        cancleBtn.getStyleClass().add("okBtn");

        if(okBtnEnable == true)
        {
        	bottomPanel.getChildren().add(okBtn);
        }
       
        if(giveupBtnEnable == true)
        {
        	bottomPanel.getChildren().add(giveupBtn);
        }
       
        if(cancleBtnEnable == true)
        {
        	bottomPanel.getChildren().add(cancleBtn);
        }
        
        txt.setMinHeight(40);
        txt.setMaxWidth(350);

        contain.getChildren().add(topPanel);
        
        if(txtEnable == true)
        {
        	//contain.getChildren().add(txt);
        	topPanel.getChildren().add(txt);
        }
        
        contain.getChildren().add(bottomPanel);
       
        rootPanel.getChildren().add(contain);
    }
}
