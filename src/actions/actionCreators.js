import { LOAD_REMINDER, ADD_REMINDER, REMOVE_REMINDER, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, SET_FILTER} from './actionTypes';

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

export const showCompletedOnlineReminder = () => ({
	type: SHOW_COMPLETED,
})

export const showActiveOnlineReminder = () => ({
	type: SHOW_ACTIVE,
})

export const showAllOnlineReminder = () => ({
	type: SHOW_ALL,
})