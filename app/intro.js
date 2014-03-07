define(['jquery'], function () {
  // global namespace
  var cssJs = window.cssJs = window.cssJs || Object.create(null);
  // simple alias name
  var cj = cssJs;
  // get all cssJs function defs
  cj.tpls = document.getElementsByTagName('style');

  // or

 
  // cache them in an array
  cj.fxns = [];
  // get all the functions defined in an array
  for (var i = 0; i < cj.tpls.length; ++i) {
    cj.fxns[i] = cj.tpls[i].innerHTML.trim();
  }
  return cj;
});