var React = require('react');
//import clock component;
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({

  getInitialState : function () {
    return ({
      count : 0,
      countTimerStatus : 'stopped'
    }) ;
  },

  startTimer : function () {

    this.timer = setInterval(()=>{

      this.setState({
        count :  this.state.count + 1
      });
    }, 1000);
  },

  componentDidUpdate : function (prevProps, prevState) {

    if(prevState.countTimerStatus !== this.state.countTimerStatus) {
      switch (this.state.countTimerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped' :
            this.setState({count:0});

        case 'pause':
            clearInterval(this.timer)
            this.timer = undefined;
            break;
        default:
      }
    }

  },

  componentWillUnmount : function () {
    console.log("componentwillunmount in Timer component");
    clearInterval(this.timer)
    this.timer = undefined;
  },

  handleStatusChange : function (newStatus) {
    this.setState({
      countTimerStatus :  newStatus
    });
  },

  render : function () {

    var{count, countTimerStatus} = this.state;

    return (
      //render clock component
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={countTimerStatus}  onStatusChange={this.handleStatusChange}/>

      </div>
    );
  }

});

module.exports = Timer;
