require.config({
  paths: {
    'components': '../bower_components',
    'jquery': '../bower_components/jquery/dist/jquery',
    'cssJs': 'main',
    'utils': 'utils',
    'intro': 'intro',
    'core': 'core'
  }
});
if (!window.requireTestMode) {
  require(['main'], function () {
  });
}