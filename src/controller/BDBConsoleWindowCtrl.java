/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import util.debug.BDProgressStatusEvent;
import util.debug.BDProgressStatusListener;
import util.debug.BDProgressType;

import javafx.application.Platform;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.stage.WindowEvent;
import view.BDBConsoleWindow;

/**
 *
 * @author gsh
 */
public class BDBConsoleWindowCtrl implements BDProgressStatusListener 
{

	BDBConsoleWindow consoleWindow;

	public BDBConsoleWindowCtrl(BDBConsoleWindow consoleWindow) 
	{
		this.consoleWindow = consoleWindow;
		
		consoleWindow.okBtn.setOnAction(new EventHandler<ActionEvent>() 
		{
			@Override
			public void handle(ActionEvent event) 
			{
				// 更新编译对话框，移除操作按钮
				removeBtns();

				// Close the console window.
				//consoleWindow.msgWindow.clearText();
				consoleWindow.close();
			}
		});

		consoleWindow.setOnCloseRequest(new EventHandler<WindowEvent>() 
		{
			@Override
			public void handle(WindowEvent event) 
			{
				// 更新编译对话框，移除操作按钮
				removeBtns();
				
				// 如果烧录已经触发就不能让开发者手动暂停（暂时）
    			event.consume();
				
				//consoleWindow.msgWindow.clearText();
			}
		});

	}

	public BDBConsoleWindow getView() {

		return this.consoleWindow;
	}

	public void setUploadStyle() 
	{
		consoleWindow.progressBarDebug.setProgress(0.0);
	}

	/*
	 * public void setUploadProgressVisable(boolean b){
	 * consoleWindow.progressBarUpload.setVisible(b); }
	 */
	@Override
	public void ProgressEventHandler(BDProgressStatusEvent event) 
	{
		// 在FX线程中，处理Swing线程的数据，必须使用Platform.runLater方法
		Platform.runLater(new Runnable() 
		{
			@Override
			public void run() 
			{
				int num = event.getProgressNumber();
				
				String msg = null;
				
				if (event.getProgressType() == BDProgressType.Compile) 
				{
					consoleWindow.progressBarDebug.setProgress(num / 100.0);
					
					if (num >= 100)
						msg = "编译完成";
					else
						msg = String.format("程序编译中...%d %% ", num);
					consoleWindow.lbl.setText(msg);
				}
				
				if (event.getProgressType() == BDProgressType.Upload) 
				{
					consoleWindow.progressBarDebug.setProgress(num / 100.0);
					
					if (num >= 100)
						msg = "上传完成";
					else
						msg = String.format("程序上传中...%d %%", num);
					
					consoleWindow.lbl.setText(msg);
				}
			}
		});
	}
	
	public void removeBtns() 
	{
		try 
		{
			// 更新编译对话框，移除操作按钮
			consoleWindow.contain.getChildren().add(consoleWindow.progressBarDebug);
			consoleWindow.contain.getChildren().remove(consoleWindow.bottomPanel);
		} 
		catch (Exception ex) {}
	}

	public void addBtns() 
	{
		try 
		{
			// 更新编译对话框，弹出操作按钮
			consoleWindow.contain.getChildren().add(consoleWindow.bottomPanel);
			consoleWindow.contain.getChildren().remove(consoleWindow.progressBarDebug);
		} 
		catch (Exception ex) {}
	}
}
