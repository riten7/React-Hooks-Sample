import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../actions/actionTypes';

const OnlineReminderReducer = (state = [], action) => {
	switch (action.type) {
		case SHOW_ALL:
			return [...state, action.payload.list];

		case SHOW_ACTIVE:
			return [...state, state[0].filter(item => !item.completed)];

		case SHOW_COMPLETED:
			return [...state, state[0].filter(item => item.completed)];

		default:
			return state;
	}
}

export default OnlineReminderReducer;