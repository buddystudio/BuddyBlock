'use strict';

goog.provide('Blockly.Msg.en_BD');

goog.require('Blockly.Msg');

Blockly.BUDDY_CAPREAD_PIN = "Capacitive Read"

// color definition
Blockly.Msg.ARDUINO_BASE_HUE = 180;
Blockly.Msg.GROVE_HUE = 120;
Blockly.Msg.SERVO_HUE = 215;

// toolbox categories name
Blockly.Msg.CAT_ARDUINO_BASE = "Input / Output";
Blockly.Msg.CAT_SERVO = "Servo";
Blockly.Msg.CAT_GROVE = "Grove";
Blockly.Msg.CAT_GROVE_ANALOG = "Grove Analog";
Blockly.Msg.CAT_GROVE_LCD = "Grove LCD";
Blockly.Msg.CAT_GROVE_MOTOR = "Grove Motor";

Blockly.Msg.CAT_BUDDY = "Buddy";

Blockly.Msg.CAT_LOOPS = "LOOPS";
Blockly.Msg.CAT_LIST = "LISTS";
Blockly.Msg.CAT_TEXT = "TEXT";
Blockly.Msg.CAT_MATH = "MATH";
Blockly.Msg.CAT_INOUT = "IN / OUT";
Blockly.Msg.CAT_CONTROL = "CONTROL";
Blockly.Msg.CAT_LOGIC = "LOGIC";
Blockly.Msg.CAT_SERIAL = "SERIAL";
Blockly.Msg.CAT_STORAGE = "STORAGE";
Blockly.Msg.CAT_COMMUNICATE = "COMMUNIC";
Blockly.Msg.CAT_SENSOR = "SENSOR";
Blockly.Msg.CAT_ACTUATOR = "ACTUATOR";
Blockly.Msg.CAT_DISPLAY = "DISPLAY";
Blockly.Msg.CAT_ETHERNET = "ETHERNET";
Blockly.Msg.CAT_VAR = "VARIABLES";
Blockly.Msg.CAT_FUNCTIONS = "FUNCTIONS";
Blockly.Msg.CAT_COLOUR = "COLOUR";

Blockly.Msg.CODE_BLOCKS = "Blocks";
Blockly.Msg.CODE_ARDUINO = "Code";
Blockly.Msg.CODE_FILE = "File";

Blockly.Msg.TAB_NEW = "New";
Blockly.Msg.TAB_OPEN = "Open";
Blockly.Msg.TAB_SAVE = "Save";
Blockly.Msg.TAB_SAVEAS = "SaveAs";
Blockly.Msg.TAB_DISCARD = "Discard";
Blockly.Msg.TAB_EXAMPLE = "Example";
Blockly.Msg.TAB_COMM = "COMM";
Blockly.Msg.TAB_UPLOAD = "Upload";

Blockly.Msg.DICTS_CREATE_EMPTY_TITLE = "initialization to an empty dictionary";
Blockly.Msg.DICTS_CREATE_EMPTY_TOOLTIP = "return an empty dictionary with a length of 0 and does not contain any data";
Blockly.Msg.DICTS_CREATE_WITH_CONTAINER_TITLE_ADD = "dictionary";
Blockly.Msg.DICTS_CREATE_WITH_CONTAINER_TOOLTIP = "Add, delete, or rearrange parts to reconfigure the dictionary block.";
Blockly.Msg.DICTS_CREATE_WITH_INPUT_WITH = "initialize the dictionary as";
Blockly.Msg.DICTS_CREATE_WITH_ITEM_TITLE = "item"
Blockly.Msg.DICTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the dictionary.";
Blockly.Msg.DICTS_CREATE_WITH_TOOLTIP = "Create a dictionary with any number of items.";
Blockly.Msg.DICTS_CREATE_WITH_ITEM_KEY= "key"
Blockly.Msg.DICT_KEYS = "get all key values";
Blockly.Msg.DICTS_KEYS_TOOLTIP = "Return a list, including all the keys of a dictionary.";
Blockly.Msg.DICTS_GET_FROM_DICTS = "from the dictionary";
Blockly.Msg.DICTS_GET_IN = "get key values";
Blockly.Msg.DICTS_GET_VALUE = "corresponding value";
Blockly.Msg.DICTS_GET_TOOLTIP = "access the corresponding value of a key in the dictionary";
Blockly.Msg.DICTS_ADD_in_DICT = "in dictionary";
Blockly.Msg.DICTS_ADD = "add or modify a clause, key value";
Blockly.Msg.DICTS_ADD_VALUE = "corresponding value";
Blockly.Msg.DICTS_ADD_OR_CHANGE_TOOLTIP = "add or delete entries in a clause";
Blockly.Msg.DICTS_DELETE_IN = "delete clause, key value";
Blockly.Msg.DICTS_DELETE_VALUE = "and corresponding value";
Blockly.Msg.DICTS_DELETE_TOOLTIP = "Delete a clause in the dictionary";
Blockly.Msg.DICT_CLEAR = "clear dictionary";
Blockly.Msg.DICT_ITEMS = "transform dictionary to a list"; 
Blockly.Msg.DICTS_ITEMS_TOOLTIP = "Return a list, including all the keys and corresponding values that a dictionary can be traversed";
Blockly.Msg.DICT_VALUES = "get the values corresponding to all keys";
Blockly.Msg.DICTS_VALUES_TOOLTIP = "Return a list, including the corresponding values of all the keys in a dictionary";
Blockly.Msg.DICTS_LENGTH_TOOLTIP = "Return the length of the dictionary, the number of the keys";
Blockly.Msg.DICT_DELDICT = "delete dictionary";
Blockly.Msg.MATH_BIN='binary';
Blockly.Msg.MATH_OCT='octal';
Blockly.Msg.MATH_DEC='decimal';
Blockly.Msg.MATH_HEX='hex';

//text in blocks
Blockly.Msg.TITLE2 = " > web-based visual programming editor for arduino";

// 第三方拓展
Blockly.BUDDY_PINMODE = 'pinMode';
Blockly.BUDDY_PINMODEIN = 'INPUT';
Blockly.BUDDY_PINMODEOUT = 'OUTPUT';
Blockly.BUDDY_PINMODEPULLUP = 'INPUT_PULLUP';
Blockly.BUDDY_DECLARE='Declare';
Blockly.BUDDY_AS='as';
Blockly.BUDDY_VALUE='value';
Blockly.BUDDY_VALUE2='value';
Blockly.BUDDY_MAP='Map ';
Blockly.BUDDY_MAP_FROM="from [";
Blockly.BUDDY_MAP_TO="] to [";
Blockly.BUDDY_MILLIS='millis';
Blockly.BUDDY_DELAY='Delay';
Blockly.BUDDY_ATTACHINTERRUPT_PIN='attachInterrupt pin#';
Blockly.BUDDY_DETACHINTERRUPT_PIN = 'detachInterrupt pin#';
Blockly.BUDDY_ATTACHPININTERRUPT_PIN = 'attachPinInterrupt pin#';
Blockly.BUDDY_DETACHPININTERRUPT_PIN = 'detachPinInterrupt pin#';
Blockly.BUDDY_MODE='mode';
Blockly.BUDDY_DO='do';
Blockly.BUDDY_BUILDIN_LED='Build-in LED ';
Blockly.BUDDY_STAT='Stat';
Blockly.BUDDY_DIGITALWRITE_PIN='DigitalWrite PIN#';
Blockly.BUDDY_DIGITALREAD_PIN='DigitalRead PIN#';
Blockly.BUDDY_ANALOGWRITE_PIN='AnalogWrite PIN#';
Blockly.BUDDY_ANALOGREAD_PIN='AnalogRead PIN#';
Blockly.BUDDY_PWMWRITE_PIN='Pulse Write PIN#';
Blockly.BUDDY_SERIAL_WRITE = 'write';
Blockly.BUDDY_SERIAL_PRINT = 'print';
Blockly.BUDDY_SERIAL_PRINTLN='println';
Blockly.BUDDY_SERIAL_PRINT_HEX='println(hex)';
Blockly.BUDDY_SERIAL_FLUSH='flush';
Blockly.BUDDY_STEP='step';
Blockly.BUDDY_TONE_PIN='Tone PIN#';
Blockly.BUDDY_FREQUENCY='frequency';
Blockly.BUDDY_DURATION='duration';
Blockly.BUDDY_NOTONE_PIN='noTone PIN#';
Blockly.BUDDY_BLOCKGROUP_CATEGORY='BlockGroup';
Blockly.BUDDY_IR_RECEIVE='IRreceive PIN#';
Blockly.BUDDY_IR_RECEIVE_ENABLE='enableIRIn PIN#';
Blockly.BUDDY_IR_SEND_NEC1='IRsend'
Blockly.BUDDY_IR_SEND_NEC2=' PIN#'
Blockly.BUDDY_IR_RECEIVE_RAW='IRreceive(Print RAW Data) PIN#';
Blockly.BUDDY_IR_SEND_RAW='IRsend(RAW) PIN#'
Blockly.LANG_MATH_TO_INT = 'toInt';
Blockly.LANG_MATH_TO_ROUND = 'Round';
Blockly.LANG_MATH_TO_CEIL = 'Ceil';
Blockly.LANG_MATH_TO_FLOOR = 'Floor';
Blockly.BUDDY_SERVO='Servo';
Blockly.BUDDY_PIN='PIN#';
Blockly.BUDDY_DEGREE_0_180='Degree (0~180)';
Blockly.BUDDY_READ_DEGREES='Read Degrees';
Blockly.BUDDY_HIGH='HIGH';
Blockly.BUDDY_LOW='LOW';
Blockly.BUDDY_ON='ON';
Blockly.BUDDY_OFF='OFF';
Blockly.BUDDY_RISING='RISING';
Blockly.BUDDY_FALLING='FALLING';
Blockly.BUDDY_CHANGE='CHANGE';
Blockly.BUDDY_I2C_MASTER_WRITE="I2C_Write device";
Blockly.BUDDY_I2C_MASTER_READ="I2C_Read device";
Blockly.BUDDY_I2C_MASTER_READ2="I2C_Read";
Blockly.BUDDY_I2C_VALUE="value"
Blockly.BUDDY_I2C_BYTES="bytes";
Blockly.BUDDY_I2C_AVAILABLE='I2C isAvailable?';
Blockly.BUDDY_I2C_SLAVE_ONRECEIVE='I2C Slave onReceive PIN#';
Blockly.LANG_CONTROLS_FOR_INPUT_WITH = 'count with';
Blockly.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
Blockly.LANG_CONTROLS_FOR_INPUT_FROM = 'from';
Blockly.LANG_CONTROLS_FOR_INPUT_TO = 'to';
Blockly.LANG_CONTROLS_FOR_INPUT_DO = 'do';
Blockly.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT = 'repeat';
Blockly.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'do';
Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'while';
Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'until';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP = 'of loop';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning:\n' +
    'This block may only\n' +
    'be used within a loop.';
Blockly.LANG_MATH_LONG = 'long';
Blockly.LANG_MATH_INT = 'int';
Blockly.LANG_MATH_FLOAT = 'float';
Blockly.LANG_MATH_BOOLEAN = 'boolean';
Blockly.LANG_MATH_BYTE = 'byte';
Blockly.LANG_MATH_CHAR = 'char';
Blockly.LANG_MATH_STRING = 'string';
Blockly.LANG_LISTS_GET_INDEX1 = 'get item at';
Blockly.LANG_LISTS_GET_INDEX2 = '';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP = 'Returns the value at the specified position in a list.';
Blockly.LANG_LISTS_SET_INDEX1 = 'set item at';
Blockly.LANG_LISTS_SET_INDEX2 = 'to';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP = 'Sets the value at the specified position in a list.';
Blockly.LANG_MATH_CONSTRAIN_INPUT_CONSTRAIN = 'Constrain';
Blockly.LANG_MATH_CONSTRAIN_INPUT_LOW = 'between (low)';
Blockly.LANG_MATH_CONSTRAIN_INPUT_HIGH = 'and (high)';
Blockly.LANG_MATH_RANDOM_SEED = 'random seed';
Blockly.LANG_MATH_RANDOM_INT_INPUT_FROM = 'random integer from';
Blockly.LANG_MATH_RANDOM_INT_INPUT_TO = 'to';
Blockly.BUDDY_DF_LED='LED';
Blockly.BUDDY_DF_BUZZER='Buzzer';
Blockly.BUDDY_DF_BTN='Button';
Blockly.BUDDY_DF_VIBRATION='Vibration';
Blockly.BUDDY_DF_TILT='Tilt';
Blockly.BUDDY_DF_TOUCH='Touch';
Blockly.BUDDY_DF_MAGNETIC='Magnetic';
Blockly.BUDDY_DF_PYROELECTRIC_INFRARED='Pyroelectric infrared';
Blockly.BUDDY_MB_PYROELECTRIC_INFRARED='PIR Motion';
Blockly.BUDDY_DF_JOYSTICK_D='Joystick button';
Blockly.BUDDY_DF_JOYSTICK_A='Joystick';
Blockly.BUDDY_JOYSTICK='Joystick';
Blockly.BUDDY_DF_POTENTIOMETER='Potentiometer';
Blockly.BUDDY_POTENTIOMETER='Potentiometer';
Blockly.BUDDY_DF_ROTATION='Rotation';
Blockly.BUDDY_DF_VOLTAGE='Voltage';
Blockly.BUDDY_DF_PIEZO_DISK_VIRBRATION='Piezo disk virbration';
Blockly.BUDDY_DF_SOUND='Sound';
Blockly.BUDDY_SOUND='Sound';
Blockly.BUDDY_DF_RELAY='Relay';
Blockly.BUDDY_DF_LIGHT='Light';
Blockly.BUDDY_DF_GRAYSCALE='Grayscale';
Blockly.BUDDY_DF_FLAME='Flame';
Blockly.BUDDY_DF_TEMPERATURE='Temperature';
Blockly.BUDDY_TEMPERATURE='Temperature(℃)';
Blockly.BUDDY_DF_ACCELEROMETER='Accelerometer';
Blockly.BUDDY_DF_MOISTURE='Moisture';
Blockly.BUDDY_DF_WATER='Water';
Blockly.BUDDY_DF_CO='Carbon monoxide';
Blockly.BUDDY_DF_SHARP_GP2Y0A21='Sharp GP2Y0A21';
Blockly.BUDDY_MAKELISTFROM='make list from text';
Blockly.BUDDY_SPLITBYDOU='';
Blockly.BUDDY_SETUP='setup';
Blockly.BUDDY_WARNING_INTERRUPT='This pin cannot be interrupted!';
Blockly.BUDDY_CHAOSHENGBO='Ultrasonic ranging(cm) ';
Blockly.BUDDY_MB_CHAOSHENGBO='Ultrasonic ranging';
Blockly.BUDDY_IR_RECEIVE_YES='Received';
Blockly.BUDDY_IR_RECEIVE_NO='NotReceived';
Blockly.LANG_VARIABLES_SET_TITLE='';
Blockly.BUDDY_TEXT_JOIN='join';
Blockly.BUDDY_SERIAL_AVAILABLE = 'isAvailable?';
Blockly.BUDDY_SERIAL_EVENT = 'serialEvent';
Blockly.BUDDY_SERIAL_READSTR='readString';
Blockly.BUDDY_SERIAL_READSTR_UNTIL='readStringUntil';
Blockly.BUDDY_SERIAL_READ='';
Blockly.BUDDY_IR_RECIEVE_TOOLTIP='Do something when receiving infrared signals.';
Blockly.BUDDY_IR_SEND_NEC_TOOLTIP='Sends Infrared signals of the specified type';
Blockly.BUDDY_IR_RECIEVE_RAW_TOOLTIP='Print the Infrared signal in RAW type when receiving it.';
Blockly.BUDDY_IR_SEND_RAW_TOOLTIP='Sends RAW Infrared signals (set pin number, list, length of list and IR frequency)';
Blockly.BUDDY_LIST_NAME='list';
Blockly.BUDDY_LIST_LENGTH='listLength';
Blockly.BUDDY_TO_INT='toInt';
Blockly.BUDDY_TO_FLOAT='toFloat';
Blockly.BUDDY_DATA="data";
Blockly.BUDDY_BITS="bits";
Blockly.BUDDY_MB_LIGHT_GRAYSCALE='Light and Grayscale Sensor';
Blockly.BUDDY_MB_LIGHT_GRAYSCALE_LED=' LED set';
Blockly.BUDDY_MB_LIGHT_MOTOR='Set Motor';
Blockly.BUDDY_MB_LIGHT_MOTOR_SPEED=' Speed(-255~255)';
Blockly.BUDDY_DELAY_MS='ms';
Blockly.BUDDY_DELAY_US = 'μs';
Blockly.BUDDY_PIN = 'PIN#';
Blockly.BUDDY_GETTEMPERATUE = 'getTemperature';
Blockly.BUDDY_GETHUMIDITY = 'getHumidity';
Blockly.BUDDY_DHT11='DHT11 PIN#';
Blockly.BUDDY_DHT11_T='getTemperature';
Blockly.BUDDY_DHT11_H='getHumidity';
Blockly.BUDDY_LCD_RGB_BACKLIGHT='LCD RGB Backlight';
Blockly.BUDDY_DF_LCD='LCD';
Blockly.BUDDY_LCD_PRINT1='print line1';
Blockly.BUDDY_LCD_PRINT2='print line2';
Blockly.BUDDY_LCD_PRINT3='print line3';
Blockly.BUDDY_LCD_PRINT4='print line4';
Blockly.BUDDY_LCD_ROW='row';
Blockly.BUDDY_LCD_COLUMN='column';
Blockly.BUDDY_LCD_PRINT='print';
Blockly.BUDDY_LCD_SETCOLOR='setColor';
Blockly.BUDDY_LCD_STAT_ON='On';
Blockly.BUDDY_LCD_STAT_OFF='Off';
Blockly.BUDDY_LCD_STAT_CURSOR='Cursor';
Blockly.BUDDY_LCD_STAT_NOCURSOR='noCursor';
Blockly.BUDDY_LCD_STAT_BLINK='Blink';
Blockly.BUDDY_LCD_STAT_NOBLINK='noBlink';
Blockly.BUDDY_LCD_STAT_CLEAR='Clear';
Blockly.BUDDY_LCD_NOBACKLIGHT = 'NoBackLight';
Blockly.BUDDY_LCD_BACKLIGHT = 'BackLight';
Blockly.BUDDY_7S_DISPLAY='7 Segment Display';
Blockly.BUDDY_NUMBER='number';
Blockly.BUDDY_BLUETOOTH='Bluetooth';
Blockly.BUDDY_BLUETOOTH_READ_STR='readString';
Blockly.BUDDY_AVAILABLE='available?';
Blockly.BUDDY_DATAPIN='dataPin#';
Blockly.BUDDY_CLOCKPIN='clockPin#';
Blockly.BUDDY_BITORDER='bitOrder';
Blockly.BUDDY_MSBFIRST='MSBFIRST';
Blockly.BUDDY_LSBFIRST='LSBFIRST';
Blockly.BUDDY_TOSTRING = 'toString';
Blockly.BUDDY_TOCHAR = 'toChar';
Blockly.BUDDY_TOASCII = 'toAscii';
Blockly.BUDDY_ROMEO_MOTOR='Romeo motor';
Blockly.BUDDY_ROMEO_MOTOR_SPEED='speed';
Blockly.BUDDY_STOP='stop';
Blockly.BUDDY_PULSEIN='pulseIn(μs) PIN#';
Blockly.BUDDY_PULSEIN_STAT='state';
Blockly.BUDDY_PULSEIN_TIMEOUT='timeout(μs)';
Blockly.BUDDY_SERIAL_READ_INT='parseInt';
Blockly.BUDDY_SERIAL_READ_FLOAT='parseFloat';
Blockly.BUDDY_MAX='max';
Blockly.BUDDY_MIN='min';
Blockly.BUDDY_WRITE_SD_FILE='Write SD File';
Blockly.BUDDY_SD_DATA='Data';
Blockly.BUDDY_SD_NEWLINE='NewLine';
Blockly.BUDDY_EEPROM_WRITE_LONG='Write(long) EEPROM address';
Blockly.BUDDY_EEPROM_READ_LONG='Read(long) EEPROM address';
Blockly.BUDDY_EEPROM_WRITE_BYTE='Write(byte) EEPROM address';
Blockly.BUDDY_EEPROM_READ_BYTE='Read(byte) EEPROM address';
Blockly.BUDDY_SENSE_MOTOR='Set Motor Speed(-255~255)';
Blockly.BUDDY_SENSE_MOTOR_STOP='Stop Motor';
Blockly.BUDDY_SENSE_SERVO='Set Servo Angle';
Blockly.BUDDY_SENSE_RGBLED='Set RGB LED\'s Color ';
Blockly.BUDDY_TRAFFIC_LED='Set Traffic LED';
Blockly.BUDDY_EAST='EAST';
Blockly.BUDDY_SOUTH='SOUTH';
Blockly.BUDDY_WEST='WEST';
Blockly.BUDDY_NORTH='NORTH';
Blockly.BUDDY_SENSE_BUZZER='Set Buzzer';
Blockly.BUDDY_SENSE_ULTRASONIC='Ultrasonic Value';
Blockly.BUDDY_SENSE_PYROELECTRIC_INFRARED='PIR Motion?';
Blockly.BUDDY_BUTTON='Button';
Blockly.BUDDY_UP='UP';
Blockly.BUDDY_DOWN='DOWN';
Blockly.BUDDY_LEFT='LEFT';
Blockly.BUDDY_RIGHT='RIGHT';
Blockly.BUDDY_MID='MID';
Blockly.BUDDY_IS_PRESSED='is pressed?';
Blockly.BUDDY_SENSE_SLIDING='Sliding Potentiometer Value';
Blockly.BUDDY_SENSE_TEMPERATURE='Temperature Value';
Blockly.BUDDY_SENSE_HUMIDITY='Humidity Value';
Blockly.BUDDY_SENSE_SOUND='Sound Value';
Blockly.BUDDY_SENSE_LIGHT='Light Value';
Blockly.BUDDY_SENSE_WEIGHT='Weight Value';
Blockly.BUDDY_SENSE_IR='IR Received:';
Blockly.BUDDY_SENSE_DIGITAL_DISPLAY='Set LED Digital Display(0~99)';
Blockly.BUDDY_SENSE_DIGITAL_DISPLAY_CLOSE='Close LED Digital Display';
Blockly.BUDDY_SENSE_LED_MATRIX='Set LED Matrix(0~9)';
Blockly.BUDDY_SENSE_LED_MATRIX_CLOSE='Close LED Matrix';
Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP='Write digital value to a specific Port';
Blockly.BUDDY_FORWARD='run forward';
Blockly.BUDDY_BACKWARD='run backward';
Blockly.BUDDY_TURNLEFT='turn left';
Blockly.BUDDY_TURNRIGHT='turn right';
Blockly.BUDDY_MBOT_SPEED='at speed(-255~255)';
Blockly.BUDDY_RUNTIME='System running time';
Blockly.BUDDY_LED_ON_BOARD='led on board';
Blockly.BUDDY_ALL='all';
Blockly.BUDDY_SET_LED='Set LED';
Blockly.BUDDY_MBOT_TONE='Play tone';
Blockly.BUDDY_MBOT_NOTONE='Stop tone';
Blockly.BUDDY_SHOW_FACE='Show face';
Blockly.BUDDY_SHOW_FACE_TEXT='characters:';
Blockly.BUDDY_SHOW_FACE_TIME='time';
Blockly.BUDDY_MBOT_SET_DISPLAY='Set 7-segments display';
Blockly.BUDDY_MBOT_SET_LIGHT='Set light sensor';
Blockly.BUDDY_MBOT_SET_LIGHT_LED='led as';
Blockly.BUDDY_MBOT_SET_CAMERA='Set camera shutter';
Blockly.BUDDY_MBOT_SET_CAMERA_STAT='as';
Blockly.BUDDY_MBOT_SET_CAMERA_PRESS='Press';
Blockly.BUDDY_MBOT_SET_CAMERA_RELEASE='Release';
Blockly.BUDDY_MBOT_SET_CAMERA_FOCUS_ON='Focus On';
Blockly.BUDDY_MBOT_SET_CAMERA_FOCUS_OFF='Focus Off';
Blockly.BUDDY_MBOT_LIGHT_SENSOR='Light sensor';
Blockly.BUDDY_LIGHT_SENSOR_ON_BOARD='light sensor on board';
Blockly.BUDDY_MBOT_BUTTON='Button';
Blockly.BUDDY_MBOT_BUTTON_PRESSED='pressed';
Blockly.BUDDY_MBOT_BUTTON_RELEASED='released';
Blockly.BUDDY_MBOT_LINE_FOLLOWER='Line follower';
Blockly.BUDDY_MBOT_JOYSTICK='Joystick';
Blockly.BUDDY_MBOT_JOYSTICK_X='X-Axis';
Blockly.BUDDY_MBOT_JOYSTICK_Y='Y-Axis';
Blockly.BUDDY_MBOT_POTENTIOMETER='Potentiometer';
Blockly.BUDDY_MBOT_SOUND_SENSOR='Sound sensor';
Blockly.BUDDY_MBOT_LIMIT_SWITCH='Limit switch';
Blockly.BUDDY_MBOT_TEMPERATURE='Temperature';
Blockly.BUDDY_MBOT_PIR_MOTION_SENSOR='Pir motion sensor';
Blockly.BUDDY_MBOT_IR_REMOTE='Ir remote';
Blockly.BUDDY_MBOT_IR_REMOTE_PRESSED='pressed';
Blockly.BUDDY_SETTING='setting';
Blockly.BUDDY_SEND_MBOT_MESSAGE='Send mBot\'s message';
Blockly.BUDDY_MBOT_MESSAGE_RECEIVED='mBot\'s message received';
Blockly.BUDDY_LABPLUS_ROBOT_MOVEMENT='Robot movement';
Blockly.BUDDY_LABPLUS_ROBOT_MOVEMENT_GO_FORWARD='go forward;'
Blockly.BUDDY_LABPLUS_ROBOT_MOVEMENT_STOP='stop';
Blockly.BUDDY_LABPLUS_ROBOT_MOVEMENT_GO_BACK='go back';
Blockly.BUDDY_LABPLUS_ROBOT='Robot';
Blockly.BUDDY_LABPLUS_ROBOT_TURN_LEFT='turn left';
Blockly.BUDDY_LABPLUS_ROBOT_TURN_RIGHT='turn right';
Blockly.BUDDY_LABPLUS_ROBOT_DISPLAY='Set led matrix to';
Blockly.BUDDY_LABPLUS_ROBOT_DISPLAY_SMILE='smile';
Blockly.BUDDY_LABPLUS_ROBOT_DISPLAY_NOSMILE='sad';
Blockly.BUDDY_LABPLUS_ROBOT_DISPLAY_CLOSE_EYE='close eyes';
Blockly.BUDDY_LABPLUS_ROBOT_DISPLAY_LEFT='left arrow';
Blockly.BUDDY_LABPLUS_ROBOT_DISPLAY_RIGHT='right arrow';
Blockly.BUDDY_LABPLUS_ROBOT_DISPLAY_TIAOWEN='stripe';
Blockly.BUDDY_LABPLUS_ROBOT_DISPLAY_ZEBRA='zebra';
Blockly.BUDDY_LABPLUS_ROBOT_DISPLAY_NOTHING='nothing';
Blockly.BUDDY_LABPLUS_ROBOT_LED_TOP='Set led on top to';
Blockly.BUDDY_LABPLUS_ROBOT_LED_SIDE='Set side leds\' color to';
Blockly.BUDDY_LCD_ADDRESS="address";

Blockly.BUDDY_TOOLTIP_INOUT_HIGHLOW='Returns high or low voltage.';
Blockly.BUDDY_TOOLTIP_INOUT_DIGITAL_READ='Returns digital value of a specific Port';
Blockly.BUDDY_TOOLTIP_INOUT_ANALOG_WRITE='Writes analog value between 0 and 255 to a specific Port';
Blockly.BUDDY_TOOLTIP_INOUT_ANALOG_READ='Returns value between 0 and 1023 of a specific Port';
Blockly.BUDDY_TOOLTIP_INOUT_ATTACHINTERRUPT='Attachs interrupt to a specific Port';
Blockly.BUDDY_TOOLTIP_INOUT_DETACHINTERRUPT='Detachs interrupt to a specific Port';
Blockly.BUDDY_TOOLTIP_CONTROL_SETUP='Initialization(run only once)';
Blockly.BUDDY_TOOLTIP_CONTROL_DELAY='Delays specific time';
Blockly.BUDDY_TOOLTIP_CONTROL_MILLIS='Returns the system running time';
Blockly.BUDDY_TOOLTIP_VARIABLES_DECLARE='Declare and initialize a variable';
Blockly.BUDDY_TOOLTIP_MATH_MAX='Returns the larger number';
Blockly.BUDDY_TOOLTIP_MATH_MIN='Returns the smaller number';
Blockly.BUDDY_TOOLTIP_MATH_MAP='Maps a number from the first interval to the second interval.';
Blockly.BUDDY_TOOLTIP_TEXT_JOIN='Creates a piece of text by joining together two piece of text.';
Blockly.BUDDY_TOOLTIP_TEXT_TOTEXT = 'Converts a number into a string.';
Blockly.BUDDY_TOOLTIP_TEXT_TOCHAR = 'Returns the char corresponding to an ASCII code.';
Blockly.BUDDY_TOOLTIP_TEXT_TOASCII = 'Returns the ASCII code corresponding to a char.';
Blockly.BUDDY_TOOLTIP_TEXT_TOINT='Converts a string into an integer.';
Blockly.BUDDY_TOOLTIP_TEXT_TOFLOAT='Converts a string into an float.';
Blockly.BUDDY_TOOLTIP_LISTS_CREATE_WITH_TEXT = "Creates a list from a text.";
Blockly.BUDDY_TOOLTIP_LOGIT_TRUEORFALSE='If the first number is true, the second number is returned, otherwise the third number.';
Blockly.BUDDY_TOOLTIP_BLOCKGROUP_SERIAL_AVAILABLE='If the serial port is available, it returns true, otherwise returns false.';
Blockly.BUDDY_TOOLTIP_BLOCKGROUP_SERIAL_READ_STR='Returns a string in serial port.';
Blockly.BUDDY_TOOLTIP_BLOCKGROUP_SERIAL_READ_INT='Returns a integer in serial port.';
Blockly.BUDDY_TOOLTIP_BLOCKGROUP_SERIAL_READ_FLOAT='Returns a float in serial port.';
Blockly.BUDDY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO='Returns the distance of ultrasonic sensor measured.';
Blockly.BUDDY_TOOLTIP_BLOCKGROUP_GET_TEM='Returns the temperature of dht11 sensor measured.';
Blockly.BUDDY_TOOLTIP_BLOCKGROUP_GET_HUM = 'Returns the humidity of dht11 sensor measured.';
Blockly.BUDDY_TOOLTIP_BLOCKGROUP_SERVO_MOVE = 'Moves between 0~180 degree.';
Blockly.BUDDY_TOOLTIP_BLOCKGROUP_SERVO_READ = 'Returns that degree with the last servo move.';
Blockly.BUDDY_TOOLTIP_BLOCKGROUP_TONE = 'Play sound at the specified frequency.';
Blockly.BUDDY_TOOLTIP_BLOCKGROUP_TONE2 = 'Play sound according to the specified frequency and duration.';
Blockly.BUDDY_TOOLTIP_BLOCKGROUP_NOTONE = 'Stop playing sound.';
Blockly.LUXE_LED='LED #';
Blockly.LUXE_MOTOR='Motor #';
Blockly.LUXE_STAT='Stat';
Blockly.LUXE_SPEED='Speed';
Blockly.LUXE_DIR='Direction';
Blockly.LUXE_LED_ON='ON';
Blockly.LUXE_LED_OFF='OFF';
Blockly.LUXE_MOTOR_FORWARD='Clockwise';
Blockly.LUXE_MOTOR_REVERSE='Counterclockwise';
Blockly.LUXE_LED_CHANGE='change';
Blockly.LUXE_MOTOR_CHANGE='changeDirection';
Blockly.LUXE_MOTOR_STOP='stop';
Blockly.LUXE_SPEAKER_PLAYSOUND='Play sound';
Blockly.LUXE_SPEANER_NOSOUND='No sound';
Blockly.LUXE_SPEAKER_FREQUENCY='frequency';
Blockly.LUXE_SPEAKER_DURATION='duration';

//-----------------NOVA---------------------------------
Blockly.BUDDY_NOVA_PORT = 'Port';
Blockly.BUDDY_NOVA_STAT = 'Set';
Blockly.BUDDY_NOVA_GET_STAT = 'Get';

// LED
Blockly.BUDDY_NOVA_LED = 'LED';
Blockly.BUDDY_NOVA_LED_ON = 'ON';
Blockly.BUDDY_NOVA_LED_OFF = 'OFF';

// Button
Blockly.BUDDY_NOVA_BUTTON_PRESSED = 'Pressed';
Blockly.BUDDY_NOVA_BUTTON_RELEASED = 'Released';
Blockly.BUDDY_NOVA_BTN = 'Button ';
Blockly.BUDDY_NOVA_ABCD = '#';

Blockly.BUDDY_NOVA_TILTSWITCH = 'Tilt Switch';
Blockly.BUDDY_NOVA_SOUND = 'Sound'; 
Blockly.BUDDY_NOVA_LIMISWICTH = 'Limit Switch'; 
Blockly.BUDDY_NOVA_LIGHT = 'Light'; 

Blockly.BUDDY_NOVA_BUZZER = 'Buzzer'; 
Blockly.BUDDY_NOVA_FREQUENCY = 'Frequency(Hz)'; 
Blockly.BUDDY_NOVA_MIXLY_DURATION = 'Duration(ms)'; 

Blockly.BUDDY_NOVA_MOTOR = 'DC Motor'; 
Blockly.BUDDY_NOVA_MOTOR_SPEED = 'Speed(-100~100)%'; 

Blockly.BUDDY_NOVA_ULTRASONIC = 'Ultrasonic(cm)'; 

Blockly.BUDDY_NOVA_DHT11 = 'DHT11';
Blockly.BUDDY_NOVA_TYPE = 'Type';
Blockly.BUDDY_NOVA_DHT11_H = 'GetHumidity';
Blockly.BUDDY_NOVA_DHT11_T = 'GetTemperature';

Blockly.BUDDY_NOVA_SERVO = 'Servo';
Blockly.BUDDY_NOVA_DEGREE_0_180 = 'Degree（0~180）';
Blockly.BUDDY_NOVA_DELAY = 'Delay';
Blockly.BUDDY_NOVA_DELAY_MS = 'ms';

Blockly.BUDDY_NOVA_LINEFINDER = 'LineFinder';
Blockly.BUDDY_NOVA_L = 'LeftState';
Blockly.BUDDY_NOVA_R = 'RightState';
Blockly.BUDDY_NOVA_READ = 'GetLineState';

Blockly.BUDDY_NOVA_4DIGITDISPLAY = 'Digitdisplay';
Blockly.BUDDY_NOVA_NUMBER = 'Number';
Blockly.BUDDY_NOVA_DISPLAY_HOUR= 'Display Hour';
Blockly.BUDDY_NOVA_DISPLAY_MIN = 'Display Minute';

Blockly.BUDDY_NOVA_RTC = 'Real Time Clock';
Blockly.BUDDY_NOVA_RTC_SEC = 'Sec';
Blockly.BUDDY_NOVA_RTC_MIN = 'Min';
Blockly.BUDDY_NOVA_RTC_HOUR = 'Hour';
Blockly.BUDDY_NOVA_RTC_WEEK = 'Week';
Blockly.BUDDY_NOVA_RTC_DAY = 'Day';
Blockly.BUDDY_NOVA_RTC_MON = 'Mon';
Blockly.BUDDY_NOVA_RTC_YEAR = 'Year';

Blockly.BUDDY_NOVA_IR_REC = 'Infrared Receiver';

Blockly.BUDDY_NOVA_BLUETOOTH = 'Bluetooth';
Blockly.BUDDY_NOVA_BLUETOOTH_AVAILABLE = 'Available？';
Blockly.BUDDY_NOVA_BLUETOOTH_READ_STR = 'ReadString';
Blockly.BUDDY_NOVA_BLUETOOTH_READ_NUM = 'ReadNumber';

//spi
Blockly.TO_SPI_SLAVE_PIN='To SPI Slave PIN#';
Blockly.SPI_TRANSFER='transfer';

Blockly.BUDDY_SERIAL_BEGIN='baud rate';

//stepper
Blockly.BUDDY_STEPPER='Stepper';
Blockly.BUDDY_STEPPER_SETUP_STEPPER='Setup Stepper';
Blockly.BUDDY_STEPPER_PIN1='PIN1#';
Blockly.BUDDY_STEPPER_PIN2='PIN2#';
Blockly.BUDDY_STEPPER_PIN3='PIN3#';
Blockly.BUDDY_STEPPER_PIN4='PIN4#';
Blockly.BUDDY_STEPSPERREVOLUTION='steps per revolution';
Blockly.BUDDY_STEPPER_SET_SPEED='setSpeed';
Blockly.BUDDY_STEPPER_STEP='step';

//-----------------Ethernet------------------------------------
Blockly.BUDDY_ETHERNET_BEGIN='Begin (DHCP)';
Blockly.BUDDY_ETHERNET='Ethernet';
Blockly.BUDDY_ETHERNET2='Ethernet2';
Blockly.BUDDY_ETHERNET_MAC_ADDRESS='Mac Address';
Blockly.BUDDY_ETHERNET_LOCALIP='localIP';
Blockly.BUDDY_ETHERNET_CLINET_CONNECT_SERVER='Clinet.Connect Host';
Blockly.BUDDY_ETHERNET_CLINET_PORT='Port';
Blockly.BUDDY_ETHERNET_CLINET_STOP='Client.stop';
Blockly.BUDDY_ETHERNET_CLINET_CONNECTED='Client.connected';
Blockly.BUDDY_ETHERNET_CLINET_AVAILABLE='Client.available';
Blockly.BUDDY_ETHERNET_CLINET_PRINT='Client.print';
Blockly.BUDDY_ETHERNET_CLINET_PRINTLN='Client.println';
Blockly.BUDDY_ETHERNET_CLINET_READ='Client.read';
Blockly.BUDDY_ETHERNET_CLINET_GET_REQUEST='GET Request';
Blockly.BUDDY_ETHERNET_CLINET_URL='URL';
Blockly.BUDDY_ETHERNET_CLINET_SERVER='Host';
//lm35温度传感器
Blockly.BUDDY_LM35='LM35 Temperature';
//DS18B20温度传感器
Blockly.BUDDY_DS18B20='DS18B20 PIN#';
Blockly.BUDDY_DS18B20_GET_TEMP='getTemperature';
Blockly.BUDDY_DS18B20_C='°C';
Blockly.BUDDY_DS18B20_F='°F';

//GPS
Blockly.BUDDY_GPS_INIT='GPS init';
Blockly.BUDDY_GPS_DATA_AVAILABLE='GPS data is available';
Blockly.BUDDY_GPS_DATA_ENCODE='GPS encode data successful';
Blockly.BUDDY_GPS_LOCATION='location';
Blockly.BUDDY_GPS_DATE='date';
Blockly.BUDDY_GPS_TIME='time';
Blockly.BUDDY_GPS_ISVALID='isValid';
Blockly.BUDDY_GPS_GET='GPS get';
Blockly.BUDDY_GPS_LOCATION_LAT='location-latitude';
Blockly.BUDDY_GPS_LOCATION_LNG='location-longitude';
Blockly.BUDDY_GPS_DATE_YEAR='date-year';
Blockly.BUDDY_GPS_DATE_MONTH='date-month';
Blockly.BUDDY_GPS_DATE_DAY='date-day';
Blockly.BUDDY_GPS_TIME_HOUR='time-hour';
Blockly.BUDDY_GPS_TIME_MINUTE='time-minute';
Blockly.BUDDY_GPS_TIME_SECOND='time-second';
Blockly.BUDDY_GPS_TIME_CENTISECOND='time-centisecond';

//factory
Blockly.BUDDY_PARAMS = 'parameters';

//MsTimer2
Blockly.BUDDY_MSTIMER2_EVERY='every';
Blockly.BUDDY_MSTIMER2_DO='do';
Blockly.BUDDY_MSTIMER2_START='start';
Blockly.BUDDY_MSTIMER2_STOP='stop';
//interrupts
Blockly.BUDDY_CONTROL_INTERRUPTS = 'interrupts';
Blockly.BUDDY_CONTROL_NOINTERRUPTS = 'nointerrupts';
//others
Blockly.BUDDY_WARNING_NOT_DECLARE='This variable is not declared!';
Blockly.BUDDY_LENGTH = "length of";
Blockly.BUDDY_EQUALS="equals";
Blockly.BUDDY_STARTSWITH="startsWith";
Blockly.BUDDY_ENDSWITH="endsWith";
Blockly.BUDDY_COMPARETO="compareTo";
Blockly.BUDDY_COMPARETO_HELP="compare based on dictory, equal retrun 0 ,bigger return positive，else return negative";
Blockly.Msg.UNDO = "Undo";
Blockly.Msg.REDO = "Redo";
Blockly.BUDDY_CONTROL_END_PROGRAM = "end program";

//oled
Blockly.Msg.texttodisplay = "texts to display:";
Blockly.Msg.OLEDDISPLAY = "display";
Blockly.Msg.todisplay = "to display:";
Blockly.Msg.rawx = "raw x(127 max)";
Blockly.Msg.liney = "line y(63 max)";
Blockly.Msg.line1 = "line1=";
Blockly.Msg.line2 = "line2=";
Blockly.Msg.line3 = "line3=";
Blockly.Msg.line4 = "line4=";
Blockly.Msg.num1 = "Number 1(at end)=";
Blockly.Msg.num2 = "Number 2(at end)=";
Blockly.Msg.num3 = "Number 3(at end)=";
Blockly.Msg.num4 = "Number 4(at end)=";
// RGB
Blockly.BUDDY_RGB = 'RGB Light';
Blockly.BUDDY_RGB_NUM = 'Light number';
Blockly.BUDDY_RGB_COUNT = 'Light Count';
Blockly.BUDDY_RGB_R = 'R value';
Blockly.BUDDY_RGB_G = 'G value';
Blockly.BUDDY_RGB_B = 'B value';

//四位数码管
Blockly.BUDDY_4DIGITDISPLAY = 'Digitdisplay';
Blockly.BUDDY_4DIGITDISPLAY_DISPLAYSTRING = 'displayString';
Blockly.BUDDY_4DIGITDISPLAY_NOMBER1 = 'No.';
Blockly.BUDDY_4DIGITDISPLAY_NOMBER2 = '';
Blockly.BUDDY_4DIGITDISPLAY_DOT = 'Dot';
Blockly.BUDDY_4DIGITDISPLAY_ON = 'On';
Blockly.BUDDY_4DIGITDISPLAY_OFF = 'Off';

//TM1637
Blockly.BUDDY_4DIGITDISPLAY_TM1637 = 'TM1637';
Blockly.BUDDY_4DIGITDISPLAY_TM1637_DISPLAYSTRING = 'TM1637 Show(scroll) content';
Blockly.BUDDY_4DIGITDISPLAY_TM1637_DISPLAYSTRING_TIP = '';
Blockly.BUDDY_4DIGITDISPLAY_TM1637_TIP = '';
Blockly.BUDDY_4DIGITDISPLAY_TM1637_DISPLAYTIME = 'TM1637 Show time';
Blockly.BUDDY_4DIGITDISPLAY_TM1637_DISPLAYTIME_TOOLTIP = '';
Blockly.BUDDY_4DIGITDISPLAY_TM1637_INIT = 'TM1637 Init';
Blockly.BUDDY_4DIGITDISPLAY_STOPWATCH = 'Stopwatch';
Blockly.BUDDY_4DIGITDISPLAY_TM1637_STOPWATCH_TOOLTIP = '';
Blockly.BUDDY_4DIGITDISPLAY_STOPWATCH_START = 'Start';
Blockly.BUDDY_4DIGITDISPLAY_STOPWATCH_PAUSE = 'Pause';
Blockly.BUDDY_4DIGITDISPLAY_STOPWATCH_RESET = 'Reset';
Blockly.BUDDY_4DIGITDISPLAY_TM1637_BRIGHTNESS = 'TM1637 Brightness';
Blockly.BUDDY_4DIGITDISPLAY_4DIGITDISPLAY_BRIGHTNESS_TOOLTIP = '';

Blockly.BUDDY_YEAR = 'Y';
Blockly.BUDDY_MONTH = 'M';
Blockly.BUDDY_DAY = 'D';
Blockly.BUDDY_HOUR = 'H';
Blockly.BUDDY_MINUTE = 'M';
Blockly.BUDDY_SECOND = 'S';
Blockly.BUDDY_WEEK = 'W';

Blockly.BUDDY_DS1302_INITPIN = 'Initialize DS1302 RTC clock module PIN'
Blockly.BUDDY_SETDATE = 'SetDate:';
Blockly.BUDDY_DATEFORMATE = 'DateFormat(Y-M-D)'
Blockly.BUDDY_TIMEFORMATE = 'TimeForamt(H:M:S)';
Blockly.BUDDY_DISPLAY_MATRIX_INIT = "Init 8*8 dot matrix display screen";
Blockly.BUDDY_DISPLAY_MATRIX_SHOW = "Dot matrix display";
Blockly.BUDDY_DISPLAY_MATRIX_X = 'X Axis';
Blockly.BUDDY_DISPLAY_MATRIX_Y = 'Y Axis';
Blockly.BUDDY_DISPLAY_MATRIX_SHOWPOINT = ' Single point set to';
Blockly.BUDDY_DISPLAY_MATRIX_SHOWPOINT_TOOLTIP = 'Single point operation on the dot matrix screen, XY axis value range 1-8';
Blockly.BUDDY_DISPLAY_MATRIX_CLEAR = " Dot matrix clear";
Blockly.BUDDY_DISPLAY_MATRIX_ARRAYVAR = "Array variable";
Blockly.BUDDY_DISPLAY_MATRIX_PICARRAY = " Pictur Array";
Blockly.BUDDY_DISPLAY_MATRIX_ROTATE = "Rotate screen";

Blockly.BUDDY_RTCINIT = 'Initialize DS1307 RTC clock module';
Blockly.BUDDY_RTCGETTIME = 'from RTC clock module get';
Blockly.BUDDY_RTCSETTIME = 'Set time of RTC clock module';
Blockly.BUDDY_RTCSETDATE = 'Set date of RTC clock module';

Blockly.BUDDY_ADXL345 = 'Acceleration_ADXL345';
Blockly.BUDDY_ADXL345_X= 'X-axis acceleration';
Blockly.BUDDY_ADXL345_Y= 'Y-axis acceleration';
Blockly.BUDDY_ADXL345_Z=  'Z-axis acceleration';
Blockly.BUDDY_ADXL345_XA=  'X-axis angle';
Blockly.BUDDY_ADXL345_YA=  'Y-axis angle';
Blockly.BUDDY_ADXL345_ZA =  'Z-axis angle';

Blockly.BUDDY_COMMUNICATION_RFID_INITIAL = "initialize rfid as";
Blockly.BUDDY_COMMUNICATION_RFID_ON_DETECTED = "on signal detected";
Blockly.BUDDY_COMMUNICATION_RFID_READ_CARDNUM = "card number read by rfid";
Blockly.BUDDY_COMMUNICATION_RFID_READ_CARDNUM_IS = "card numbers detected by RFID is";
Blockly.BUDDY_COMMUNICATION_RFID_WRITE = "RFID write card";
Blockly.BUDDY_COMMUNICATION_DATA_BLOCK = "data block";
Blockly.BUDDY_COMMUNICATION_WRITE_NUM = "write data";
Blockly.BUDDY_COMMUNICATION_RFID_TOOLTIP = "This is RFID's reading card";
Blockly.BUDDY_COMMUNICATION_RFID_READ = "RFID read";
Blockly.BUDDY_COMMUNICATION_DATA_FROM = "data from";
Blockly.BUDDY_COMMUNICATION_RFID_OFF = "rfid stop detection";