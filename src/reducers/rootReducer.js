import { combineReducers } from 'redux';
import AddReminderReducer from './AddReminderReducer';
import OnlineReminderReducer from './OnlineReminderReducer';
import FilterReducer from './FilterReducer';

export default combineReducers({
	AddReminderReducer,
	OnlineReminderReducer,
	FilterReducer
});