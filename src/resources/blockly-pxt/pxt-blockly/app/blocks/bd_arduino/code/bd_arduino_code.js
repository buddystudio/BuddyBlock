
Blockly.Arduino['bd_arduino_inout_pinmode'] = function(block) 
{
	var dropdown_pin = block.getFieldValue('PIN');
	var dropdown_stat = block.getFieldValue('STAT');
	var code = 'pinMode(' + dropdown_pin + ', ' + dropdown_stat + ');\n'
  
	return code;
};

Blockly.Arduino.inout_pulseIn2 = function () {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    var timeout = Blockly.Arduino.valueToCode(this, 'TIMEOUT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'pulseIn(' + dropdown_pin + ', ' + dropdown_stat + ', ' + timeout + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};