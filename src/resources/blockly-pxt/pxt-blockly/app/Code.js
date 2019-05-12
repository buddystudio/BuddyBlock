'use strict';

/**
 * Create a namespace for the application.
 */
var Code = {};

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Code.LANGUAGE_NAME = {
    'ar': 'العربية',
    'be-tarask': 'Taraškievica',
    'br': 'Brezhoneg',
    'ca': 'Català',
    'cs': 'Česky',
    'da': 'Dansk',
    'de': 'Deutsch',
    'el': 'Ελληνικά',
    'en': 'English',
    'es': 'Español',
    'et': 'Eesti',
    'fa': 'فارسی',
    'fr': 'Français',
    'he': 'עברית',
    'hrx': 'Hunsrik',
    'hu': 'Magyar',
    'ia': 'Interlingua',
    'is': 'Íslenska',
    'it': 'Italiano',
    'ja': '日本語',
    'kab': 'Kabyle',
    'ko': '한국어',
    'mk': 'Македонски',
    'ms': 'Bahasa Melayu',
    'nb': 'Norsk Bokmål',
    'nl': 'Nederlands, Vlaams',
    'oc': 'Lenga d\'òc',
    'pl': 'Polski',
    'pms': 'Piemontèis',
    'pt-br': 'Português Brasileiro',
    'ro': 'Română',
    'ru': 'Русский',
    'sc': 'Sardu',
    'sk': 'Slovenčina',
    'sr': 'Српски',
    'sv': 'Svenska',
    'ta': 'தமிழ்',
    'th': 'ภาษาไทย',
    'tlh': 'tlhIngan Hol',
    'tr': 'Türkçe',
    'uk': 'Українська',
    'vi': 'Tiếng Việt',
    'zh-hans': '简体中文',
    'zh-hant': '正體中文'
};

/**
 * List of RTL languages.
 */
Code.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Code.workspace = null;

/**
 * Initialize Blockly.  Called on page load.
 * 主程序入口（初始化）
 */
Code.init = function() 
{
    Code.initLanguage();
	
    setBackgroundColor();

    // Parse the URL arguments.
    var match = location.search.match(/dir=([^&]+)/);
    var rtl = match && match[1] == 'rtl';
    
	document.forms.options.elements.dir.selectedIndex = Number(rtl);
    
	var toolbox = getToolboxElement();
    
	document.forms.options.elements.toolbox.selectedIndex = getToolboxFormIndex(toolbox.id);
    
	match = location.search.match(/side=([^&]+)/);
    
	var side = match ? match[1] : 'start';
	
    document.forms.options.elements.side.value = side;
	
	Code.workspace = workspace;
	
    // Create main workspace.
    Code.workspace = Blockly.inject('blocklyDiv', 
	{
        comments: true,
        collapse: true,
        disable: true,
        grid: {
            spacing: 25,
            length: 3,
            colour: '#ccc',
            snap: true
        },
        horizontalLayout: side == 'top' || side == 'bottom',
        maxBlocks: Infinity,
        media: '../media/',
        oneBasedIndex: true,
        readOnly: false,
        rtl: rtl,
        scrollbars: true,
        toolbox: toolbox,
        toolboxPosition: side == 'top' || side == 'start' ? 'start': 'end',
        toolboxOptions: {
            color: true,
            inverted: true
        },
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 4,
            minScale: .25,
            scaleSpeed: 1.1
        }
    });
	
    // Restore previously displayed text.
    if (sessionStorage) 
	{
        var text = sessionStorage.getItem('textarea');
		
        if (text) 
		{
            document.getElementById('importExport').value = text;
        }
		
        // Restore event logging state.
        var state = sessionStorage.getItem('logEvents');
        //logEvents(Boolean(Number(state)));
    } 
	else 
	{
        // MSIE 11 does not support sessionStorage on file:// URLs.
        //logEvents(false);
    }
    taChange();

    // Register help icon handler
	/*
    workspace.registerButtonCallback('GROUP_HELP',
		function(button) 
		{
			alert("Help icon triggered")
		}
	);
	*/
}

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if parameter not found.
 * @return {string} The parameter value or the default value if not found.
 */
Code.getStringParamFromUrl = function(name, defaultValue) {
    var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));

    return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Code.getLang = function() {
    var lang = Code.getStringParamFromUrl('lang', '');

    if (Code.LANGUAGE_NAME[lang] === undefined) {
        // Default to English.
        lang = 'en';
    }

    return lang;
};

/**
 * Is the current language (Code.LANG) an RTL language?
 * @return {boolean} True if RTL, false if LTR.
 */
Code.isRtl = function() {
    return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};

/**
 * Save the blocks and reload with a different language.
 */
Code.changeLanguage = function() {

    // Store the blocks for the duration of the reload.
    // MSIE 11 does not support sessionStorage on file:// URLs.
    if (window.sessionStorage) {

        var xml = Blockly.Xml.workspaceToDom(Code.workspace);
        alert("good");
		//alert("%{BKY_LOGIC_NEGATE_TITLE}");
        var text = Blockly.Xml.domToText(xml);
        window.sessionStorage.loadOnceBlocks = text;
    }

    var languageMenu = document.getElementById('languageMenu');
    var newLang = encodeURIComponent(languageMenu.options[languageMenu.selectedIndex].value);
    var search = window.location.search;

    if (search.length <= 1) {
        search = '?lang=' + newLang;
    } else if (search.match(/[?&]lang=[^&]*/)) {
        search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
    } else {
        search = search.replace(/\?/, '?lang=' + newLang + '&');
    }

    window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + search;
};

/**
 * User's language (e.g. "en").
 * @type {string}
 */
Code.LANG = Code.getLang();

/**
 * Initialize the page language.
 */
Code.initLanguage = function() {
    // Set the HTML's language and direction.
    var rtl = Code.isRtl();

    document.dir = rtl ? 'rtl': 'ltr';
    document.head.parentElement.setAttribute('lang', Code.LANG);

    // Sort languages alphabetically.
    var languages = [];

    for (var lang in Code.LANGUAGE_NAME) {
        languages.push([Code.LANGUAGE_NAME[lang], lang]);
    }

    var comp = function(a, b) {
        // Sort based on first argument ('English', 'Русский', '简体字', etc).
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return - 1;
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

        if (lang == Code.LANG) {
            option.selected = true;
        }

        languageMenu.options.add(option);
    }

    languageMenu.addEventListener('change', Code.changeLanguage, true);

    // Inject language strings.
    //document.getElementById('tab_blocks').textContent = MSG['blocks'];
    //document.getElementById('trashButton').title = MSG['trashTooltip'];
    //change Blockly title span by this one
    //document.getElementById('title2').textContent = Blockly.Msg.TITLE2;
};

// Load the Code demo's language strings.
document.write('<script src="msg/js/' + Code.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="../msg/js/' + Code.LANG + '.js"></script>\n');

// Load BlocklyDuino's language strings.
document.write('<script src="msg/js/' + Code.LANG + '_BD.js"></script>\n');

window.addEventListener('load', Code.init);