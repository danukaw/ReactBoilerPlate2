var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');

var CountDown = React.createClass({

  getInitialState : function () {
      return (
        {
          seconds : 0
        }
      );
  },

  handleSetCountDown : function (strSeconds) {
    console.log("seconds ===>" ,strSeconds);
    this.setState({
      seconds : strSeconds
    });
  },
  render : function () {

    var {seconds} = this.state;

    console.log("countDown componet ==> ", seconds);

    return (
      <div>
        <Clock totalSeconds={seconds} />
        <CountDownForm onSetCountDown={this.handleSetCountDown}/>
      </div>
    );
  }
});

module.exports = CountDown;
