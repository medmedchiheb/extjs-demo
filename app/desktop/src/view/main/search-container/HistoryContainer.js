Ext.define('extjsApp.view.main.detail.HistoryContainer', {
	extend: 'Ext.panel.Panel',
  xtype: 'historycontainer',
  title: 'Search History',
  cls: 'detailview',


  items: [
  
    {
      xtype: 'list',
                        title: 'search History',
                        emptyText: 'No Data Loaded',
                      
                        store: {
                            fields: [ "id", "alias", "serviceId", "baseUrl","user", "name", "criterias"],
                            proxy: {
                              type: 'ajax',
                              url: 'http://localhost:8080/search/MBJ',
                              reader: {
                                type: 'json',
                                rootProperty: ''
                              }
                            },
                            autoLoad : true,
                            // data: [
                            //     {name: 'Cowper'},
                            //     {name: 'Everett'},
                            //     {name: 'University'},
                            //     {name: 'Forest'}
                            // ],
                            listeners: {
                                load: function() {
                                   var store = this;
                                  Ext.Ajax.request({
                                                  url: "http://localhost:8080/search/history/MBJ",
                                                  success: function(resp) {
                                                      console.log('resp: ', resp);
                                                      var result = Ext.decode(resp.responseText);
                                                      store.loadData(result);
                                                    
                                                  },
                                                });
                                }
                            }
                        },
                       
                      listeners: {
                        select: 'onSelect'
                      },
                      itemTpl: '{name}'
                       
    }
  ]
  
  // },
	// afterShow: function () {
	// 	toogleBtn();
	// }

})