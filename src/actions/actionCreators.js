import { ADD_REMINDER, REMOVE_REMINDER, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from './actionTypes';

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
	type: SHOW_ALL,
	payload: {
		list
	}
})

export const showCompletedOnlineReminder = () => ({
	type: SHOW_COMPLETED,
})

export const showActiveOnlineReminder = () => ({
	type: SHOW_ACTIVE,
})