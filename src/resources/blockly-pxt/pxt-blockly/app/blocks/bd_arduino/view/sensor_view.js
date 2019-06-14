'use strict';

goog.provide('Blockly.Blocks.sensor');
goog.require('Blockly.Blocks');
Blockly.Blocks.sensor.HUE = "#1b998b";

Blockly.Blocks['gps_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
	  this.appendDummyInput()
		  .appendField(Blockly.BUDDY_GPS_INIT)
    this.appendValueInput("RX", Number)
		  .appendField("RX#")
		  .setCheck(Number);
	  this.appendValueInput("TX", Number)
		  .appendField("TX#")
		  .setCheck(Number);
	  this.appendValueInput("CONTENT", 'Number')
		  .appendField(Blockly.BUDDY_SERIAL_BEGIN)
		  .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  }
};

Blockly.Blocks.gps_data_available = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
	this.appendDummyInput()
        .appendField(Blockly.BUDDY_GPS_DATA_AVAILABLE);
  this.setOutput(true, Boolean);
  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  }
};

Blockly.Blocks.gps_data_encode = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
	this.appendDummyInput()
        .appendField(Blockly.BUDDY_GPS_DATA_ENCODE);
  this.setOutput(true, Boolean);
  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  }
};

Blockly.Blocks.gps_xxx_isValid = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
	this.appendDummyInput()
		.appendField("GPS")
		.appendField(new Blockly.FieldDropdown([[Blockly.BUDDY_GPS_LOCATION, "location"],[Blockly.BUDDY_GPS_DATE, "date"], [Blockly.BUDDY_GPS_TIME, "time"]]), "WHAT")
        .appendField(Blockly.BUDDY_GPS_ISVALID);
  this.setOutput(true, Boolean);
  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  }
};

Blockly.Blocks.gps_getData_xxx = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
	this.appendDummyInput()
		.appendField(Blockly.BUDDY_GPS_GET)
		.appendField(new Blockly.FieldDropdown([[Blockly.BUDDY_GPS_LOCATION_LAT, "location.lat"],[Blockly.BUDDY_GPS_LOCATION_LNG, "location.lng"], [Blockly.BUDDY_GPS_DATE_YEAR, "date.year"], [Blockly.BUDDY_GPS_DATE_MONTH, "date.month"], [Blockly.BUDDY_GPS_DATE_DAY, "date.day"], [Blockly.BUDDY_GPS_TIME_HOUR, "time.hour"], [Blockly.BUDDY_GPS_TIME_MINUTE, "time.minute"], [Blockly.BUDDY_GPS_TIME_SECOND, "time.second"], [Blockly.BUDDY_GPS_TIME_CENTISECOND, "time.centisecond"]]), "WHAT");
  this.setOutput(true, Number);
  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  }
};

//³¬Éù²¨²â¾à
Blockly.Blocks.chaoshengbo = {
    init: function () {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.BUDDY_CHAOSHENGBO)
            .appendField('Trig#')
            .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN1")
            .appendField(' Echo#')
            .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN2");
        this.setOutput(true, Number);
        this.setTooltip(Blockly.BUDDY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    }
};

Blockly.Blocks.chaoshengbo2 = {
    init: function () {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.BUDDY_CHAOSHENGBO);
        this.appendValueInput("PIN1", Number)
            .appendField('Trig#')
            .setCheck(Number);
        this.appendValueInput("PIN2", Number)
            .appendField('Echo#')
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(Blockly.BUDDY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    }
};

//DHT11´«¸ÐÆ÷
Blockly.Blocks.dht11 = {
    init: function () {
        var WHAT = [[Blockly.BUDDY_DHT11_T, 'temperature'], [Blockly.BUDDY_DHT11_H, 'humidity']];
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(new Blockly.FieldDropdown([['DHT11', '11'], ['DHT21', '21'], ['DHT22', '22'], ['DHT33', '33'], ['DHT44', '44']]), 'TYPE')
            .appendField(Blockly.BUDDY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(WHAT), "WHAT");
        this.setOutput(true, Number);
        var thisBlock = this;
        this.setTooltip(function () {
            var op = thisBlock.getFieldValue('WHAT');
            var TOOLTIPS = {
                'temperature': Blockly.BUDDY_TOOLTIP_BLOCKGROUP_GET_TEM,
                'humidity': Blockly.BUDDY_TOOLTIP_BLOCKGROUP_GET_HUM
            };
            return TOOLTIPS[op];
        });
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    }
};
//lm35温度传感器
Blockly.Blocks.LM35 = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("").appendField(Blockly.BUDDY_LM35);
    this.appendValueInput("PIN", Number).appendField(Blockly.BUDDY_PIN).setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  }
};
//DS18B20ÎÂ¶È´«¸ÐÆ÷
Blockly.Blocks.ds18b20 = {
    init: function () {
        var UNIT = [[Blockly.BUDDY_DS18B20_C, '0'], [Blockly.BUDDY_DS18B20_F, '1']];
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.BUDDY_DS18B20)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.BUDDY_DS18B20_GET_TEMP)
            .appendField(new Blockly.FieldDropdown(UNIT), "UNIT");
        this.setOutput(true, Number);
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    }
};

//DS1302 RTC
Blockly.Blocks.DS1302_init = {
    init: function () {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.BUDDY_DS1302_INITPIN)
            .appendField(new Blockly.FieldTextInput('myRTC'), 'RTCName');
        this.appendValueInput("RST", Number)
            .appendField("RST#")
            .setCheck(Number);
        this.appendValueInput("DAT")
            .appendField("DAT#")
            .setCheck(Number);
        this.appendValueInput("CLK")
            .appendField("CLK#")
            .setCheck(Number);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    }
}

var RTCTypeList = [['DS1302','DS1302'],['DS1307','DS1307']];
//DS1307 RTC
Blockly.Blocks.DS1307_init = {
    init: function () {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("").appendField(Blockly.BUDDY_RTCINIT);
        //this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(RTCTypeList), 'RTCType');
        this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput('myRTC'), 'RTCName');
        this.appendValueInput("SDA")
            .appendField("SDA#")
            .setCheck(Number);
        this.appendValueInput("SCL")
            .appendField("SCL#")
            .setCheck(Number);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    },
    //mutation有问题，暂时弃用
    /*mutationToDom: function() {
	    var container = document.createElement('mutation');
	    var RTCType = (this.getFieldValue('RTCType') == 'DS1302');
	    console.log('======change in mutationToDom==========')
	    console.log(RTCType);
	    container.setAttribute('RTCType', RTCType);
	    return container;
  	},
  	domToMutation: function(xmlElement) {
	    var type = (xmlElement.getAttribute('RTCType') == 'true');
	    console.log('======change in domToMutation==========')
	    console.log(type);
	    this.updateShape_(type);
  	},
  	updateShape_: function(type) {
    // Add or remove reset pin.
    console.log('======change in updateShape_==========')
	console.log(type);
    if (type) {
    	console.log('why not me?')
    	this.appendValueInput("RST")
    		.appendField("RST#")
            .setCheck(Number);
    } else{
      /*if (this.childBlocks_.length > 0) {
      	 if (this.childBlocks_[length-1].type == 'Number') {
            this.childBlocks_[length-1].unplug();
            break;
          }
      }
      this.removeInput('RST');
    }
  }*/

};

//传感器-实时时钟块_时间变量
/*
var RTC_TIME_TYPE = [
  [Blockly.BUDDY_YEAR, "getYear"],
  [Blockly.BUDDY_MONTH, "getMonth"],
  [Blockly.BUDDY_DAY, "getDay"],
  [Blockly.BUDDY_HOUR, "getHour"],
  [Blockly.BUDDY_MINUTE, "getMinute"],
  [Blockly.BUDDY_SECOND, "getSecond"],
  [Blockly.BUDDY_WEEK, "getWeek"]
];
*/

var RTC_TIME_TYPE = [
  ["YEAR", "getYear"],
  ["MONTH", "getMonth"],
  ["DAY", "getDay"],
  ["HOUR", "getHour"],
  ["MINUTE", "getMinute"],
  ["SECOND", "getSecond"],
  ["WEEK", "getWeek"]
];


//传感器-实时时钟块_获取时间
Blockly.Blocks.RTC_get_time = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.BUDDY_RTCGETTIME);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput('myRTC'), 'RTCName');
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(RTC_TIME_TYPE), "TIME_TYPE");
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  }
};
//传感器-实时时钟块_设置时间
Blockly.Blocks.RTC_set_time = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.BUDDY_RTCSETTIME).appendField(new Blockly.FieldTextInput('myRTC'), 'RTCName');
    this.appendValueInput("hour").setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("  "+Blockly.BUDDY_HOUR);
    this.appendValueInput("minute").setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("  "+Blockly.BUDDY_MINUTE);
    this.appendValueInput("second").setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("  "+Blockly.BUDDY_SECOND);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setInputsInline(false);
    this.setInputsInline(true);
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   }
};
//传感器-实时时钟块_设置日期
Blockly.Blocks.RTC_set_date = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.BUDDY_RTCSETDATE).appendField(new Blockly.FieldTextInput('myRTC'), 'RTCName');
    this.appendValueInput("year").setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("  "+Blockly.BUDDY_YEAR);
    this.appendValueInput("month").setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("  "+Blockly.BUDDY_MONTH);
    this.appendValueInput("day").setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("  "+Blockly.BUDDY_DAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  }
};

/*
var ADXL345_GETAB = [
  [Blockly.BUDDY_ADXL345_X, "x"],
  [Blockly.BUDDY_ADXL345_Y, "y"],
  [Blockly.BUDDY_ADXL345_Z, "z"],
  [Blockly.BUDDY_ADXL345_XA, "xa"],
  [Blockly.BUDDY_ADXL345_YA, "ya"]
  //, [Blockly.BUDDY_ADXL345_ZA, "za"]
];
*/

var ADXL345_GETAB = [
  ["X", "x"],
  ["Y", "y"],
  ["Z", "z"],
  ["XA", "xa"],
  ["YA", "ya"]
  //, [Blockly.BUDDY_ADXL345_ZA, "za"]
];

//传感器-重力感应块-获取数据
Blockly.Blocks.ADXL345 = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("").appendField(Blockly.BUDDY_ADXL345);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(ADXL345_GETAB), "ADXL345_PIN");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   }
};
