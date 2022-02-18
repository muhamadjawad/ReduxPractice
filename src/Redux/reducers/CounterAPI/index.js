import {COUNTER_API} from '../../actions';
import {COUNTER_API_STATE} from '../../states/index';

const api = (state = COUNTER_API_STATE, action) => {
  switch (action.type) {
    case COUNTER_API:
      return {...state, payload: state.payload};

    default:
      return state;
  }
};

export default api;
