Ext.define('extjsApp.view.nav.menu.MenuView', {
	extend: 'Ext.list.Tree',
	xtype: 'menuview',
	ui: 'nav',
	requires: [
		'Ext.data.TreeStore',
	],
	scrollable: false,
	bind: { 
		store: '{menu}', 
		micro: '{navCollapsed}' 
	},
	expanderFirst: false,
	expanderOnly: false
});
