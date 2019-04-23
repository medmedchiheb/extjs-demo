# custom event example

```
Ext.define('ChildController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.child',

    onFooClick: function() {
        console.log('in child, fwd event');
        var view = this.getView();
        view.fireEvent('someSyntheticEvent', view);
    }
});

Ext.define('ParentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.parent',

    goDoIt: function() {
        console.log('parent');
    }
});

Ext.define('ChildView', {
    extend: 'Ext.container.Container',
    alias: 'widget.child',
    controller: 'child',

    items: {
        xtype: 'button',
        text: 'Click Me',
        handler: 'onFooClick'
    }
});

Ext.define('MainView', {
    extend: 'Ext.panel.Panel',
    controller: 'parent',

    title: 'A Panel',
    items: {
        xtype: 'child',
        listeners: {
            someSyntheticEvent: 'goDoIt'
        }
    }
});

Ext.onReady(function() {

    new MainView({
        renderTo: document.body
    });

});
```

