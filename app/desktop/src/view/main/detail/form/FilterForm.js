Ext.define('extjsApp.view.main.detail.form.FilterForm', {
    extend: 'Ext.form.Panel',
    xtype: 'form-panel',
    controller: 'formpanel',
    reference: 'formpanel',

    requires: [
        'Ext.field.*',
        'Ext.form.FieldSet',
        'extjsApp.view.main.detail.form.ObjectStore'
    ],

    viewModel: {
    },

    buttons: [{
        text: 'Search',
       // bind: '{disabled ? "Enable fields" : "Disable fields"}',
        handler: 'onSearch'
    }, {
        text: 'Save',
        handler: 'onSave'
    }],

    bind: {
        disabled: '{disabled}' // Will cascade down to all fields.
    },
    listeners: {
       selectItemEvF: 'selectItem'
    },
    items: [{
        xtype: 'combobox',
        name: 'object',
        label: 'Object',
        placeholder: 'type Object',
        autoCapitalize: true,
        // store: new Ext.data.JsonStore({
        //     fields : ['id', 'name'],
        //     autoload: true,
        //     data : [ {"id":"1", "name":"Ticket"},
        //     {"id":"2", "name":"Requirement"},
        //     {"id":"3", "name":"Problem"}]
        // }),
        required: true,
        clearable: true,
        
        // listeners: {
        //     'render': function() {
        //         this.getStore().load();
        //     },
        //     'viewready': function() {
        //         this.getStore().rightFilter();
        //     }
        // }
    }, {
        xtype: 'textfield',
        name: 'resp',
        label: 'Responsable',
        placeholder: 'type Resp abbreviation',
        autoCapitalize: true,
        reference: 'resp',
        required: true,
        clearable: true
    }, {
        xtype: 'textfield',
        name: 'Creator',
        label: 'Creator',
        reference: 'creator',
        placeholder: 'type Creator abbreviation',
        autoCapitalize: true,
        required: true,
        clearable: true
    }, {
        xtype: 'textfield',
        name: 'status',
        label: 'Status',
        reference: 'status',
        placeholder: 'type status',
        autoCapitalize: true,
        required: true,
        clearable: true
    }, {
        xtype: 'displayfield',
        name: 'display_field',
        label: 'Updated time filter',
        value: 'select from/to datetime'
    }, {
        xtype: 'datepickerfield',
        label: 'from',
        reference: 'from',
        name: 'from',
        value: null

    }, {
        xtype: 'datepickerfield',
        label: 'to',
        reference: 'to',
        name: 'to',
        value: null

    }
]
});