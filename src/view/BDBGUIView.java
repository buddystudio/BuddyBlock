package view;

import java.net.URL;

import controller.BDSettingWindowCtrl;
import javafx.geometry.Rectangle2D;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.layout.BorderPane;
import javafx.scene.paint.Color;
import javafx.stage.Screen;
import javafx.stage.Stage;
import javafx.stage.StageStyle;
import model.BDBParameters;
import model.BDGUIModel;
import util.base.BDDrawUtil;

public class BDBGUIView 
{
	public BorderPane root  		= new BorderPane();
	public BDTitleView  titlePanel  = new BDTitleView();
	
	public BDAboutWindow aboutWindow 		= new BDAboutWindow();
	public BDSettingWindow settingWindow	= new BDSettingWindow();
	
    public BDSettingWindowCtrl settingWindowCtrl = new BDSettingWindowCtrl(settingWindow);
	
	public Rectangle2D visualBounds;
    
    public BDGUIModel guiModel = new BDGUIModel();

	public Stage primaryStage;
	
	public BDBWorkspace workspace;
	
	private final String DEFAULT_HOME_PAGE = getDefultUrl();
	
	public BDBGUIView(Stage primaryStage)
    {
		this.primaryStage = primaryStage;
		
		// 获取屏幕尺寸（不包含任务栏）
        this.visualBounds = Screen.getPrimary().getVisualBounds();
        
		this.workspace = new BDBWorkspace(DEFAULT_HOME_PAGE, primaryStage);

		root.setTop(titlePanel);
		root.setCenter(workspace);
		
		// Set application icon.
        this.primaryStage.getIcons().add(new Image("resources/images/icon_64.png"));
		
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
        
        if(BDBParameters.langues.equals("English"))
    	{
        	BDBParameters.minWidth += 80;
    	}

		Scene scene = new Scene(root, BDBParameters.minWidth, BDBParameters.minHeight);

		// Set panel background transparent.
        scene.setFill(Color.TRANSPARENT);
        
        primaryStage.initStyle(StageStyle.TRANSPARENT);
		primaryStage.setScene(scene);
		primaryStage.show();
		
		// 添加窗体拉伸效果
        BDDrawUtil.addDrawFunc(this.primaryStage, root);
		
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
		
		if(BDBParameters.langues.equals("简体中文"))
    	{
			//pageUrl = "file://" + curPath + "resources/blockly/app/index.html?lang=zh-hans";
			pageUrl = "file://" + curPath + "resources/blockly-pxt/pxt-blockly/app/index.html?lang=zh-hans";
    	}
    	else if(BDBParameters.langues.equals("繁體中文"))
    	{
    		//pageUrl = "file://" + curPath + "resources/blockly/app/index.html?lang=zh-hans";
    		pageUrl = "file://" + curPath + "resources/blockly-pxt/pxt-blockly/app/index.html?lang=zh-hans";
    	}
    	else if(BDBParameters.langues.equals("English"))
    	{
    		//pageUrl = "file://" + curPath + "resources/blockly/app/index.html?lang=en_BD";
    		pageUrl = "file://" + curPath + "resources/blockly-pxt/pxt-blockly/app/index.html?lang=en_BD";
    	}
    	else
    	{
    		//pageUrl = "file://" + curPath + "resources/blockly/app/index.html?lang=zh-hans";
    		pageUrl = "file://" + curPath + "resources/blockly-pxt/pxt-blockly/app/index.html?lang=zh-hans";
    	}
		
		// 临时处理新版目录
		//pageUrl = "file://" + curPath + "resources/blockly-pxt/pxt-blockly/app/index.html?lang=zh-hans";
		
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
