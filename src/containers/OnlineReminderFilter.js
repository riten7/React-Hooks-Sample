import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../actions/actionCreators';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions/actionTypes';

function OnlineReminderFilter() {
	const dispatch = useDispatch();
	const filterReminders = useCallback((filterBy) => {
		dispatch(setFilter(filterBy))
	}, [dispatch]);

	return (
		<div className="reminder-filter">
			<button type="button" className="btn btn-showAll"
				onClick={() => filterReminders(SHOW_ALL)}>All</button>
			<button type="button" className="btn btn-showActive"
				onClick={() => filterReminders(SHOW_ACTIVE)}>Active</button>
			<button type="button" className="btn btn-showCompleted"
				onClick={() => filterReminders(SHOW_COMPLETED)}>Completed</button>
		</div>
	)
}

export default OnlineReminderFilter;