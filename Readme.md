# extjs-demo
extjs demo app
getting started https://docs.sencha.com/extjs/6.7.0-CE/guides/getting_started/open_tooling.html

examples: https://examples.sencha.com/extjs/6.7.0/examples/kitchensink/?modern#all

# genrate ExtJS project 

 ```
ext-gen app -i`
  
   `? would you like to see the defaults for package.json? Yes
   ? Would you like to create a package.json file with defaults? No
   ? What would you like to name your Ext JS app? extjsApp
   ? What type of Ext JS template do you want? make a selection from a list
   ? What Ext JS template would you like to use? moderndesktop
   ? What is the Template folder name? ~/extjs-templates/Application/moderndesktop
   ? What would you like to name the npm Package? extjs-app
   ? What version is your Ext JS application? 0.0.1
   ? What is the description? extjs-app description for Ext JS app extjsApp
   ? What is the GIT repository URL? https://github.com/medmedchiheb/extjs-demo
   ? What are the npm keywords? "Ext JS","Sencha","HTML5"
   ? What is the Author's Name? Mohamed chiheb benjemaa
   ? What type of License does this project need? none
   ? What is the URL to submit bugs? https://github.com/medmedchiheb/extjs-demo/issues
   ? What is the Home Page URL? thinktank.de
```

default startup

```
Welcome to the Ext JS 6.7 Modern Desktop Template Application! 

This template has the standard architecture for a desktop application 
- header and footer with custom buttons and text 
- left-side collapsable menu with custom area on top of menu 
- right-side (optional) detail view 
- Single Page Application (spa) routing (note # in URL) 
- Each View (menu) isolated into its own folder (under the 'view' folder) 
- These files: View, View scss file, ViewController, ViewModel (called a ViewPackage) 

Notice that the menu allows you to select from several views, 
- Home (the view you are currently on) 
- Personnel 

select the personnel menu item to see an example of a page with an Ext JS grid 

To build a new ViewPackage, type the following in a command window: 
- ext-gen viewpackage employee (shortcut: ext vp employee) 

Simple Theming: 

- go to 'app/desktop/sass/var.scss', uncomment one of the $base-color variables 
- more adventurous? go to 'app/shared/sass/var.scss' and uncomment all the lines

```
