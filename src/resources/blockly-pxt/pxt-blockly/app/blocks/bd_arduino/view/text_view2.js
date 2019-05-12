'use strict';

goog.provide('Blockly.Blocks.texts');

goog.require('Blockly.Blocks');


Blockly.Blocks.texts.HUE = "#ffab19";

Blockly.Blocks['text_char'] = {
  init: function() {
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput()
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput('',Blockly.FieldTextInput.char_validator), 'TEXT')
        .appendField(this.newQuote_(false));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TEXT_CHAR_TOOLTIP);
  },
  newQuote_: function(open) {
    if (open == true) {
     var file = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkBAMAAAB/KNeuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAP///////////////////////////////+tNPsIAAAAIdFJOUwAe1q4KRGaFPS0VAQAAAKlJREFUGNNVkD0LwkAMhlNsnUvBH+DmKnXoeODgWgXBsaOj+AGuVfTys8318l7OTA/hTe7JEWmVNwekA/fAHfNSsVoxew0/mfkbeSvo6wkLSbx0tJH2XdPS/pClsfxs7TA5WOQNl5M9X3bMF8RlS608z+JhFOZNMowybftw4GDvjHmTsc84PJJ4iPbgWcZVxuEUMHXKvS2dZHVgxJHpV4qr4Brei+Oe/usHT1JfDpNGeM0AAAAASUVORK5CYII=";
     
    } else {
      var file = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkBAMAAAB/KNeuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAP///////////////////////////////+tNPsIAAAAIdFJOUwAe1q4KRGaFPS0VAQAAAKpJREFUGNNV0bEKAjEMBuActOd6KIKrg+h4cII3Cg6u5yA6Ot4DONxcUfPYJmnaxn/6KEmaUoD/LK+XxAUibhuhR85bvBLjQHR99DqXIL7ItTo0xdyQ3RrvjWlQZQyT8cnYjcXgbl2XzBmNe5kv4WUfar6kUc9o56N6nh4Zy1NrHZ8iuSN+lB5LCR0HnXIuy/hd7qymUs3bf7WajsNQrn9CHr7Jn+IOaUH4ATxJW2wDnL5kAAAAAElFTkSuQmCC";
    }
    return new Blockly.FieldImage(file, 7, 12, '"');
  }
};
