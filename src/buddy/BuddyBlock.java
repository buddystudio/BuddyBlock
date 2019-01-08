/**
 *************************************************************************
 *
 * @file Buddy.java
 * @brief 主程序入口
 * 
 * BuddyBlock主程序入口，界面初始化。
 * 
 * @author gsh
 * @version 1.0.0
 * @date 2019.01.08
 *
 *************************************************************************
 */
package buddy;

/*import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;*/

import controller.BDBGUICtrl;
import view.BDBGUIView;
import util.base.Base;
import util.base.Preferences;
import javafx.application.Application;
import javafx.stage.Stage;
import model.BDBParameters;

/**
 *
 * @author gsh
 */
public class BuddyBlock extends Application 
{ 
	//private static final Logger logger = LogManager.getLogger(BuddyBlock.class);
	
	/**
     * @param args the command line arguments
     */
    public static void main(String[] args)
    {
        launch(args); 
    }
	
    @Override
    public void start(Stage primaryStage) 
    {
    	// 获取配置信息
    	BDBParameters.getProfile();
    	
        // 判断系统类型
        String arch = System.getProperty("os.arch");
        String os   = System.getProperty("os.name");
        
        // 获取当前系统类型（Windows / Mac / Linux）
        BDBParameters.os = os;
        
        // 获取操作系统指令长度（32bit/64bit）
        BDBParameters.arch = arch;
        
        // 初始化基本配置参数
        Base base = new Base(null);
        
        Preferences.init(null);
        Preferences.set("upload.verbose", "true");

        // 初始化界面视图
        //BDGUIView2 gui = new BDGUIView2(primaryStage);
        
        // 初始化界面控制器
        //BDGUICtrl2 guiCtrl = new BDGUICtrl2(gui);
        
        BDBGUIView gui = new BDBGUIView(primaryStage);
		BDBGUICtrl guiCtrl = new BDBGUICtrl(gui);
    }
    
    private void getSysInfo()
    {
    	// 判断系统类型
        String arch = System.getProperty("os.arch");
        String os   = System.getProperty("os.name");
        
        // 获取当前系统类型（Windows / Mac / Linux）
        BDBParameters.os = os;
        
        // 获取操作系统指令长度（32bit/64bit）
        BDBParameters.arch = arch;

        /*
        System.out.println(arch);
        System.out.println(os);
        
        if(arch.contains("64"))
        {
        	System.out.println("64 bit");
        }
        else
        {
        	System.out.println("32 bit");
        }
        */
    }
}