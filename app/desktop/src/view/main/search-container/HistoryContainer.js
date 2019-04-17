Ext.define('extjsApp.view.main.detail.HistoryContainer', {
	extend: 'Ext.panel.Panel',
  xtype: 'historycontainer',
  title: 'Search History',
  cls: 'detailview',

  items: [
    {
      xtype: 'list',


    },
    {
      xtype: 'list',
                        title: 'search History',
                        emptyText: 'No Data Loaded',
                      
                        store: {
                            fields: ['name'],
                            data: [
                                {name: 'Cowper'},
                                {name: 'Everett'},
                                {name: 'University'},
                                {name: 'Forest'}
                            ],
                            listeners: {
                                load: function() {
                                    alert("load!")
                                }
                            }
                        },

                        itemTpl: '{name}'
    }
  ]
  // },
	// afterShow: function () {
	// 	toogleBtn();
	// }

})