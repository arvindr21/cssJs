// to depend on a bower installed component:
// define(['bower_components/componentName/file'])
define([
  'jquery',
  'intro'
], function ($, cj) {
  var utils = {};
  /**** http://stackoverflow.com/a/9924463/1015046*****/
  var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
  utils.getParamNames = function (func) {
    var fnStr = func.toString().replace(STRIP_COMMENTS, '');
    var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(/([^\s,]+)/g);
    if (result === null)
    {
      result = [];
    }
    return result;
  };
  return cj.utils = utils;
});