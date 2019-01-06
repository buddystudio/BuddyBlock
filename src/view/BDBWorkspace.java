package view;

import model.BDBParameters;
import controller.BDBJSHandlers;
import model.BDBCode;
import javafx.scene.control.Label;
import javafx.scene.control.MenuButton;
import javafx.scene.layout.BorderPane;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import javafx.stage.Window;

public class BDBWorkspace extends BorderPane {
	private static String DEFAULT_HOME_PAGE = "";
	private WebView webView;
	BDBCode code;
	public BDBWorkspace(Window ownerWindow) {
		
		this(null, ownerWindow);
	}

	public BDBWorkspace(String homePageUrl, Window ownerWindow) {
		this(homePageUrl, true, true, true, ownerWindow);
	}

	public BDBWorkspace(String homePageUrl, boolean enableNavigationBar, boolean enableStatusBar,
			boolean enableJSHandlers, Window ownerWindow) {
		// Create the WebView
		webView = new WebView();
		code=new BDBCode();
		BDBParameters.webView = webView;
		BDBParameters.code=code;
		this.setCenter(webView);

		if (homePageUrl == null) {
			homePageUrl = DEFAULT_HOME_PAGE;
		}

		if (enableNavigationBar) {
			this.addNavigationBar(homePageUrl);
		}

		if (enableStatusBar) {
			this.addStatusBar();
		}

		if (enableJSHandlers) {
			this.addJSHandlers(ownerWindow);
		}
	}

	private void addNavigationBar(String homePageUrl) {
		MenuButton options = new MenuButton();
		BDBBrowserHistory historyComponent = new BDBBrowserHistory(webView);
		BDBNavigationBar navBar = new BDBNavigationBar(webView, homePageUrl, true);

		navBar.getChildren().addAll(options, historyComponent);

		// hide the navBar
		// this.setTop(navBar);
		// navBar.setVisible(false);

	}

	private void addStatusBar() {
		Label statusLbl = new Label();

		// Configure the status bar
		statusLbl.setStyle("-fx-background-color: lightgray;");
		statusLbl.prefWidthProperty().bind(webView.widthProperty());

		// If the Worker object reports a message, display it in the status bar
		webView.getEngine().getLoadWorker().messageProperty()
				.addListener((prop, oldMsg, newMsg) -> statusLbl.setText(newMsg));

		// Update the status bar when window.status proeprty changes
		webView.getEngine().setOnStatusChanged(e -> statusLbl.setText(e.getData()));

		// hide the statusLbl
		// this.setBottom(statusLbl);
	}

	private void addJSHandlers(Window ownerWindow) {

		webView.getEngine().setPromptHandler(BDBJSHandlers.getPromptHandler());
		webView.getEngine().setCreatePopupHandler(BDBJSHandlers.getPopupHandler());
		webView.getEngine().setOnAlert(BDBJSHandlers::alertHandler);
		webView.getEngine().setConfirmHandler(BDBJSHandlers.getConfirmHandler());

		if (ownerWindow instanceof Stage) {
			Stage stage = (Stage) ownerWindow;
			// Sync the title of the stage with the title of the loaded web page
			// webView.getEngine().titleProperty().addListener((prop, oldTitle,
			// newTitle) -> stage.setTitle(newTitle));
			webView.getEngine().titleProperty()
					.addListener((prop, oldTitle, newTitle) -> stage.setTitle("BuddyBlock"));
		}
	}

	public WebView getWebView() {
		return webView;
	}
}
