
Blockly.Blocks['io_highlow'] = 
{
	init: function() 
	{
		this.setColour(20);
		this.appendDummyInput("")
			.appendField(new Blockly.FieldDropdown([[Blockly.BUDDY_HIGH, "HIGH"], [Blockly.BUDDY_LOW, "LOW"]]), 'BOOL')
		this.setOutput(true, Boolean);
		this.setTooltip(Blockly.BUDDY_TOOLTIP_INOUT_HIGHLOW);
	}
};

Blockly.Blocks['io_digital_write2'] = 
{
	init: function() 
	{
		this.setColour(20);
		this.appendValueInput("PIN", Number)
			.appendField(Blockly.BUDDY_DIGITALWRITE_PIN)
			.setCheck(Number);
		this.appendValueInput("STAT")
			.appendField(Blockly.BUDDY_STAT)
			.setCheck([Number,Boolean]);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
		this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
	}
};

Blockly.Blocks['io_digital_read2'] = 
{
	init: function() 
	{
		this.setColour(20);
		this.appendValueInput("PIN", Number)
			.appendField(Blockly.BUDDY_DIGITALREAD_PIN)
			.setCheck(Number);
		this.setInputsInline(true);
		this.setOutput(true, [Boolean,Number]);
		this.setTooltip(Blockly.BUDDY_TOOLTIP_INOUT_DIGITAL_READ);
  }
};

Blockly.Blocks['io_analog_write'] = 
{
	init: function() 
	{
		this.setColour(20);
		this.appendValueInput("PIN", Number)
			.appendField(Blockly.BUDDY_ANALOGWRITE_PIN)
			.setCheck(Number);
		this.appendValueInput("NUM", "Number")
			.appendField(Blockly.BUDDY_VALUE2)
			.setCheck("Number");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.BUDDY_TOOLTIP_INOUT_ANALOG_WRITE);
  }
};

Blockly.Blocks['io_pwm_write'] = 
{
	init: function() 
	{
		this.setColour(20);
		this.appendValueInput("PIN", Number)
			.appendField(Blockly.BUDDY_ANALOGWRITE_PIN)
			.setCheck(Number);
		this.appendValueInput("NUM", "Number")
			.appendField(Blockly.BUDDY_VALUE2)
			.setCheck("Number");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.BUDDY_TOOLTIP_INOUT_ANALOG_WRITE);
	}
};

Blockly.Blocks['io_analog_read'] = 
{
	init: function() 
	{
		this.setColour(20);
		this.appendValueInput("PIN", Number)
			.appendField(Blockly.BUDDY_ANALOGREAD_PIN)
			.setCheck(Number);
		this.setInputsInline(true);
		this.setOutput(true, Number);
		this.setTooltip(Blockly.BUDDY_TOOLTIP_INOUT_ANALOG_READ);
	}
};

Blockly.Blocks['io_attachInterrupt'] = 
{
	init: function() 
	{
		this.setColour(20);
		this.appendDummyInput()
			.appendField(Blockly.BUDDY_ATTACHINTERRUPT_PIN + " PIN#")
			.appendField(new Blockly.FieldDropdown(profile.default.dropdownInterrupt), 'PIN');
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

Blockly.Blocks['io_detachInterrupt'] = 
{
	init: function() 
	{
		this.appendDummyInput()
			.appendField(Blockly.BUDDY_DETACHINTERRUPT_PIN + " PIN#")
			.appendField(new Blockly.FieldDropdown(profile.default.dropdownInterrupt), "PIN")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(Blockly.BUDDY_TOOLTIP_INOUT_DETACHINTERRUPT);
		this.setHelpUrl('');
		this.setColour(20);
	}
};

Blockly.Blocks['io_attachPinInterrupt'] = 
{
    init: function () 
	{
        this.setColour(20);
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.BUDDY_ATTACHPININTERRUPT_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.BUDDY_MODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.BUDDY_RISING, "RISING"], [Blockly.BUDDY_FALLING, "FALLING"], [Blockly.BUDDY_CHANGE, "CHANGE"]]), "mode");
        this.appendStatementInput('DO')
            .appendField(Blockly.BUDDY_DO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.BUDDY_TOOLTIP_INOUT_ATTACHINTERRUPT);
    }
};

Blockly.Blocks['io_detachPinInterrupt'] = 
{
    init: function () 
	{
        this.setColour(20);
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.BUDDY_DETACHPININTERRUPT_PIN)
            .setCheck(Number);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.BUDDY_TOOLTIP_INOUT_DETACHINTERRUPT);
    }
};

Blockly.Blocks['io_pulseIn'] = 
{
	init: function() 
	{
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

Blockly.Blocks['io_pulseIn2'] = 
{
	init: function() 
	{
		this.setColour(20);
		this.appendValueInput("PIN", Number)
			.appendField(Blockly.BUDDY_PULSEIN)
			.setCheck(Number);
		this.appendDummyInput("")
			.appendField(Blockly.BUDDY_PULSEIN_STAT)
			.appendField(new Blockly.FieldDropdown([[Blockly.BUDDY_HIGH, "HIGH"], [Blockly.BUDDY_LOW, "LOW"]]), "STAT");
		this.appendValueInput("TIMEOUT", "Number")
			.appendField(Blockly.BUDDY_PULSEIN_TIMEOUT)
			.setCheck("Number");
		this.setInputsInline(true);
		this.setOutput(true, Number);
	}
};

Blockly.Blocks['io_pinMode'] = 
{
	init: function() 
	{
		this.appendDummyInput()
			.appendField(Blockly.BUDDY_PINMODE + " PIN#")
			.appendField(new Blockly.FieldDropdown(profile.default.dropdownAll), "PIN")
			.appendField(Blockly.BUDDY_STAT)
			.appendField(new Blockly.FieldDropdown([[Blockly.BUDDY_PINMODEIN, "INPUT"], [Blockly.BUDDY_PINMODEOUT, "OUTPUT"], [Blockly.BUDDY_PINMODEPULLUP, "INPUT_PULLUP"]]), "STAT");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Write digital value to a specific Port');
		this.setHelpUrl('https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/');
		this.setColour(20);
	}
};

Blockly.Blocks['io_shiftout'] = 
{
	init: function() 
	{
		this.setColour(20);
		this.appendDummyInput("")
			.appendField("ShiftOut");
		this.appendValueInput("PIN1", Number)
			.appendField(Blockly.BUDDY_DATAPIN)
			.setCheck(Number);
		this.appendValueInput("PIN2", Number)
			.appendField(Blockly.BUDDY_CLOCKPIN)
			.setCheck(Number);
		this.appendDummyInput("")
			.appendField(Blockly.BUDDY_BITORDER)
			.appendField(new Blockly.FieldDropdown([[Blockly.BUDDY_MSBFIRST, "MSBFIRST"], [Blockly.BUDDY_LSBFIRST, "LSBFIRST"]]), "ORDER");
		this.appendValueInput("DATA", 'Number')
			.appendField(Blockly.BUDDY_DATA)
			.setCheck('Number');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};