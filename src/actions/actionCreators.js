import { LOAD_REMINDER, ADD_REMINDER, REMOVE_REMINDER, SET_FILTER} from './actionTypes';

let todoId = 11111;

export const addReminder = reminderText => ({
	type: ADD_REMINDER,
	payload: {
		id: todoId++,
		reminderText
	}
});

export const deleteReminder = (id) => ({
	type: REMOVE_REMINDER,
	payload: {
		id
	}
});

export const showOnlineReminder = (list) => ({
	type: LOAD_REMINDER,
	payload: {
		list
	}
});

export const setFilter = (filter) => ({
	type: SET_FILTER,
	payload: {
	  filter
	}
});