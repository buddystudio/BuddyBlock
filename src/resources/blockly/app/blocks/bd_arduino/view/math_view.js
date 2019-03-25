'use strict';

goog.provide('Blockly.Blocks.math');

goog.require('Blockly.Blocks');


Blockly.Blocks.math.HUE = "#9966ff";

// 最大最小值
Blockly.Blocks['math_max_min']= 
{
	init: function() 
	{
		var OPERATORS =[[Blockly.BUDDY_MAX, 'max'], [Blockly.BUDDY_MIN, 'min'],];
			
		this.setColour(Blockly.Blocks.math.HUE);
		this.appendValueInput('A')
			.setCheck('Number')
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(new Blockly.FieldDropdown(OPERATORS), 'OP')
			.appendField('(');
		this.appendValueInput('B')
			.setCheck('Number')
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(',');
		this.appendDummyInput('')
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(')');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		
		var thisBlock = this;
		
		this.setTooltip(function() 
		{
			var mode = thisBlock.getFieldValue('OP');
			
			var TOOLTIPS = 
			{
				'max': Blockly.BUDDY_TOOLTIP_MATH_MAX,
				'min': Blockly.BUDDY_TOOLTIP_MATH_MIN
			};
			
			return TOOLTIPS[mode];
		});
	}
};
