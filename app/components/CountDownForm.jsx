var React = require('react');

var CountDownForm = React.createClass({

  onSubmit : function(e) {
    e.preventDefault();
    var seconds = this.refs.seconds.value;
    console.log(seconds);
    if(seconds.match(/^[0-9]*$/)) {
      this.props.onSetCountDown(parseInt(seconds, 10));
    }

  },
  render : function () {
    return (
      <div>
          <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
            <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
            <button className="button expanded">Start</button>
          </form>
      </div>
    );
  }

});

module.exports = CountDownForm;
