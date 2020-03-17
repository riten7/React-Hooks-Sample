import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showOnlineReminder } from '../actions/actionCreators';
import OnlineReminderFilter from './OnlineReminderFilter';
import OnlineReminderListItem from './OnlineReminderListItem';
import getUniqueList from '../util/filterList';

function OnlineReminders(props) {
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isShown, setIsShown] = useState(false);

	async function fetchData() {
		await fetch("https://jsonplaceholder.typicode.com/todos")
			.then(res => res.json())
			.then(response => {
				props.showOnlineReminder(getUniqueList(response, 'userId'));
				setIsLoading(false);
			})
			.catch(setError(error));
	}

	useEffect(() => {
		if (isShown){
			setIsLoading(true)
		  fetchData();
		}
	}, [isShown]);

	return (
		<div className="reminder-container">
			<a href="/#" onClick={() => setIsShown(true)}>Click here</a>
			{isShown && <h4>Here are the list of available random reminders below:</h4>}
			{isLoading && <p>Wait!!! Loading reminders for you ...</p>}
			<OnlineReminderFilter />
			<OnlineReminderListItem />
		</div>
	);
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		showOnlineReminder
	}, dispatch);
};

export default connect(null, mapDispatchToProps) (OnlineReminders);