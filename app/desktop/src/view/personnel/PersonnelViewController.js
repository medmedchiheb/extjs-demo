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

	onMyEvent: function(view, data) {
		console.log('muy evnet, ', data);
		this.loadData(data.resp, data.creator, data.status, data.from, data.to);
	},
	onSelectHistoryEvent: function(view, data) {
		console.log('onSelectHistoryEvent, ', data);
		this.loadData('data.resp', 'data.creator', 'data.status', 'data.from', 'data.to', data.url);
	},
	loadData: function (resp, creator, status, from, to, url = '') {
		var myStore = this.getView().store; 
		var finalUrl = '' ;
		if (url == '') {
		//Ext.getStore("extjsApp.view.personnel.PersonnelStore");
			var baseURl = "http://192.168.0.78:8085/services/request/getJsonData/1000532";
	
			var endpoint = "?param1=Ticket&param2="+resp+"&param3="+creator+"&param4="+from+"&param5="+to+"&param6="+status;
			finalUrl =  baseURl+endpoint;
		} else {
            finalUrl = url;
		}
		
		//myStore.load();
		var view = this.getView();
		view.mask(); //view.setMasked(true); 
		Ext.Ajax.request({
			url: finalUrl,
			success: function(resp) {
				console.log('resp: ', resp);
				var result = Ext.decode(resp.responseText);
			    myStore.loadData(result);
				view.unmask(); // view.setMasked(false);
				//myStore.load();
				//myStore.getProxy().data = result;
				//myStore.load();
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
