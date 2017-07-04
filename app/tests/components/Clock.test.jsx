var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe ('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });
})

describe('render', () =>{
  it('should rendered to output', () => {
    var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
    var $el = $(ReactDOM.findDOMNode(clock));
    var actual = $el.find('.clock-text').text();

    expect(actual).toBe('01:02');
  });
});

describe ('numDigits', () => {
  it('should return number of digits', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    var number = 1.0987;
    var expected = 1;
    var actual = clock.numDigits(number);

    expect(expected).toBe(actual);

  });

})

describe ('formatSeconds', () => {
  it('should format seconds', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    var seconds = 615
    var expected = '10:15';
    var actual = clock.formatSeconds(seconds);

    expect(expected).toBe(actual);


  });

  it('should format seconds when minutes and seconds are less than 10', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    var seconds = 61
    var expected = '01:01';
    var actual = clock.formatSeconds(seconds);

    expect(expected).toBe(actual);


  });
})
