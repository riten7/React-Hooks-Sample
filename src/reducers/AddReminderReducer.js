import { ADD_REMINDER, REMOVE_REMINDER } from '../actions/actionTypes';

const INITIAL_REMINDER = [];

const AddReminderReducer = (state = INITIAL_REMINDER, action) => {
	switch (action.type) {
		case ADD_REMINDER:
			return [...state, {
				id: action.payload.id,
				reminderText: action.payload.reminderText,
				completed: false,
			}];

		case REMOVE_REMINDER:
			const index = parseInt(action.payload.id);
			return state.filter(reminder => reminder.id !== index);

		default:
			return state;
	}
}

export default AddReminderReducer;