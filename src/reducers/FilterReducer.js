import { SHOW_ALL, SET_FILTER } from '../actions/actionTypes';

const filterType = (state = SHOW_ALL, action) => {
    switch (action.type){
      case SET_FILTER:
				return action.payload.filter;
			 default:
				 return state;
    }
}

export default filterType;;