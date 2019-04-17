Ext.define('extjsApp.view.nav.search-list.SearchList', {
    extend: 'Ext.list.Tree',
    xtype: 'search-list',
    ui: 'nav',
    scrollable: true,
    requires: [
		'Ext.data.TreeStore',
	],
    bind: { 
		store: '{list}'
	//	micro: '{navCollapsed}' 
	},
    grouped: false,

    onItemDisclosure: 'onDisclosureTap'
});