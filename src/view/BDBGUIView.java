package view;

import java.net.URL;

import controller.BDSettingWindowCtrl;
import javafx.geometry.Rectangle2D;
import javafx.scene.Scene;
import javafx.scene.layout.BorderPane;
import javafx.scene.paint.Color;
import javafx.stage.Screen;
import javafx.stage.Stage;
import javafx.stage.StageStyle;
import model.BDBParameters;
import model.BDGUIModel;
import util.base.DrawUtil;

public class BDBGUIView 
{
	public BorderPane root  		= new BorderPane();
	public BDTitleView  titlePanel  = new BDTitleView();
	public BDAboutWindow aboutWindow = new BDAboutWindow();	// 关于我们窗口
	
	public BDSettingWindow settingWindow	= new BDSettingWindow();
    public BDSettingWindowCtrl settingWindowCtrl = new BDSettingWindowCtrl(settingWindow);
	
	public Rectangle2D visualBounds;
    
    public BDGUIModel guiModel = new BDGUIModel();
	
	private final String DEFAULT_HOME_PAGE = getDefultUrl();
	
	public Stage primaryStage;
	
	public BDBGUIView(Stage primaryStage)
    {
		this.primaryStage = primaryStage;
		
		// 获取屏幕尺寸（不包含任务栏）
        this.visualBounds = Screen.getPrimary().getVisualBounds();
        
		BDBWorkspace workspace = new BDBWorkspace(DEFAULT_HOME_PAGE, primaryStage);

		root.setTop(titlePanel);
		root.setCenter(workspace);
		
		// Set main panel style
        String panelStyle = "";
        
        // 设置主窗体边框
        panelStyle += "-fx-background-radius:2px;";
        panelStyle += "-fx-border-color: #333333;";
        panelStyle += "-fx-border-width:2px;";
        panelStyle += "-fx-border-radius:1px;";
        panelStyle += "-fx-background:transparent;";
        
        String panelStyle2 = "";
        
        panelStyle2 += "-fx-background-radius:0px;";
        panelStyle2 += "-fx-border-color: #333333;";
        panelStyle2 += "-fx-border-width:3px;";
        panelStyle2 += "-fx-border-radius:0px;";
        panelStyle2 += "-fx-background:transparent;";
        
        root.setStyle(panelStyle);
        workspace.setStyle(panelStyle2);
		
		//Scene scene = new Scene(root);
		//Scene scene = new Scene(root, 1120, 640);
		Scene scene = new Scene(root, BDBParameters.minWidth, BDBParameters.minHeight);

		// Set panel background transparent.
        scene.setFill(Color.TRANSPARENT);
        
        primaryStage.initStyle(StageStyle.TRANSPARENT);
		primaryStage.setScene(scene);
		primaryStage.show();
		
		// 添加窗体拉伸效果
        DrawUtil.addDrawFunc(this.primaryStage, root);
		
		scene.getStylesheets().add("resources/style/titleStyle.css"); 
    }
	
	public String getDefultUrl()
	{
		// Get current path.
		String curPath = this.getClass().getResource("/").getPath();
		
		// 简体中文版
		String pageUrl = "file://" + curPath + "resources/blockly/app/index.html?lang=zh-hans";
		
		// 英文版
		//String pageUrl = "file://" + curPath + "resources/blockly/app/index.html?lang=en_BD";
		
		return pageUrl;
	}
	
	public String getDefaultHomePageUrl() 
	{
		String pageUrl = getDefultUrl();		
		URL url = this.getClass().getClassLoader().getResource(DEFAULT_HOME_PAGE);
		
		if (url == null) 
		{
			System.out.println(
			"Could not find " + DEFAULT_HOME_PAGE + " in CLASSPATH. " +
			"Using " + pageUrl + " as the default home page." );
		}
		else 
		{
			pageUrl = url.toExternalForm();
		}
		
		return pageUrl;
	}
}
