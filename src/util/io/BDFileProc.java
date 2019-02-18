package util.io;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

import javafx.stage.FileChooser;
import model.BDCodeModel;

public class BDFileProc
{
	public static BDCodeModel openFile()
	{
		BDCodeModel code = null;
		
		// 打开文件
		File file;
		FileChooser fileChooser = new FileChooser();

		// Set extension filter
		FileChooser.ExtensionFilter extFilterTXT = new FileChooser.ExtensionFilter("Text  (*.txt)", "*.txt");
		FileChooser.ExtensionFilter extFilterINO = new FileChooser.ExtensionFilter("Arduino  (*.ino)", "*.ino");
		FileChooser.ExtensionFilter extFilterCPP = new FileChooser.ExtensionFilter("C++  (*.cpp)", "*.cpp");
		FileChooser.ExtensionFilter extFilterC = new FileChooser.ExtensionFilter("C  (*.c)", "*.c");
		FileChooser.ExtensionFilter extFilterH = new FileChooser.ExtensionFilter("Head Files  (*.h)", "*.h");
		FileChooser.ExtensionFilter extFilterAll = new FileChooser.ExtensionFilter("All Files  (*.*)", "*.*");

		fileChooser.getExtensionFilters().add(extFilterINO);
		fileChooser.getExtensionFilters().add(extFilterTXT);
		fileChooser.getExtensionFilters().add(extFilterCPP);
		fileChooser.getExtensionFilters().add(extFilterC);
		fileChooser.getExtensionFilters().add(extFilterH);
		fileChooser.getExtensionFilters().add(extFilterAll);

		// Show open file dialog
		file = fileChooser.showOpenDialog(null);
		
		if(file == null)
		{
			return code;
		}
		
		code = new BDCodeModel();
			
		code.setName(file.getName());

		try 
		{
			//code.setCodeText(BDCodeReader.readFileByLines2(file.getPath()));
			code.setCodeText(BDCodeReader.readFileByLines(file.getPath()));

			// 写入文件路径
			code.path = file.getPath();
		} 
		catch (FileNotFoundException ex) 
		{
			//logger.error(ex.getMessage());
		} 
		catch (IOException ex) 
		{
			//logger.error(ex.getMessage());
		}
		
		return code;
	}
	
	public static boolean deleteDir(String path)
	{
		File file = new File(path);
		
		if(!file.exists())
		{
			//判断是否待删除目录是否存在
			//System.err.println("The dir are not exists!");
			
			return false;
		}
		
		String[] content = file.list();//取得当前目录下所有文件和文件夹
		
		for(String name : content)
		{
			File temp = new File(path, name);
			
			if(temp.isDirectory())
			{
				//判断是否是目录
				deleteDir(temp.getAbsolutePath());//递归调用，删除目录里的内容
				
				temp.delete();//删除空目录
			}
			else
			{
				if(!temp.delete())
				{
					//直接删除文件
					//System.err.println("Failed to delete " + name);
				}
			}
		}
		return true;
	}
	
	public BDFileProc()
	{
		
	}

}
