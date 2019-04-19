Ext.define('extjsApp.view.personnel.PersonnelStore', {
	extend: 'Ext.data.Store',
	alias: 'store.personnelviewstore',
	model: 'extjsApp.view.personnel.TicketModel',

	//autoLoad: false,

	//data: { items: []},
	proxy: {
		type: 'ajax',
		url: 'http://192.168.0.78:8085/services/request/getJsonData/1000532?param1=Ticket&param2=&param3=&param4=&param5=&param6=',
		reader: {
			type: 'json',
			rootProperty: ''
		}
	}
});
