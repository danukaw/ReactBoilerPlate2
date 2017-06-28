var React = require('react');
var ReactDOM = require('react-dom');

// Greeter React component -- container component

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// load foundations-sites
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();


require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
      <route path="/" component={Main}>
      </route>
  </Router>,
  document.getElementById('app')
);
