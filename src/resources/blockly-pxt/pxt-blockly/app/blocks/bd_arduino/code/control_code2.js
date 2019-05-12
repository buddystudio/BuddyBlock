

Blockly.Arduino.base_setup = function () {
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    if (branch) 
	{
        Blockly.Arduino.setups_['setup_setup'] = branch;
    }
    return '';
};

Blockly.Arduino.controls_end_program = function () {
    return 'while(true);\n';
};

Blockly.Arduino.base_delay = function () {
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
    var unit = this.getFieldValue('UNIT');
    var code = unit + '(' + delay_time + ');\n';
    return code;
};

Blockly.Arduino.controls_switch_case = function () {
    var n = 0;
    var argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
        Blockly.Arduino.ORDER_NONE) || 'NULL';
    var branch = '';
    var code = 'switch (' + argument + ') {\n';
    for (n = 1; n <= this.elseifCount_; n++) {
        argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
          Blockly.Arduino.ORDER_NONE) || 'NULL';
        branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
        code += ' case ' + argument + ': \n' + branch + '  break;\n';
    }
    if (this.elseCount_) {
        branch = Blockly.Arduino.statementToCode(this, 'ELSE');
        code += ' default:\n' + branch + '  break;\n';
    }
    code += '}';
    return code + '\n';
};

Blockly.Arduino.controls_millis = function () {
    var unit = this.getFieldValue('UNIT');
    var code = unit + "()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.controls_interrupts = function () {
    return 'interrupts();\n';
};

Blockly.Arduino.controls_nointerrupts = function () {
    return 'noInterrupts();\n';
};