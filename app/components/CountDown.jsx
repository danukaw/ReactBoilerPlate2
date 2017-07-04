var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');

var CountDown = React.createClass({

  render : function () {
    return (
      <div>
        <Clock totalSeconds={62} />
        <CountDownForm/>
      </div>
    );
  }
});

module.exports = CountDown;
