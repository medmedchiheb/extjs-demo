Ext.define('extjsApp.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items: [
		{
			xtype: 'personnelview'
		}
	]
});
