import { combineReducers } from 'redux';
import AddReminderReducer from './AddReminderReducer';
import OnlineReminderReducer from './OnlineReminderReducer';

export default combineReducers({
	AddReminderReducer,
	OnlineReminderReducer
});