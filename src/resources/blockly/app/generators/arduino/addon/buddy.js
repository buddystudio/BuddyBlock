

/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.buddy');

goog.require('Blockly.Arduino');

Blockly.Arduino['buddy_serial_lcd_print'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  var text = Blockly.Arduino.valueToCode(block, 'TEXT1',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var text2 = Blockly.Arduino.valueToCode(block, 'TEXT2',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var delay_time = Blockly.Arduino.valueToCode(block, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  /*if(text.length>16||text2.length>16){
      alert("string is too long");
  }*/
  Blockly.Arduino.definitions_['define_seriallcd'] = '#include <SerialLCD.h>\n';
  Blockly.Arduino.definitions_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  //generate PIN#+1 port
  var NextPIN = _get_next_pin(dropdown_pin);

  Blockly.Arduino.definitions_['var_lcd_'+dropdown_pin] = 'SerialLCD slcd_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';

  Blockly.Arduino.setups_['setup_lcd_'+dropdown_pin] = 'slcd_'+dropdown_pin+'.begin();\n';
  var code = 'slcd_'+dropdown_pin+'.backlight();\n';
  code    += 'slcd_'+dropdown_pin+'.setCursor(0,0);\n';
  code    += 'slcd_'+dropdown_pin+'.print('+text+');\n';//text.replace(new RegExp('\'',"gm"),'')
  code    += 'slcd_'+dropdown_pin+'.setCursor(0,1);\n';
  code    += 'slcd_'+dropdown_pin+'.print('+text2+');\n';
  code    += 'delay('+delay_time+');\n';
  return code;
};

Blockly.Arduino['buddy_led'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  var dropdown_stat = block.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

Blockly.Arduino['buddy_led_breathing'] = function(block) 
{
  var dropdown_pin = block.getFieldValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
  var value_delay = Blockly.Arduino.valueToCode(this, "DELAY", Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_BD'] = '#include <BD.h>';
  Blockly.Arduino.definitions_['define_BD_LED'] = '#include <BD_LED.h>\n';
  Blockly.Arduino.definitions_['define_led'+dropdown_pin] = 'BD_LED led_breath_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'led_breath_'+dropdown_pin+'.Init(D'+dropdown_pin+');';
  var code = 'led_breath_'+dropdown_pin+'.FadeIn('+value_num+');\n'
			code += 'delay('+value_delay+');\n'
			code += 'led_breath_'+dropdown_pin+'.FadeOut('+value_num+');\n'
			code += 'delay('+value_delay+');\n'
  return code;
};

Blockly.Arduino['buddy_rgb_led'] = function(block) {
  var dropdown_pin = block.getFieldValue('R_PIN');
  var dropdown_stat = block.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};




