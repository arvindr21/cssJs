// to depend on a bower installed component:
// define(['bower_components/componentName/file'])
define([
  'jquery',
  'intro',
  'core',
  'utils'
], function ($, cj) {
  // iterate through each function and run it
  for (var i = 0; i < cj.fxns.length; ++i) {
    var _f = cj.fxns[i];
    var params = cj.utils.getParamNames(_f);
    // temp logic
    var fxn = _f.split('(')[0];
    /**** http://stackoverflow.com/a/359910/1015046 ****/
    window.cssJs.functions[fxn](params[0].replace(/"/g, ''));
  }
});