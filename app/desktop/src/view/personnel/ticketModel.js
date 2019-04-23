Ext.define('extjsApp.view.personnel.TicketModel', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'ID',
        type: 'int'
    }, {
        name: 'Resp',
        type: 'string'
    },{
        name: 'Creator',
        type: 'string'
    },{
        name: 'status',
        type: 'string'
    },{
        name: 'ts_update',
        type: 'string'
    }]
    // proxy: {
    //     type: 'rest',
    //     url : 'http://localhost:8080/tickets'
    // }

   
});