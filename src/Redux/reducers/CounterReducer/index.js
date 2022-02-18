import {COUNTER_INCREMENT, COUNTER_DECREMENT} from '../../actions';
import {COUNTER_STATE} from '../../states/index';

const counter = (state = COUNTER_STATE, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {...state, count: state.count + 1};

    case COUNTER_DECREMENT:
      return {...state, count: state.count - 1};

    default:
      return state;
  }
};

export default counter;
