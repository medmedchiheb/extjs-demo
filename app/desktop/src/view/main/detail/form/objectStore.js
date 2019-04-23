Ext.define('extjsApp.view.main.detail.form.ObjectStore', {
    extend: 'Ext.data.Store',
    alias: 'store.objectstore',
    fields: ['id', 'name'],
    autoLoad   : true,
    data : [
        {"id":"1", "name":"Ticket"},
        {"id":"2", "name":"Requirement"},
        {"id":"3", "name":"Problem"}
    ]
    // proxy: {
    //     type: 'rest',
    //     url : 'http://localhost:8080/tickets'
    // }

   
});