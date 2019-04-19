Ext.define('extjsApp.view.personnel.PersonnelViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.personnelviewcontroller',
	init: function() {
		Ext.on("search", function(data) {
			// login logic
			console.log('data: ', data);
			//console.log('data: ', this.view.store);
			this.fireEvent('myEvent', this, data);
			
		 });
	},
	onItemSelected: function (sender, record) {
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

	onConfirm: function (choice) {
		if (choice === 'yes') {
			//
		}
	},

	onMyEvent: function(data) {
		console.log('muy evnet');
		this.loadData(data.resp, data.creator, data.status, data.from, data.to);
	},

	loadData: function (resp, creator, status, from, to) {

		var myStore = Ext.getStore("extjsApp.view.personnel.PersonnelStore");
		var baseURl = "http://192.168.0.78:8085/services/request/getJsonData/1000532";

		var endpoint = "?param1=Ticket&param2="+resp+"&param3="+creator+"&param4="+from+"&param5="+to+"&param6="+status;

		Ext.Ajax.request({
			url: baseURl+endpoint,
			success: function(resp) {
				console.log('resp: ', resp);
				var result = Ext.decode(resp.responseText);
				myStore.getProxy().data = result;
				myStore.load();
			},
		});

		// Ext.Ajax
		// .request({
		// 	url : 'http://localhost:8080/tickets',
		// 	// jsonData : {
		// 	// 	'id' : 123456,
		// 	// 	'name' : 'jude.wang'
		// 	// },
		// 	method : 'GET',
		// 	success : function(
		// 			response) {
		// 		console
		// 				.log(response);

		// 	}
	
		// });
	}
});
