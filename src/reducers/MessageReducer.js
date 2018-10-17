import { TOGGLE_MESSAGE } from '../actions/MessageActions';

const initialState = {
  messageVisibility: false,
};

export default function (state = initialState, { type }) {
  switch (type) {
    case TOGGLE_MESSAGE:
      return {
        ...state,
        messageVisibility: !state.messageVisibility,
      };
    default:
      return state;
  }
}
