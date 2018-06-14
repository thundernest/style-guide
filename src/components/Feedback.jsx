 'use strict';

const React = require('react');
const { sendEvent } = require('./utilities.js');
const { connect } = require('react-redux');
const { changeFeedbackMessage } = require('./actions.js');

const Feedback = connect(state => {
  var {feedback_ask} = state.data;
  return {feedback_ask};
})(React.createClass({
  displayName: 'Feedback',
  propTypes: {
    dispatch: React.PropTypes.func,
    feedback_ask: React.PropTypes.bool
  },

  handleClick: function (e) {
    sendEvent('feedback-click', e.target.id, window.location.pathname);
    if (e.target.id === 'thumbs-down') {
      window.open('https://github.com/FirefoxUX/photon/issues','_blank');
    }
    changeFeedbackMessage(this.props.dispatch, false)
  },

  handleXClick: function () {
    changeFeedbackMessage(this.props.dispatch, true)
  },

  render: function() {
    return(
      <div className="center mw7 ph3 mb5" >
      </div>)
  }
}));

module.exports = Feedback;
