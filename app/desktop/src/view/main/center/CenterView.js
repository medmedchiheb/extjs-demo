Ext.define('extjsApp.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items: [
		{
			xtype: 'personnelview',
			reference: 'personnelview',
			masked: {
				xtype: 'loadmask',
				message: 'loading...'
			}
			// listeners: {
			// 	myEvent: 'onMyEvent'
			// }
		}
	]
});
