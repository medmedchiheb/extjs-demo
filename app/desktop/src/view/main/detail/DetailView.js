Ext.define('extjsApp.view.main.detail.DetailView', {
	extend: 'Ext.panel.Panel',
  xtype: 'detailview',
  title: 'Filter criteria',
  cls: 'detailview',
  layout: 'fit',
  items: [
    {
      xtype: 'form-panel', 
      // style: 'background:white', 
      // html: '<div style="padding:10px;font-size:24px;">Filter</div>'
    }
  ]
  // },
	// afterShow: function () {
	// 	toogleBtn();
	// }

})