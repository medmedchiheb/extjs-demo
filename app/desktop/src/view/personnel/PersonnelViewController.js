Ext.define('extjsApp.view.personnel.PersonnelViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.personnelviewcontroller',

	onItemSelected: function (sender, record) {
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

	onConfirm: function (choice) {
		if (choice === 'yes') {
			//
		}
	},


	loadData: function () {
		Ext.Ajax
		.request({
			url : 'http://localhost:8080/tickets',
			// jsonData : {
			// 	'id' : 123456,
			// 	'name' : 'jude.wang'
			// },
			method : 'GET',
			success : function(
					response) {
				console
						.log(response);

			}
	
		});
	}
});
