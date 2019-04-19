Ext.define('extjsApp.view.personnel.PersonnelView',{
	extend: 'Ext.grid.Grid',
	xtype: 'personnelview',
	cls: 'personnelview',
	requires: [],
	controller: {type: 'personnelviewcontroller'},
	viewModel: {type: 'personnelviewmodel'},
	store: {type: 'personnelviewstore'},
	columns: [
		{ 
			text: 'ID',
			dataIndex: 'id',
			width: 100,
			cell: {userCls: 'bold'}
		},
		{text: 'Title',dataIndex: 'title',width: 230},
		{
			text: 'Descrpition',
			dataIndex: 'description',
			width: 150 
		}, {
				text: 'Time',
				dataIndex: 'time',
				width: 150 
		}, {
			text: 'User',
			dataIndex: 'user',
			width: 150 
	     }, {
			text: 'Status',
			dataIndex: 'status',
			width: 150 
	     }, {
			text: 'Valid',
			dataIndex: 'valid',
			width: 150 
	     }
	],
	listeners: {
		select: 'onItemSelected'
	
	},
	afterShow: function () {
		console.log('afterShow');
		var myStore = this.store;

		Ext.Ajax.request({
			url: 'http://localhost:8080/',
			success: function(resp) {
				console.log('resp: ', resp);
				var result = Ext.decode(resp.responseText);
				myStore.getProxy().data = result;
				myStore.load();
			},
		});
		// this.fireEvent('toogleBtn', this);
		//this.toogleBtn();
     }

	
});
