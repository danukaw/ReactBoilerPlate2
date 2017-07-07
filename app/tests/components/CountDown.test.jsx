var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require('CountDown');

describe('CountDown', () => {

  it('should exist', () => {
    expect(CountDown).toExist();
  });

});

describe('handleSetCountDown', () => {
  it('should update seconds and countdownstatus when valid input is provided', () => {
    var countdown = TestUtils.renderIntoDocument(<CountDown/>)
    countdown.handleSetCountDown(10);

    setInterval(()=>{
      expect(countdown.state.seconds).toBe(9)
    }, 1001);

  });

  it('should update seconds and countdownstatus when valid input is provided and seconds should not less than 0', () => {
    var countdown = TestUtils.renderIntoDocument(<CountDown/>)
    countdown.handleSetCountDown(1);

    setInterval(()=>{
      expect(countdown.state.seconds).toBe(0)
    }, 2001);

  });
});
