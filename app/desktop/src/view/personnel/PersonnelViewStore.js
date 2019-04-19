Ext.define('extjsApp.view.personnel.TicketModel', {
	extend: 'Ext.data.Store',
	alias: 'store.personnelviewstore',
	model: 'extjsApp.view.personnel.TicketModel',
	autoLoad: true,

	//data: { items: []},
	proxy: {
		type: 'ajax',
		url: 'http://localhost:8080/',
		reader: {
			type: 'json',
			rootProperty: ''
		}
	}
});
