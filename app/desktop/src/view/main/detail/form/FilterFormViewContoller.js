Ext.define('extjsApp.view.main.detail.form.FilterFormViewContoller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formpanel',

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
        var view = this.getView();
        view.fireEvent('myEvent', view, data);

    },

    onSave: function() {
        this.getView().reset();
    },

    formatDate: function(dateStr) {
        //format 2016-10-10 08:50:44.0
      var dt = new Date(dateStr);
      return Ext.Date.format(dt, 'Y-m-d H:i:s.u');
    }
    
});