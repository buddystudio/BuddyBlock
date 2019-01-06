//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

goog.provide('Blockly.Constants.buddy');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['buddy_serial_lcd_print'] = {
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField("Serial LCD")
        .appendField(new Blockly.FieldImage("./blocks/grove/Lcdnew1.jpg", 64, 64))
        .appendField("PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN");
    this.appendValueInput("TEXT1")
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("print line1");
    this.appendValueInput("TEXT2")
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("print line2")
    this.appendValueInput("DELAY_TIME")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Delay");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('print text on an 16 character by 2 line LCD.');
    this.setHelpUrl('http://wiki.seeedstudio.com/Grove-Serial_LCD_V1.0/');
    this.setColour('%{BKY_GROVE_HUE}');
  }
};

Blockly.Blocks['buddy_led'] = {  
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("./blocks/buddy/images/ICON_LED.png", 64, 64))
        .appendField("LED")
        .appendField("PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN")
        .appendField("stat")
        .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('green LED');
    this.setHelpUrl('http://wiki.seeedstudio.com/Grove-Red_LED/')
    this.setColour('%{BKY_GROVE_HUE}');
  }
};

Blockly.Blocks['buddy_led_breathing'] = {  
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField("LED Breathing")
        .appendField(new Blockly.FieldImage("./blocks/buddy/images/ICON_LED.png", 64, 64))
        .appendField("PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN")
	this.appendValueInput("NUM", "Number")
        .appendField("Interval")
        .setCheck("Number");
	this.appendValueInput("DELAY", "Delay")
        .appendField("Delay")
        .setCheck("Number");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('green LED');
    this.setHelpUrl('http://wiki.seeedstudio.com/Grove-Red_LED/')
    this.setColour('%{BKY_GROVE_HUE}');
  }
};

Blockly.Blocks['buddy_rgb_led'] = {  
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField("RGB LED")
		.appendField(new Blockly.FieldImage("./blocks/buddy/images/ICON_RGB_LED.png", 64, 64))
        .appendField("R-PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "R_PIN")
        .appendField("stat")
        .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('green LED');
    this.setHelpUrl('http://wiki.seeedstudio.com/Grove-Red_LED/')
    this.setColour('%{BKY_GROVE_HUE}');
  }
};

