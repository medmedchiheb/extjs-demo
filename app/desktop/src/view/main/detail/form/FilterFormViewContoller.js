Ext.define('extjsApp.view.main.detail.form.FilterFormViewContoller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formpanel',

    onSearch: function(btn) {


        var resp = this.lookupReference('resp').getValue();
        var creator = this.lookupReference('creator').getValue();
        var status = this.lookupReference('status').getValue();
        var from = this.lookupReference('from').getValue();
        var to = this.lookupReference('to').getValue();


        resp = resp != null ? resp : '';
        creator = creator != null ? creator : '';
        status = status != null ? status : '';
        from = from != null ? from : '';
        to = to != null ? to : '';

        var data = {resp: resp, creator: creator, status: status, from: from, to: to};
        console.log('data: ', data);
        var view = this.getView();
        view.fireEvent('myEvent', view, data);

    },

    onSave: function() {
        this.getView().reset();
    }
    
});