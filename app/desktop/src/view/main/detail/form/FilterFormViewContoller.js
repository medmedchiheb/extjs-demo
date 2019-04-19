Ext.define('extjsApp.view.main.detail.form.FilterFormViewContoller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formpanel',

    onSearch: function(btn) {


        var resp = this.lookupReference('resp').getValue();
        var creator = this.lookupReference('creator').getValue();
        var status = this.lookupReference('status').getValue();
        var from = this.lookupReference('from').getValue();
        var to = this.lookupReference('to').getValue();

        var data = {resp: resp, creator: creator, status: status, from: from, to: to};
        console.log('data: ', data);
        this.loadData(resp, creator, status, from, to);
        //Ext.fireEvent("search", data);

        // var view = this.lookup('personnelview'); 
       
        // var view2 = this.lookupReference('personnelview'); 
        // console.log('view: ', view);
        // console.log('view2: ', view2);
    },

    onSave: function() {
        this.getView().reset();
    },
    loadData: function (resp, creator, status, from, to) {

        var myStore = this.getStore("personnelviewstore");
        
        console.log(myStore);
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
        
    }
});