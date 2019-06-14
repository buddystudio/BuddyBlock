'use strict';

goog.provide('Blockly.Blocks.texts');

goog.require('Blockly.Blocks');


Blockly.Blocks.texts.HUE = "#ffab19";

// Blockly.Blocks['text_char'] = {
//   init: function() {
//     this.setColour(Blockly.Blocks.texts.HUE);
//     this.appendDummyInput()
//         .appendField(this.newQuote_(true))
//         .appendField(new Blockly.FieldTextInput('',Blockly.FieldTextInput.char_validator), 'TEXT')
//         .appendField(this.newQuote_(false));
//     this.setOutput(true, 'Number');
//     this.setTooltip(Blockly.Msg.TEXT_CHAR_TOOLTIP);
//   },
//   newQuote_: function(open) {
//     if (open == true) {
//      var file = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkBAMAAAB/KNeuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAP///////////////////////////////+tNPsIAAAAIdFJOUwAe1q4KRGaFPS0VAQAAAKlJREFUGNNVkD0LwkAMhlNsnUvBH+DmKnXoeODgWgXBsaOj+AGuVfTys8318l7OTA/hTe7JEWmVNwekA/fAHfNSsVoxew0/mfkbeSvo6wkLSbx0tJH2XdPS/pClsfxs7TA5WOQNl5M9X3bMF8RlS608z+JhFOZNMowybftw4GDvjHmTsc84PJJ4iPbgWcZVxuEUMHXKvS2dZHVgxJHpV4qr4Brei+Oe/usHT1JfDpNGeM0AAAAASUVORK5CYII=";
     
//     } else {
//       var file = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkBAMAAAB/KNeuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAP///////////////////////////////+tNPsIAAAAIdFJOUwAe1q4KRGaFPS0VAQAAAKpJREFUGNNV0bEKAjEMBuActOd6KIKrg+h4cII3Cg6u5yA6Ot4DONxcUfPYJmnaxn/6KEmaUoD/LK+XxAUibhuhR85bvBLjQHR99DqXIL7ItTo0xdyQ3RrvjWlQZQyT8cnYjcXgbl2XzBmNe5kv4WUfar6kUc9o56N6nh4Zy1NrHZ8iuSN+lB5LCR0HnXIuy/hd7qymUs3bf7WajsNQrn9CHr7Jn+IOaUH4ATxJW2wDnL5kAAAAAElFTkSuQmCC";
//     }
//     return new Blockly.FieldImage(file, 7, 12, '"');
//   }
// };

Blockly.Blocks['text_to_number'] = {
  init: function() {
	var TO_INT_FLOAT =
        [[Blockly.BUDDY_TO_INT, 'toInt'],
        [Blockly.BUDDY_TO_FLOAT, 'toFloat']];
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendValueInput('VAR')
        .setCheck('String')
		.appendField(new Blockly.FieldDropdown(TO_INT_FLOAT), 'TOWHAT');
	this.setOutput(true, 'Number');
	var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('TOWHAT');
      var TOOLTIPS = {
        'toInt': Blockly.BUDDY_TOOLTIP_TEXT_TOINT,
        'toFloat': Blockly.BUDDY_TOOLTIP_TEXT_TOFLOAT
      };
      return TOOLTIPS[mode];
    });
    this.setInputsInline(true);
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    this.setOutput(true, 'String');
  }
};

Blockly.Blocks['ascii_to_char'] = {
  init: function() {
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendValueInput('VAR')
        .setCheck('Number')
		.appendField(Blockly.BUDDY_TOCHAR);
	this.setOutput(true, 'String');
  this.setTooltip(Blockly.BUDDY_TOOLTIP_TEXT_TOCHAR);
  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  }
};

Blockly.Blocks['char_to_ascii'] = {
  init: function () {
      this.setColour(Blockly.Blocks.texts.HUE);
      this.appendValueInput('VAR')
        .setCheck('String')
		    .appendField(Blockly.BUDDY_TOASCII, 'TEXT');
	    this.setOutput(true,  'String');
      this.setTooltip(Blockly.BUDDY_TOOLTIP_TEXT_TOCHAR);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  }
};

Blockly.Blocks['number_to_text'] = {
  init: function () {
    var TO_INT_FLOAT =
      [[Blockly.Msg.MATH_BIN, 'BIN'],
      [Blockly.Msg.MATH_OCT, 'OCT'],
      [Blockly.Msg.MATH_DEC, 'DEC'],
      [Blockly.Msg.MATH_HEX, 'HEX']];
      this.setColour(Blockly.Blocks.texts.HUE);
      this.appendValueInput('VAR')
          .setCheck('Number')
          .appendField(Blockly.BUDDY_TOSTRING)
          .appendField(new Blockly.FieldDropdown(TO_INT_FLOAT), 'TOWHAT');
      this.setOutput(true, 'String');
      this.setTooltip(Blockly.BUDDY_TOOLTIP_TEXT_TOTEXT);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  }
};

Blockly.Blocks['text_equals_starts_ends']={
  init: function() {
    var TEXT_DOWHAT =
          [[Blockly.BUDDY_EQUALS, 'equals'],
          [Blockly.BUDDY_STARTSWITH, 'startsWith'],
      [Blockly.BUDDY_ENDSWITH, 'endsWith']];
      this.setColour(Blockly.Blocks.texts.HUE);
    this.appendValueInput("STR1")
          .setCheck(['String','Number']);
    this.appendValueInput("STR2")
          .appendField(new Blockly.FieldDropdown(TEXT_DOWHAT), 'DOWHAT')
          .setCheck(['String','Number']);
    this.setOutput(true, [Boolean,'Number']);
    this.setInputsInline(true);
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    }
  }

  Blockly.Blocks['text_compareTo']={
    init: function() {
        this.setColour(Blockly.Blocks.texts.HUE);
      this.appendValueInput("STR1")
           .setCheck(['String','Number']);
      this.appendValueInput("STR2")
            .appendField(Blockly.BUDDY_COMPARETO)
           .setCheck(['String','Number']);
      this.setOutput(true, 'Number');
      this.setInputsInline(true);
      this.setTooltip(Blockly.BUDDY_COMPARETO_HELP);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      }
    }
