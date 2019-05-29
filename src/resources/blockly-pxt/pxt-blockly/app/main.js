'use strict';

function init() 
{
    var codeArea = document.getElementById('editor');

    codeArea.style.display = "none";
}

function btnBlockOnClick() 
{
    var spanBlock = document.getElementById('tabBlock');
    var spanCode = document.getElementById('tabArduino');

    spanBlock.setAttribute("class", "tabSpanOn");
    spanCode.setAttribute("class", "tabSpanOff");

    var blockArea = document.getElementById('blocklyDiv');

    blockArea.style.display = "";

    var codeArea = document.getElementById('editor');

    codeArea.style.display = "none";
}

function btnCodeOnClick() 
{
    var spanBlock = document.getElementById('tabBlock');
    var spanCode = document.getElementById('tabArduino');

    spanBlock.setAttribute("class", "tabSpanOff");
    spanCode.setAttribute("class", "tabSpanOn");

    var blockArea = document.getElementById('blocklyDiv');

    blockArea.style.display = "none";

    var codeArea = document.getElementById('editor');

    codeArea.style.display = "";

    toCode('Arduino');
}

// updateFileName("新文件.xml");
function updateFileName(fileName) 
{
    document.getElementById("file_info").innerText = fileName;
}
				
var workspace = null;

function start() 
{
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
			  
	// Create main workspace.
	workspace = Blockly.inject('blocklyDiv',
	{
		comments: true,
		collapse: true,
		disable: true,
		grid:
		{
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
		toolboxPosition: side == 'top' || side == 'start' ? 'start' : 'end',
		toolboxOptions:
		{
			color: true,
			inverted: true
		},
		zoom:
		{
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
		
		logEvents(Boolean(Number(state)));
	} 
	else 
	{
		// MSIE 11 does not support sessionStorage on file:// URLs.
		logEvents(false);
	}

	taChange();

	// Register help icon handler
	workspace.registerButtonCallback('GROUP_HELP', function(button) 
	{
		alert("Help icon triggered")
	});
}

function setBackgroundColor() 
{
	var lilac = '#d6d6ff';
	var currentPage = window.location.href;
	var regexFile = /^file[\S]*$/;

	if (regexFile.test(currentPage)) 
	{
		document.getElementsByTagName('body')[0].style.backgroundColor = lilac;
	}
}

	function getToolboxElement() 
	{
		var match = location.search.match(/toolbox=([^&]+)/);

		// Default to the basic toolbox with categories and untyped variables,
		// but override that if the toolbox type is set in the URL.
		var toolboxSuffix = (match ? match[1] : 'categories');
		// The three possible values are: "simple", "categories",
		// "categories-typed-variables".
			  return document.getElementById('toolbox-' + toolboxSuffix);
	}

function getToolboxFormIndex(id) 
{
	if (id == 'toolbox-categories') 
	{
		return 0;
	} 
	else if (id == 'toolbox-categories-typed-variables') 
	{
		return 1;
	} 
	else if (id == 'toolbox-simple') 
	{
		return 2;
	}
	
	// Didn't recognize it.
	return 0;
}

function toXml() 
{
	var output = document.getElementById('importExport');
	var xml = Blockly.Xml.workspaceToDom(workspace);

	output.value = Blockly.Xml.domToPrettyText(xml);
	output.focus();
	output.select();
	
	taChange();
}

function fromXml() 
{
	var input = document.getElementById('importExport');
	var xml = Blockly.Xml.textToDom(input.value);
	Blockly.Xml.domToWorkspace(xml, workspace);
	
	taChange();
}

function toCode(lang) 
{
	var output = document.getElementById('importExport');
	
	output.value = Blockly[lang].workspaceToCode(workspace);

	// 在ace编辑器中更新代码(1:光标在最后/-1：光标在最前)
	editor.setValue(output.value, 1);
			  
	taChange();
}

// Disable the "Import from XML" button if the XML is invalid.
// Preserve text between page reloads.
function taChange() 
{
	var textarea = document.getElementById('importExport');
	var aceCodeArea = document.getElementById('editor');
	
	if (sessionStorage) 
	{
		sessionStorage.setItem('textarea', textarea.value);
	}
	
	var valid = true;
			  
	try 
	{
		Blockly.Xml.textToDom(textarea.value);
		aceCodeArea.textToDom(textarea.value);
	} catch (e) 
	{
		valid = false;
	}
	
	document.getElementById('import').disabled = !valid;
}

function logEvents(state) 
{
	var checkbox = document.getElementById('logCheck');
		
	checkbox.checked = state;
			  
	if (sessionStorage) 
	{
		sessionStorage.setItem('logEvents', Number(state));
	}
	if (state) 
	{
		workspace.addChangeListener(logger);
	} 
	else 
	{
		workspace.removeChangeListener(logger);
	}
}

function logger(e) 
{
	console.log(e);
}

function centerOnBlock() 
{
	if (Blockly.selected) 
	{
		workspace.centerOnBlock(Blockly.selected.id, true);
	}
}

function highlightBlock() 
{
	if (Blockly.selected) 
	{
		workspace.highlightBlock(Blockly.selected.id, true);
	}
}

function unhighlightBlock() 
{
	if (Blockly.selected) 
	{
		workspace.highlightBlock(Blockly.selected.id, false);
	}
}

function highlightBlockWarning() 
{
	if (Blockly.selected) 
	{
		var block = workspace.getBlockById(Blockly.selected.id);
		
		if (block) 
		{
			block.setHighlightWarning(true);
		}
	}
}

function unhighlightBlockWarning() 
{
	if (Blockly.selected) 
	{
		var block = workspace.getBlockById(Blockly.selected.id);
		
		if (block) 
		{
			block.setHighlightWarning(false);
		}
	}
}

function glowBlock() 
{
	if (Blockly.selected) 
	{
		workspace.glowBlock(Blockly.selected.id, true);
	}
}

function unglowBlock() 
{
	if (Blockly.selected) 
	{
		workspace.glowBlock(Blockly.selected.id, false);
	}
}

function glowStack() 
{
	if (Blockly.selected) 
	{
		workspace.glowStack(Blockly.selected.id, true);
	}
}

function unglowStack() 
{
	if (Blockly.selected) 
	{
		workspace.glowStack(Blockly.selected.id, false);
	}
}

function airstrike(n) 
{
	var prototypes = [];
	var toolbox = getToolboxElement();
	var blocks = toolbox.getElementsByTagName('block');
	
	for (var i = 0, block; block = blocks[i]; i++) 
	{
		prototypes.push(block.getAttribute('type'));
	}
	for (var i = 0; i < n; i++) 
	{
		var prototype = prototypes[Math.floor(Math.random() * prototypes.length)];
		var block = workspace.newBlock(prototype);
		
		block.initSvg();
		block.getSvgRoot().setAttribute('transform', 'translate(' +
					Math.round(Math.random() * 450 + 40) + ', ' +
					Math.round(Math.random() * 600 + 40) + ')');
		block.render();
	}
}

function toggleBreakpoints() 
{
	workspace.options.debugMode = !workspace.options.debugMode;
	
	var blocks = workspace.getAllBlocks();
	
	blocks.forEach(block => 
	{
		if (block.nextConnection && block.previousConnection) 
		{
			block.enableBreakpoint(workspace.options.debugMode);
		}
	});
}

function spaghetti(n) 
{
	var xml = spaghettiXml;
	
	for(var i = 0; i < n; i++) 
	{
		xml = xml.replace(/(<(statement|next)( name="DO0")?>)<\//g,
					'$1' + spaghettiXml + '</');
	}
	
	xml = '<xml xmlns="http://www.w3.org/1999/xhtml">' + xml + '</xml>';
	
	var dom = Blockly.Xml.textToDom(xml);
	
	console.time('Spaghetti domToWorkspace');
	Blockly.Xml.domToWorkspace(dom, workspace);
	console.timeEnd('Spaghetti domToWorkspace');
}

			var spaghettiXml = [
			  '  <block type="controls_if">',
			  '    <value name="IF0">',
			  '      <block type="logic_compare">',
			  '        <field name="OP">EQ</field>',
			  '        <value name="A">',
			  '          <block type="math_arithmetic">',
			  '            <field name="OP">MULTIPLY</field>',
			  '            <value name="A">',
			  '              <block type="math_number">',
			  '                <field name="NUM">6</field>',
			  '              </block>',
			  '            </value>',
			  '            <value name="B">',
			  '              <block type="math_number">',
			  '                <field name="NUM">7</field>',
			  '              </block>',
			  '            </value>',
			  '          </block>',
			  '        </value>',
			  '        <value name="B">',
			  '          <block type="math_number">',
			  '            <field name="NUM">42</field>',
			  '          </block>',
			  '        </value>',
			  '      </block>',
			  '    </value>',
			  '    <statement name="DO0"></statement>',
			  '    <next></next>',
			  '  </block>'].join('\n');
			  
			  