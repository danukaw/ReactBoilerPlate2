var React = require('react');
var ReactDOM = require('react-dom');

// Greeter React component -- container component

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var CountDown = require('CountDown');
var Timer = require('Timer');


// load foundations-sites
$(document).foundation();


require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
      <route path="/" component={Main}>
          <route path="countdown" component={CountDown}/>
          <IndexRoute component={Timer}/>
      </route>
  </Router>,
  document.getElementById('app')
);
