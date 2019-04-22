Ext.define('extjsApp.view.personnel.PersonnelView',{
	extend: 'Ext.grid.Grid',
	xtype: 'personnelview',
	cls: 'personnelview',
	reference: 'personnelview',	
	requires: [],
	controller: {type: 'personnelviewcontroller'},
	viewModel: {type: 'personnelviewmodel'},

	store: {type: 'personnelviewstore'},
	columns: [
		{ 
			text: 'ID',
			dataIndex: 'ID',
			width: 100,
			cell: {userCls: 'bold'}
		},
		{text: 'Short description',dataIndex: 'short_description',width: 450},
		{
			text: 'Responsable',
			dataIndex: 'Resp',
			width: 150 
		}, {
				text: 'Creator',
				dataIndex: 'Creator',
				width: 150 
		}, {
			text: 'Status',
			dataIndex: 'status',
			width: 150 
	     }, {
			text: 'Updated time',
			dataIndex: 'ts_update',
			width: 250 
	     }
	],
	listeners: {
		select: 'onItemSelected',
		myEvent: 'onMyEvent'

	},
	afterShow: function () {
		this.setMasked(false);
		// let baseURL = 'http://192.168.0.78:8085/services/request/getJsonData/';

		// console.log('loading data');
		// var myStore = this.store;
		// myStore.load();

		// Ext.Ajax.request({
		// 	url: 'http://192.168.0.78:8085/services/request/getJsonData/1000532?param1=Ticket&param2=&param3=&param4=&param5=&param6=',
		// 	success: function(resp) {
		// 		console.log('resp: ', resp);
		// 		var result = Ext.decode(resp.responseText);
		// 		myStore.getProxy().data = result;
		// 		myStore.load();
		// 	},
		// });
		// this.fireEvent('toogleBtn', this);
		//this.toogleBtn();
     }

	
});
