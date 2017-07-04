var React = require('react');

var Clock = React.createClass({

  getDefaultProps : function () {
    totalSeconds : 0;
  },

  getPropType : function () {
    totalSeconds : React.PropTypes.number;
  },

  numDigits : function(x) {
    return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
  },

  formatSeconds : function (totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds/60 );

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" +seconds ;
  },
  render : function () {

    var {totalSeconds} = this.props;

    console.log("colck component ==>", totalSeconds);

    return (
      <div className="clock">
        <span className="clock-text">
            {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
