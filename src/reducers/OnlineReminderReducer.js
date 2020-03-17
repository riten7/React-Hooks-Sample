import { LOAD_REMINDER } from '../actions/actionTypes';

const initialData = [];

const OnlineReminderReducer = (state = initialData, action) => {
	switch (action.type) {
		case LOAD_REMINDER:
			return [...state, action.payload.list].flat();

		default:
			return state;
	}
}

export default OnlineReminderReducer;