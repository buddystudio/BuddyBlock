
goog.provide('Blockly.Constants.buddy');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['bd_arduino_inout_pinmode'] = 
{
	init: function() 
	{
		this.appendDummyInput()
			.appendField(Blockly.BUDDY_PINMODE + " PIN#")
			.appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN")
			.appendField(Blockly.BUDDY_STAT)
			.appendField(new Blockly.FieldDropdown([[Blockly.BUDDY_PINMODEIN, "INPUT"], [Blockly.BUDDY_PINMODEOUT, "OUTPUT"], [Blockly.BUDDY_PINMODEPULLUP, "INPUT_PULLUP"]]), "STAT");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Write digital value to a specific Port');
		this.setHelpUrl('https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/');
		this.setColour(20);
	}
};

Blockly.Blocks['bd_arduino_inout_attachInterrupt'] = 
{
	init: function() {
    this.setColour(20);
	this.appendDummyInput()
			.appendField(Blockly.BUDDY_ATTACHINTERRUPT_PIN + " PIN#")
			.appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN")
    this.appendDummyInput("")
      	.appendField(Blockly.BUDDY_MODE)
      	.appendField(new Blockly.FieldDropdown([[Blockly.BUDDY_RISING, "RISING"], [Blockly.BUDDY_FALLING, "FALLING"], [Blockly.BUDDY_CHANGE, "CHANGE"]]), "mode");
	this.setInputsInline(true);
	this.appendStatementInput('do')
        .appendField(Blockly.BUDDY_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setTooltip('');
  }
};

Blockly.Blocks['bd_arduino_inout_detachInterrupt'] = 
{
	init: function() 
	{
		this.appendDummyInput()
			.appendField(Blockly.BUDDY_DETACHINTERRUPT_PIN + " PIN#")
			.appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.BUDDY_TOOLTIP_INOUT_DETACHINTERRUPT);
		this.setHelpUrl('');
		this.setColour(20);
	}
};

Blockly.Blocks['bd_arduino_inout_detachInterrupt2'] = 
{
	init: function() 
	{
		this.setColour(20);
		this.appendDummyInput("").appendField("8 * 8 LEDS").appendField(new Blockly.FieldTextInput("LedArray1"), "VAR");
		this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a81").appendField(new Blockly.FieldCheckbox("FALSE"), "a82").appendField(new Blockly.FieldCheckbox("FALSE"), "a83").appendField(new Blockly.FieldCheckbox("FALSE"), "a84").appendField(new Blockly.FieldCheckbox("FALSE"), "a85").appendField(new Blockly.FieldCheckbox("FALSE"), "a86").appendField(new Blockly.FieldCheckbox("FALSE"), "a87").appendField(new Blockly.FieldCheckbox("FALSE"), "a88");
		this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a71").appendField(new Blockly.FieldCheckbox("FALSE"), "a72").appendField(new Blockly.FieldCheckbox("FALSE"), "a73").appendField(new Blockly.FieldCheckbox("FALSE"), "a74").appendField(new Blockly.FieldCheckbox("FALSE"), "a75").appendField(new Blockly.FieldCheckbox("FALSE"), "a76").appendField(new Blockly.FieldCheckbox("FALSE"), "a77").appendField(new Blockly.FieldCheckbox("FALSE"), "a78");
		this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a61").appendField(new Blockly.FieldCheckbox("FALSE"), "a62").appendField(new Blockly.FieldCheckbox("FALSE"), "a63").appendField(new Blockly.FieldCheckbox("FALSE"), "a64").appendField(new Blockly.FieldCheckbox("FALSE"), "a65").appendField(new Blockly.FieldCheckbox("FALSE"), "a66").appendField(new Blockly.FieldCheckbox("FALSE"), "a67").appendField(new Blockly.FieldCheckbox("FALSE"), "a68");
		this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a51").appendField(new Blockly.FieldCheckbox("FALSE"), "a52").appendField(new Blockly.FieldCheckbox("FALSE"), "a53").appendField(new Blockly.FieldCheckbox("FALSE"), "a54").appendField(new Blockly.FieldCheckbox("FALSE"), "a55").appendField(new Blockly.FieldCheckbox("FALSE"), "a56").appendField(new Blockly.FieldCheckbox("FALSE"), "a57").appendField(new Blockly.FieldCheckbox("FALSE"), "a58");
		this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a41").appendField(new Blockly.FieldCheckbox("FALSE"), "a42").appendField(new Blockly.FieldCheckbox("FALSE"), "a43").appendField(new Blockly.FieldCheckbox("FALSE"), "a44").appendField(new Blockly.FieldCheckbox("FALSE"), "a45").appendField(new Blockly.FieldCheckbox("FALSE"), "a46").appendField(new Blockly.FieldCheckbox("FALSE"), "a47").appendField(new Blockly.FieldCheckbox("FALSE"), "a48");
		this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a31").appendField(new Blockly.FieldCheckbox("FALSE"), "a32").appendField(new Blockly.FieldCheckbox("FALSE"), "a33").appendField(new Blockly.FieldCheckbox("FALSE"), "a34").appendField(new Blockly.FieldCheckbox("FALSE"), "a35").appendField(new Blockly.FieldCheckbox("FALSE"), "a36").appendField(new Blockly.FieldCheckbox("FALSE"), "a37").appendField(new Blockly.FieldCheckbox("FALSE"), "a38");
		this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a21").appendField(new Blockly.FieldCheckbox("FALSE"), "a22").appendField(new Blockly.FieldCheckbox("FALSE"), "a23").appendField(new Blockly.FieldCheckbox("FALSE"), "a24").appendField(new Blockly.FieldCheckbox("FALSE"), "a25").appendField(new Blockly.FieldCheckbox("FALSE"), "a26").appendField(new Blockly.FieldCheckbox("FALSE"), "a27").appendField(new Blockly.FieldCheckbox("FALSE"), "a28");
		this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a11").appendField(new Blockly.FieldCheckbox("FALSE"), "a12").appendField(new Blockly.FieldCheckbox("FALSE"), "a13").appendField(new Blockly.FieldCheckbox("FALSE"), "a14").appendField(new Blockly.FieldCheckbox("FALSE"), "a15").appendField(new Blockly.FieldCheckbox("FALSE"), "a16").appendField(new Blockly.FieldCheckbox("FALSE"), "a17").appendField(new Blockly.FieldCheckbox("FALSE"), "a18");
		this.setOutput(true, Number);
	}
};

Blockly.Blocks['bd_arduino_inout_pulseIn'] = 
{
	init: function() {
    this.setColour(20);
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.BUDDY_PULSEIN)
        .setCheck(Number);
    this.appendDummyInput("")
      	.appendField(Blockly.BUDDY_PULSEIN_STAT)
      	.appendField(new Blockly.FieldDropdown([[Blockly.BUDDY_HIGH, "HIGH"], [Blockly.BUDDY_LOW, "LOW"]]), "STAT");
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.inout_pulseIn2 = {
  init: function() {
    this.setColour(20);
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.BUDDY_PULSEIN)
        .setCheck(Number);
    this.appendDummyInput("")
      	.appendField(Blockly.BUDDY_PULSEIN_STAT)
      	.appendField(new Blockly.FieldDropdown([[Blockly.BUDDY_HIGH, "HIGH"], [Blockly.BUDDY_LOW, "LOW"]]), "STAT");
	this.appendValueInput("TIMEOUT", Number)
        .appendField(Blockly.BUDDY_PULSEIN_TIMEOUT)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
  }
};
