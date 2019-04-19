Ext.define('extjsApp.view.personnel.TicketModel', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'title',
        type: 'string'
    },{
        name: 'description',
        type: 'string'
    },{
        name: 'time',
        type: 'int'
    },{
        name: 'user',
        type: 'string'
    },{
        name: 'status',
        type: 'string'
    },{
        name: 'valid',
        type: 'int'
    }],
    proxy: {
        type: 'rest',
        url : 'http://localhost:8080/tickets'
    }

   
});