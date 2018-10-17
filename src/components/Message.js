import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ToggleMsg from '../actions/MessageActions';

const Message = ({ messageVisibility, ToggleMsg }) => (
  <div>
    { messageVisibility
      && <p>this is the hidden message</p>
    }
    <button type="submit" onClick={ToggleMsg}>
      Toggle hidden message
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ToggleMsg,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Message);
