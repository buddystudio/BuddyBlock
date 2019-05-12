'use strict';

goog.provide('Blockly.Blocks.loops');

goog.require('Blockly.Blocks');

Blockly.Blocks.loops.HUE = "#40bf4a";

Blockly.Blocks['base_setup'] = 
{
    init: function() 
	{
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput().appendField(Blockly.BUDDY_SETUP);
        this.appendStatementInput('DO').appendField('');
        this.setTooltip(Blockly.BUDDY_TOOLTIP_CONTROL_SETUP);
    }
};

Blockly.Blocks['controls_end_program'] = {
    init: function() {
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput().appendField(Blockly.BUDDY_CONTROL_END_PROGRAM);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks['base_delay'] = {
    init: function() {
        var UNIT = [[Blockly.BUDDY_DELAY_MS, 'delay'], [Blockly.BUDDY_DELAY_US, 'delayMicroseconds']];
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendValueInput("DELAY_TIME", 'Number').appendField(Blockly.BUDDY_DELAY).appendField(new Blockly.FieldDropdown(UNIT), 'UNIT').setCheck('Number');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.BUDDY_TOOLTIP_CONTROL_DELAY);
    }
};

Blockly.Blocks['controls_switch_case'] = {
    init: function() {
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendValueInput('IF0').setCheck(['Number', Boolean]).appendField('switch');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(['controls_case', 'controls_default']));
        this.elseifCount_ = 0;
        this.elseCount_ = 0;
    },
    /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
    mutationToDom: function() {
        if (!this.elseifCount_ && !this.elseCount_) {
            return null;
        }
        var container = document.createElement('mutation');
        if (this.elseifCount_) {
            container.setAttribute('elseif', this.elseifCount_);
        }
        if (this.elseCount_) {
            container.setAttribute('else', 1);
        }
        return container;
    },
    /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
    domToMutation: function(xmlElement) {
        this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10);
        this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10);
        for (var i = 1; i <= this.elseifCount_; i++) {
            this.appendValueInput('IF' + i).setCheck(['Number', Boolean]).appendField('case');
            this.appendStatementInput('DO' + i).appendField('');
        }
        if (this.elseCount_) {
            this.appendStatementInput('ELSE').appendField('default');
        }
    },
    /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
    decompose: function(workspace) {
        var containerBlock = Blockly.Block.obtain(workspace, 'controls_switch');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 1; i <= this.elseifCount_; i++) {
            var elseifBlock = Blockly.Block.obtain(workspace, 'controls_case');
            elseifBlock.initSvg();
            connection.connect(elseifBlock.previousConnection);
            connection = elseifBlock.nextConnection;
        }
        if (this.elseCount_) {
            var elseBlock = Blockly.Block.obtain(workspace, 'controls_default');
            elseBlock.initSvg();
            connection.connect(elseBlock.previousConnection);
        }
        return containerBlock;
    },
    /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
    compose: function(containerBlock) {
        // Disconnect the else input blocks and remove the inputs.
        if (this.elseCount_) {
            this.removeInput('ELSE');
        }
        this.elseCount_ = 0;
        // Disconnect all the elseif input blocks and remove the inputs.
        for (var i = this.elseifCount_; i > 0; i--) {
            this.removeInput('IF' + i);
            this.removeInput('DO' + i);
        }
        this.elseifCount_ = 0;
        // Rebuild the block's optional inputs.
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        while (clauseBlock) {
            switch (clauseBlock.type) {
            case 'controls_case':
                this.elseifCount_++;
                var ifInput = this.appendValueInput('IF' + this.elseifCount_).setCheck(['Number', Boolean]).appendField('case');
                var doInput = this.appendStatementInput('DO' + this.elseifCount_);
                doInput.appendField('');
                // Reconnect any child blocks.
                if (clauseBlock.valueConnection_) {
                    ifInput.connection.connect(clauseBlock.valueConnection_);
                }
                if (clauseBlock.statementConnection_) {
                    doInput.connection.connect(clauseBlock.statementConnection_);
                }
                break;
            case 'controls_default':
                this.elseCount_++;
                var elseInput = this.appendStatementInput('ELSE');
                elseInput.appendField('default');
                // Reconnect any child blocks.
                if (clauseBlock.statementConnection_) {
                    elseInput.connection.connect(clauseBlock.statementConnection_);
                }
                break;
            default:
                throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
        }
    },
    /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
            case 'controls_case':
                var inputIf = this.getInput('IF' + i);
                var inputDo = this.getInput('DO' + i);
                clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                i++;
                break;
            case 'controls_default':
                var inputDo = this.getInput('ELSE');
                clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                break;
            default:
                throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
        }
    }
};

Blockly.Blocks['controls_switch'] = {
    /**
   * Mutator block for if container.
   * @this Blockly.Block
   */
    init: function() {
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput().appendField('switch');
        this.appendStatementInput('STACK');
        this.contextMenu = false;
    }
};

Blockly.Blocks['controls_case'] = {
    /**
   * Mutator bolck for else-if condition.
   * @this Blockly.Block
   */
    init: function() {
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput().appendField('case');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.contextMenu = false;
    }
};

Blockly.Blocks['controls_default'] = {
    /**
   * Mutator block for else condition.
   * @this Blockly.Block
   */
    init: function() {
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput().appendField('default');
        this.setPreviousStatement(true);
        this.contextMenu = false;
    }
};

Blockly.Blocks['controls_millis'] = {
    init: function() {
        var UNIT = [[Blockly.BUDDY_DELAY_MS, 'millis'], [Blockly.BUDDY_DELAY_US, 'micros']];
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput().appendField(Blockly.BUDDY_RUNTIME).appendField(new Blockly.FieldDropdown(UNIT), 'UNIT');
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.BUDDY_TOOLTIP_CONTROL_MILLIS);
    }
};

Blockly.Blocks['controls_interrupts'] = {
    init: function() {
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput().appendField(Blockly.BUDDY_CONTROL_INTERRUPTS);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks['controls_nointerrupts'] = {
    init: function() {
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput().appendField(Blockly.BUDDY_CONTROL_NOINTERRUPTS);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks['controls_whileUntil2'] = {
    init: function() {
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendValueInput('BOOL').setCheck([Boolean, 'Number']).appendField(Blockly.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT).appendField(new Blockly.FieldDropdown(this.OPERATORS), 'MODE');
        this.appendStatementInput('DO').appendField(Blockly.LANG_CONTROLS_WHILEUNTIL_INPUT_DO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue('MODE');
            var TOOLTIPS = {
                'WHILE': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
                'UNTIL': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
            };
            return TOOLTIPS[op];
        });
    }
};

Blockly.Blocks.controls_whileUntil2.OPERATORS = [[Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE, 'WHILE'], [Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, 'UNTIL']];