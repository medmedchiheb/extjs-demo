Ext.define('extjsApp.view.main.detail.DetailView', {
	extend: 'Ext.panel.Panel',
  xtype: 'detailview',
  title: 'Filter criteria',
  cls: 'detailview',
  layout: 'fit',
  items: [
    {
      xtype: 'form-panel', 
      listeners: {
        myEvent: 'onMyEvent',
        refreshHistory: 'onRefreshHisotry'

      }
      // style: 'background:white', 
      // html: '<div style="padding:10px;font-size:24px;">Filter</div>'
    }
  ],
  listeners: {
    selectItemeV: function(view, item) {
      console.log(' selct itel ev', this);
      var form = this.items.items[0];
      console.log('item 0', form);
      form.fireEvent('selectItemEvF',form, item);
    }
  }
  // },
	// afterShow: function () {
	// 	toogleBtn();
	// }

})