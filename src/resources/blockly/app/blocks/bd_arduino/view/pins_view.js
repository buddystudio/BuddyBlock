'use strict';
goog.provide('Blockly.Blocks.pins');
goog.require('Blockly.Blocks');

Blockly.Blocks.pins.HUE = 230;

Blockly.Blocks['pins_digital'] = 
{
	init: function() 
	{
		this.setColour(Blockly.Blocks.pins.HUE);
		this.appendDummyInput("")
			.appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), 'PIN');
		this.setOutput(true, Number);
	}
};

Blockly.Blocks['pins_analog'] = 
{
	init: function() 
	{
		this.setColour(Blockly.Blocks.pins.HUE);
		this.appendDummyInput("")
			.appendField(new Blockly.FieldDropdown(profile.default.dropdownAnalog), 'PIN');
		this.setOutput(true, Number);
	}
};

Blockly.Blocks['pins_pwm'] = 
{
	init: function() 
	{
		this.setColour(Blockly.Blocks.pins.HUE);
		this.appendDummyInput("")
			.appendField(new Blockly.FieldDropdown(profile.default.dropdownPWM), 'PIN');
		this.setOutput(true, Number);
	}
};

Blockly.Blocks['pins_interrupt'] = 
{
	init: function() 
	{
		this.setColour(Blockly.Blocks.pins.HUE);
		this.appendDummyInput("")
			.appendField(new Blockly.FieldDropdown(profile.default.dropdownInterrupt), 'PIN');
		this.setOutput(true, Number);
	}
};