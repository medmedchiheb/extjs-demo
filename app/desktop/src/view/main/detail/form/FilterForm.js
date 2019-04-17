Ext.define('extjsApp.view.main.detail.form.FilterForm', {
    extend: 'Ext.form.Panel',
    xtype: 'form-panel',
    controller: 'formpanel',

    requires: [
        'Ext.field.*',
        'Ext.form.FieldSet'
    ],

    viewModel: {
    },

    buttons: [{
        text: 'Disable fields',
        bind: '{disabled ? "Enable fields" : "Disable fields"}',
        handler: 'onDisableTap'
    }, {
        text: 'Reset',
        handler: 'onResetTap'
    }],

    bind: {
        disabled: '{disabled}' // Will cascade down to all fields.
    },
    items: [{
        xtype: 'textfield',
        name: 'name',
        label: 'Name',
        placeholder: 'Tom Roy',
        autoCapitalize: true,
        required: true,
        clearable: true
    }, {
        label: 'Salary',
        reference: 'salary',
        xtype: 'numberfield',
        minValue: 0,
        decimals: 2
    }, {
        xtype: 'displayfield',
        name: 'display_field',
        label: 'DisplayField label',
        value: 'display field readonly!'
    }, {
        xtype: 'passwordfield',
        revealable: true,
        name: 'password',
        label: 'Password',
        clearable: true
    }, {
        xtype: 'emailfield',
        name: 'email',
        label: 'Email',
        placeholder: 'me@sencha.com',
        clearable: true
    }, {
        xtype: 'urlfield',
        name: 'url',
        label: 'Url',
        placeholder: 'http://sencha.com',
        clearable: true
    }, {
        xtype: 'searchfield',
        name: 'search',
        label: 'Search',
        placeholder: 'Search',
        clearable: true
    }
]
});