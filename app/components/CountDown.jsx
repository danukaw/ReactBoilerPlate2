var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');
var Controls = require('Controls');

var CountDown = React.createClass({

  getInitialState : function () {
      return (
        {
          seconds : 0,
          countdownStatus : 'stopped'
        }
      );
  },

  componentDidUpdate : function(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {

      switch(this.state.countdownStatus) {

        case 'started' :
          this.startTimer();
          break;

        case 'stopped' :
          this.setState({seconds:0});

        case 'pause':
          clearInterval(this.timer)
          this.timer = undefined;
          break;

      }
    }
  },

  startTimer : function () {

    this.timer = setInterval (() => {

      var newCount =this.state.seconds - 1;

      this.setState({
        seconds : newCount >= 0 ? newCount : 0
      });

    }, 1000);

  },

  handleSetCountDown : function (strSeconds) {

    this.setState({
      seconds : strSeconds,
      countdownStatus : 'started'
    });

  },

  handleOnStatusChange : function (newStatus) {
    console.log("new status ===>", newStatus);
    this.setState({countdownStatus : newStatus});
  },

  render : function () {

    var {seconds, countdownStatus} = this.state;

    var renderControlsArea = () => {
      if(countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleOnStatusChange}/>
      } else {
        return <CountDownForm onSetCountDown={this.handleSetCountDown}/>
      }
    };

    return (
      <div>
        <Clock totalSeconds={seconds} />
        {renderControlsArea()}
      </div>
    );
  }
});

module.exports = CountDown;
