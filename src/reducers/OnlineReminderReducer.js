import { LOAD_REMINDER, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../actions/actionTypes';

const initialData = [];

const OnlineReminderReducer = (state = initialData, action) => {
	switch (action.type) {
		case LOAD_REMINDER:
			return [...state, action.payload.list].flat();

		case SHOW_ALL:
			return state.flat();

		case SHOW_ACTIVE:
			let reminderList = [...state];
			console.log('1',reminderList)
			return reminderList.flat().filter(item => !item.completed);

		case SHOW_COMPLETED:
			let reminderList2 = [...state];
			console.log('2', ...state)
			return reminderList2.flat().filter(item => item.completed);

		default:
			return state;
	}
}

export default OnlineReminderReducer;