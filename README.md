# AngularJS Template loader for [webpack](http://webpack.github.io/)

Includes your AngularJS templates into your webpack Javascript Bundle. Pre-loads the AngularJS template cache
to remove initial load times of templates.

ngTemplate loader does not minify or process your HTML at all, and instead uses the standard loaders such as html-loader
or raw-loader. This gives you the flexibility to pick and choose your HTML loaders.

## Install

`npm install ngtemplate-loader --save-dev`

## Usage

```
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'ngtemplate-loader',
        options: {
          globalAngular: false
        }
      }
    ]
  }
  entry: { /* ... */ }
  output: { /* ..  */ }
}
```

Once you've configured webpack, simply require your template file:

``` javascript
var templateUrl = require('../templates/test.html');

app.directive('testDirective', function() {
    return {
        restrict: 'E',
        templateUrl: templateUrl
    }
});
```

## Beware of requiring from the directive definition

The following code is wrong, Because it'll operate only after angular bootstraps:
```
app.directive('testDirective', function() {
    return {
        restrict: 'E',
        templateUrl: require('../templates/test.html') // <- WRONG !
    }
});
```

### Module

By default ngTemplate loader adds a run method to the global 'ng' module which does not need to explicitly required by your app.
You can override this by setting the `module` parameter, e.g.

``` javascript
require('../templates/file.html');

// angular.module('myTemplates').run(['$templateCache', function(c) { c.put('../templates/file.html', '<file.html processed by loader>') }]);
```

### Using with Global Angular

This module relies on angular being used via npm and `require('angular')`, to use global angular, set the `globalAngular` to `true` in the loader options:

```javascript
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'ngtemplate-loader',
        options: {
          globalAngular: false
        }
      }
    ]
  }
```


## License

MIT (http://www.opensource.org/licenses/mit-license.php)
