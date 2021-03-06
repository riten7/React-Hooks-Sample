import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showOnlineReminder } from '../actions/actionCreators';
import OnlineReminderFilter from './OnlineReminderFilter';
import OnlineReminderListItem from './OnlineReminderListItem';
import { getUniqueList } from '../util/filterList';

function OnlineReminders() {
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useDispatch();

	const fetchData = useCallback(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then(res => res.json())
			.then(response => {
				dispatch(showOnlineReminder(getUniqueList(response, 'userId')));
				setIsLoading(false);
			})
			.catch(() => setError(true))
	}, [dispatch]);

	useEffect(() => {

		setIsLoading(true)
		fetchData();

	}, [fetchData]);

	return (
		<div className="reminder-container">
			{/* <a href="/#" onClick={() => setIsShown(true)}>Click here</a> */}
			{isLoading && !error && <p>Wait!!! Loading reminders for you ...</p>}
			{!isLoading && error && <p>Error occured</p>}
			{!isLoading && !error &&
				<>
					<h4>Here is the list of available random reminders below:</h4>
					<OnlineReminderFilter />
					<OnlineReminderListItem />
				</>
			}
		</div>
	);
}

export default OnlineReminders;