// to depend on a bower installed component:
// define(['bower_components/componentName/file'])
define([
  'jquery',
  'intro'
], function ($, cj) {
  var functions = {};
  functions.zoomzoom = function (ele) {
    $(ele).on('mouseover', function () {
      $(this).animate({ 'font-size': 36 }, 300);
    }).on('mouseleave', function () {
      $(this).animate({ 'font-size': 18 }, 300);
    });
  };
  return cj.functions = functions;
});