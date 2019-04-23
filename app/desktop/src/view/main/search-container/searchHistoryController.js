Ext.define('extjsApp.view.main.detail.HistoryContoller', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.historycontroller',

    onRefreshHistory: function() {
        var view = this.lookupReference('historylist');
        console.log('list, ', view);
        view.store.load();
      //  this.fireEvent('refreshHistorylist',this);
       
    },
    onSelect(view, item) {
	
        var view = this.getView();
        console.log('onselecte, ', item);
        //view.onSelect(view, item);
        
		view.fireEvent('selectItem',view, item.data);
	},
});
