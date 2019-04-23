Ext.define('extjsApp.view.main.detail.form.FilterFormViewContoller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formpanel',
    currentdata: null,

    onSearch: function(btn) {


        var resp = this.lookupReference('resp').getValue();
        var creator = this.lookupReference('creator').getValue();
        var status = this.lookupReference('status').getValue();
        var from = this.lookupReference('to').getValue(); // because param4 < ts_update
        var to = this.lookupReference('from').getValue(); // because param4 > ts_update


        resp = resp != null ? resp : '';
        creator = creator != null ? creator : '';
        status = status != null ? status : '';
        from = from != null ? from : '';
        to = to != null ? to : '';

        if (from != '') {
            from = this.formatDate(from);
        }
        if (to != '') {
            to = this.formatDate(to);
        }

        var data = {resp: resp, creator: creator, status: status, from: from, to: to};
        console.log('data: ', data);
        this.currentdata = data;
        var view = this.getView();
        view.fireEvent('myEvent', view, data);

    },

    onSave: function() {
        //this.getView().reset();

    if (this.currentdata != null ) {

      
        Ext.Msg.prompt("Save Search", "Please enter a name for your search", function(btnText, sInput){
            if(btnText === 'ok'){
               // Ext.Msg.alert("Status", "You entered:" + sInput);
               this.saveSearch(sInput);
            }
        }, this);

    } else {
        Ext.Msg.alert("Warning!", "Please submit a search Before!");
    }

       
      
    },

    formatDate: function(dateStr) {
        //format 2016-10-10 08:50:44.0
      var dt = new Date(dateStr);
      return Ext.Date.format(dt, 'Y-m-d H:i:s.u');
    },

    saveSearch(name) {

         /*
        {
                "alias": "string",
                "description": "string",
                "id": 0,
                "key": "string",
                "value": "string"
        }*/

        var json = {
            alias: "Ticket",
            baseUrl: "http://192.168.0.78:8085/services/request/getJsonData/1000532",
            criterias: [],
            name: name,
            serviceId: "1000532",
            url: "---",
            user: "MBJ"
        };
        
        json.criterias.push({
            alias: "Resp",
            description: "Responsable",
           // "id": 0,
            key: "param1",
            value: "Ticket"
        });

    
            json.criterias.push({
                alias: "Resp",
                description: "Responsable",
               // "id": 0,
                key: "param2",
                value: this.currentdata.resp
            });
        

       
            json.criterias.push({
                alias: "Creator",
                description: "Creator",
               // "id": 0,
                key: "param3",
                value: this.currentdata.creator
            });
        

       
            json.criterias.push({
                alias: "ts_update",
                description: "lower_than_ts_update",
               // "id": 0,
                key: "param4",
                value: this.currentdata.from
            });
        

      
            json.criterias.push({
                alias: "ts_update",
                description: "greater_than_ts_update",
               // "id": 0,
                key: "param5",
                value: this.currentdata.to
            });
        

       
            json.criterias.push({
                alias: "status",
                description: "status",
               // "id": 0,
                key: "param6",
                value: this.currentdata.status
            });
        
            var parent = this;

            Ext.Ajax.request({
                url: "http://localhost:8080/search",
                method: 'PUT',
                //    params: { 
                //             ajax_req: Ext.util.JSON.encode(json)
                //  },
                 jsonData: json,
                success: function(transport){
                       // do something
                       Ext.Msg.alert("Success!", "Search saved!");
                       var view = parent.getView();
                       view.fireEvent('refreshHistory', view);
                },
                failure: function(transport){
                    Ext.Msg.alert("Error!", transport.responseText);
                      //  alert("Error: " - transport.responseText);
                }
         });


        // Ext.Ajax.request({
		// 	url: baseURl+endpoint,
		// 	success: function(resp) {
		// 		console.log('resp: ', resp);
		// 		var result = Ext.decode(resp.responseText);
		// 	    myStore.loadData(result);
		// 		view.unmask(); // view.setMasked(false);
		// 		//myStore.load();
		// 		//myStore.getProxy().data = result;
		// 		//myStore.load();
		// 	},
		// });
    }
    
});