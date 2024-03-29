package model;

import model.BDBCode;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.scene.web.WebView;

public class BDBParameters 
{
	static public WebView webView;

	static public String os			 	= "";				// 操作系统类型
	static public String arch			= "";				// 操作系统指令长度（32/64）
	static public String version 		= "1.1.0-alpha"; 	// 软件版本号
	static public String langues 		= "zh-cn"; 			// 语言
	static public String organization	= "BuddyStudio";	// 开发组织
    static public String author			= "李宝智、郭少豪";		// 开发者署名

	static public String boardType 		= ""; // 开发板型号
	static public String connectCom 	= ""; // 串口序号
	static public String curComRate 	= ""; // 串口通讯波特率
	static public String sketchName 	= "sketch1";
	
	static public double minWidth		= 1280;
    static public double minHeight	    = 825;
    
    static public double curWidth		= 1280;
    static public double curHeight	    = 825;
	
	static public String sketchpath 	= System.getProperty("java.io.tmpdir") + sketchName;
	static public BDBCode code;
	static public String filepath		= "";
	static public String filename		= "";
	
	static public double defWidth		= 1280;
    static public double defHeight	    = 825;
    
    static public java.util.List<String> serialports;
    
    static public ObservableList<BDLibsModel> libsList = FXCollections.observableArrayList(); // 到入库列表
    
    static public String editorTheme = "";
    static public String editorFontSize = "";
    
    static public String editorIsCustom = "1";
    static public String editorPosX	= "";
    static public String editorPosY = "";
    static public String editorWidth = "";
    static public String editorHeight = "";
    
    static public String tempPath = "";
    
    static public String editorProfilePath = "profile/editor.txt";
    
    static public int    txtAreafontSize = 16;       		// 编辑区字体大小
	
	public BDBParameters() {}
	
	static public void writeProfile()
    {
    	// 创建一个FileWriter对象
        FileWriter fw;
        
		try 
		{
			fw = new FileWriter(editorProfilePath);
			
			String codeTxt = "";
			
			ArrayList<String> paraList = new ArrayList<String>();
			
			paraList.add("theme=" + editorTheme + "\n");
			paraList.add("size=" + String.valueOf(txtAreafontSize) + "px\n");
			paraList.add("isCustom=" + editorIsCustom + "\n");
			paraList.add("posX=" + editorPosX + "\n");
			paraList.add("posY=" + editorPosY + "\n");
			paraList.add("width=" + editorWidth + "\n");
			paraList.add("height=" + editorHeight + "\n");
			paraList.add("board=" + boardType + "\n");
			paraList.add("tempPath=" + tempPath + "\n");
			
			if(BDBParameters.langues.equals("简体中文"))
			{
				paraList.add("lang=" + "zh-CN" + "\n");
			}
			else if(BDBParameters.langues.equals("繁體中文"))
			{
				paraList.add("lang=" + "zh-HK" + "\n");
			}
			else if(BDBParameters.langues.equals("English"))
			{
				paraList.add("lang=" + "en-US" + "\n");
			}
			else
			{
				paraList.add("lang=" + "zh-CN" + "\n");
			}
			
			for(int i = 0; i < paraList.size(); i++)
			{
				codeTxt += paraList.get(i);
			}
	        
	        fw.write(codeTxt);
	        
	        // 刷新缓冲区
	        fw.flush();     
	        
	        // 关闭文件流对象
	        fw.close();
	        
		} 
		catch (IOException e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }
	
	static public void getProfile()
    {
    	// 读取编辑器配置文件
    	try 
		{
			BufferedReader br;
			
			br = new BufferedReader(new InputStreamReader(new FileInputStream(editorProfilePath),"UTF-8"));
			
			String line = null;

	        while ((line = br.readLine()) != null) 
	        {   
	            String codeTxt = line;
	            
	            int eqIndex = codeTxt.indexOf('=');
	            
	            if(eqIndex != -1)
	            {
	            	String attribute = codeTxt.substring(0, eqIndex);
	            	String value	 = codeTxt.substring(eqIndex + 1, codeTxt.length());
	            	
	            	if(attribute.equals("theme"))
	            	{
	            		editorTheme = value;
	            	}
	            	
	            	if(attribute.equals("size"))
	            	{
	            		editorFontSize = value.substring(0, value.length() - 2);
	            	}
	            	
	            	if(attribute.equals("isCustom"))
	            	{
	            		editorIsCustom = value;
	            	}
	            	
	            	if(attribute.equals("posX"))
	            	{
	            		editorPosX = value;
	            	}
	            	
	            	if(attribute.equals("posY"))
	            	{
	            		editorPosY = value;
	            	}
	            	
	            	if(attribute.equals("width"))
	            	{
	            		editorWidth = value;
	            	}
	            	
	            	if(attribute.equals("height"))
	            	{
	            		editorHeight = value;
	            	}
	            	
	            	if(attribute.equals("lang"))
	            	{
	            		//langues = value;
	            		
	            		if(value.equals("zh-CN"))
	        			{
	            			langues = "简体中文";
	        			}
	        			else if(value.equals("zh-HK"))
	        			{
	        				langues = "繁體中文";
	        			}
	        			else if(value.equals("en-US"))
	        			{
	        				langues = "English";
	        			}
	        			else
	        			{
	        				langues = "简体中文";
	        			}
	            	}
	            	
	            	if(attribute.equals("tempPath"))
	            	{
	            		//tempPath = value;
	            		tempPath = System.getProperty("java.io.tmpdir");
	            	}
	            	if(attribute.equals("board"))
	            	{
	            		boardType = value;
	            	}
	            }
	        }

	        br.close();
		} 
		catch (UnsupportedEncodingException | FileNotFoundException e) 
		{

		} 
    	catch (IOException e) 
    	{
			
		}
    }
	
	static public void getEditorProfile()
    {
    	// 读取编辑器配置文件
    	try 
		{
			BufferedReader br;
			
			br = new BufferedReader(new InputStreamReader(new FileInputStream(editorProfilePath),"UTF-8"));
			
			String line = null;
			
			int count = 0;

	        while ((line = br.readLine()) != null) 
	        {   
	            String codeTxt = line;
	            
	            if(count == 0)
	            {
	            	editorTheme = codeTxt.substring(6, codeTxt.length());
	            }
	            else if(count == 1)
	            {
	            	editorFontSize = codeTxt.substring(5, codeTxt.length() - 2);
	            }
	            
	            count++;
	        }

	        br.close();
		} 
		catch (UnsupportedEncodingException | FileNotFoundException e) 
		{
			e.printStackTrace();
		} 
    	catch (IOException e) 
    	{
			e.printStackTrace();
		} 
    }
}
