Ext.define('extjsApp.view.main.MainViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainviewcontroller',



	routes: { 
		':xtype': {action: 'mainRoute'}
	},

	mainRoute:function(xtype) {
		//var menuview = this.lookup('menuview');
		// var navview = this.lookup('historycontainer');
		// var menuview = navview.items.items[0]

		// var centerview = this.lookup('centerview');
		// var exists = Ext.ClassManager.getByAlias('widget.' + xtype);
		// if (exists === undefined) {
		// 	console.log(xtype + ' does not exist');
		// 	return;
		// }
		// var node = menuview.getStore().findNode('xtype', xtype);
		// if (node == null) {
		// 	console.log('unmatchedRoute: ' + xtype);
		// 	return;
		// }
		// if (!centerview.getComponent(xtype)) {
		// 	centerview.add({ xtype: xtype,  itemId: xtype, heading: node.get('text') });
		// }
		// centerview.setActiveItem(xtype);
		// menuview.setSelection(node);
		// var vm = this.getViewModel(); 
		// vm.set('heading', node.get('text'));
	},

	onMenuViewSelectionChange: function (tree, node) {
		if (node == null) { return }
		var vm = this.getViewModel();
		if (node.get('xtype') != undefined) {
			this.redirectTo( node.get('xtype') );
		}
	},

	onTopViewNavToggle: function () {
		var vm = this.getViewModel();
		vm.set('navCollapsed', !vm.get('navCollapsed'));
	},

	onHeaderViewDetailToggle: function (button) {
		var vm = this.getViewModel();
		vm.set('detailCollapsed', !vm.get('detailCollapsed'));
		if(vm.get('detailCollapsed')===true) {
			button.setIconCls('x-fa fa-arrow-left');
		}
		else {
			button.setIconCls('x-fa fa-arrow-right');
		}
	},

	onBottomViewlogout: function () {
		localStorage.setItem("LoggedIn", false);
		this.getView().destroy();
		Ext.Viewport.add([{ xtype: 'loginview'}]);
	},

	toogleBtn: function () {
		console.log('toogle btn');
		var button = this.lookupReference('detailtoggle');
		this.onHeaderViewDetailToggle(button);

	},

	onDisclosureTap: function () {
		console.log('onDisclosureTap ');
		
		
	},
	onMyEvent(view, data) {
		console.log('mainview myevent, ', data);
		var view = this.lookup('personnelview');
		view.fireEvent('myEvent',view, data);
	},

	onSelect(view, item) {
		console.log(' onSelect item, ', item);
		var view = this.lookup('personnelview');
		view.fireEvent('selectHistoryEvent',view, item);
		var detail  = this.lookup('detailview');
		detail.fireEvent('selectItemeV',view, item);
	},
	onRefreshHisotry(view) {
		console.log('refresh ');
		var view = this.lookup('historycontainer');
		view.fireEvent('refreshHistory',view);
	}
	


//	onActionsViewLogoutTap: function( ) {
//		var vm = this.getViewModel();
//		vm.set('firstname', '');
//		vm.set('lastname', '');
//
//		Session.logout(this.getView());
//		this.redirectTo(AppCamp.getApplication().getDefaultToken().toString(), true);
//	}

});
