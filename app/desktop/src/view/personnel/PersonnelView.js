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
		select: 'onItemSelected',
		render: function() {
			console.log('load dtata');
			personnelviewstore.load();
		}
	}
});
