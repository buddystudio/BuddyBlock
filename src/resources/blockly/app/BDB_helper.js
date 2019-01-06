
/**BDB
 *  compile and upload
 */
function compile(){
	window.prompt("compile", Blockly.Arduino.workspaceToCode())
}


/**BDB
 *  get XML base the blockly
 */
function getXML(){
	var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	 return  Blockly.Xml.domToText(xml);
}

/** BDB
 * save XML to file
 */
function saveXML(){ 
  var data = getXML();  
  window.prompt("saveXml", data);
}

/**BDB
 *  save XML to file
 */
function saveAs(){ 
  var data = getXML();  
  window.prompt("saveAs", data);
}

/**BDB
 *  road XML from file
 */
function loadXML() {
	var fileName = window.prompt('loadXml');
}

function setting(){
	window.prompt("setting", null);
}

function serial(){
	window.prompt("serial", null);
}

/**BDB 
 * update XML to workspace
 */
function updateXML(txt) {
	// clean the workspace
	Blockly.mainWorkspace.clear();
    //renderContent();
	
	var decodeXML = base64decode(txt);	
	var data = getXML();

	var xml = Blockly.Xml.textToDom(decodeXML);
	Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);	
}

/*BDB
 * update element text for java
 */
function setElementText(id,value){
	document.getElementById(id).innerHTML=value;
}

//测试恢复xml
function loadTest() {
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var data = Blockly.Xml.domToText(xml);
	
	var xml = Blockly.Xml.textToDom("<xml xmlns='http://www.w3.org/1999/xhtml'><block type='base_delay' id='12' x='88' y='63'><value name='DELAY_TIME'><block type='math_number' id='13'><field name='NUM'>1000</field></block></value></block></xml>");
	Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
  
  /*
	 * // 旧代码先屏蔽 if(fileName){ var blob = new Blob([data], {type: 'text/xml'});
	 * saveAs(blob, fileName + ".xml"); }
	 */
}


/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
var LANGUAGE_NAME = {  
  'en': 'English',  
  'zh-hans': '简体中文'//,  'zh-hant': '正體中文'
};

var LANG=getLang();

function getLang() {
  var lang = getStringParamFromUrl('lang', '');
  if (LANGUAGE_NAME[lang] === undefined) {
    // Default to English.
    lang = 'zh-hans';
  }
  return lang;
}

/**
 * Initialize the page language.
 */
function initLanguage() {  

  // Sort languages alphabetically.
  var languages = [];
  for (var lang in LANGUAGE_NAME) {
    languages.push([LANGUAGE_NAME[lang], lang]);
  }
  var comp = function(a, b) {
    // Sort based on first argument ('English', 'Русский', '简体字', etc).
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  languages.sort(comp);
  // Populate the language selection menu.
  var languageMenu = document.getElementById('languageMenu');
  languageMenu.options.length = 0;
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    LANG = getLang();
    if (lang == LANG) {
      option.selected = true;
    }
    languageMenu.options.add(option);    
  }
  languageMenu.addEventListener('change', changeLanguage, true);
  //document.write('<script src="../../msg/js/' + LANG + '.js"></script>\n');
  setLanguageText();  
}

function setLanguageText(){
	var categories = ['TOOLBOX_LOGIC','TOOLBOX_CONTROL','TOOLBOX_MATH','TOOLBOX_TEXT','TOOLBOX_INPUTOUTPUT','TOOLBOX_SERVO','TOOLBOX_GROVE','TOOLBOX_GROVEANALOG','TOOLBOX_GROVELCD','TOOLBOX_GROVEMOTOR','TOOLBOX_VARIABLES','TOOLBOX_FUNCTIONS','TOOLBOX_BUDDY'];
  for (var i = 0, cat; cat = categories[i]; i++) {
    document.getElementById(cat).setAttribute('name', eval("Blockly.Msg."+cat));
  }
  var buttons=["BUTTON_OPEN","BUTTON_SAVE","BUTTON_SAVEAS","BUTTON_DISCARD","BUTTON_SETTING","BUTTON_COMPILE","TAB_PORT","TAB_BOARD"];
  for (var i = 0,btn; btn = buttons[i]; i++) {
    document.getElementById(btn).innerHTML=eval("Blockly.Msg."+btn);    
  } 
  document.getElementById("lbl_board").innerHTML=Blockly.Msg.STATUS_NOSELECT;
  document.getElementById("lbl_port").innerHTML=Blockly.Msg.STATUS_DISCONNECT;
}

function changeLanguage() {
  // Store the blocks for the duration of the reload.
  // This should be skipped for the index page, which has no blocks and does
  // not load Blockly.
  // MSIE 11 does not support sessionStorage on file:// URLs.
  /*
  if (typeof Blockly != 'undefined' && window.sessionStorage) {
    var xml = Blockly.Xml.workspaceToDom(Code.workspace);
    var text = Blockly.Xml.domToText(xml);
    window.sessionStorage.loadOnceBlocks = text;
  }
	*/
  var languageMenu = document.getElementById('languageMenu');
  var newLang = encodeURIComponent(
      languageMenu.options[languageMenu.selectedIndex].value);
  
  var search = window.location.search;
  if (search.length <= 1) {
    search = '?lang=' + newLang;    
  } else if (search.match(/[?&]lang=[^&]*/)) {
    search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
  } else {
    search = search.replace(/\?/, '?lang=' + newLang + '&');
  }

  window.location = window.location.protocol + '//' +
      window.location.host + window.location.pathname + search;

}

function getStringParamFromUrl(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

// 默认语言为简体中文
//document.write('<script src="msg/js/' + LANG + '.js"></script>\n');

