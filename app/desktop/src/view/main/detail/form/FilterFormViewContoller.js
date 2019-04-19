Ext.define('extjsApp.view.main.detail.form.FilterFormViewContoller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formpanel',

    onDisableTap: function(btn) {
        var vm = this.getView().lookupViewModel();

      //  vm.set('disabled', !vm.get('disabled'));
    },

    onResetTap: function() {
        this.getView().reset();
    }
});