import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAllOnlineReminder, showOnlineReminder, showActiveOnlineReminder, showCompletedOnlineReminder, setFilter } from '../actions/actionCreators';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../actions/actionTypes';


function OnlineReminders(props) {
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isShown, setIsShown] = useState(false);

	async function fetchData() {
		await fetch("https://jsonplaceholder.typicode.com/todos")
			.then(res => res.json())
			.then(response => {
				props.showOnlineReminder(getUnique(response, 'userId'));
				setIsLoading(false);
			})
			.catch(setError(error));
	}

	function getUnique(arr, comp) {
		const unique = arr
			.map(e => e[comp])
			.map((e, i, final) => final.indexOf(e) === i && i)
			.filter(e => arr[e]).map(e => arr[e]);
		return unique;
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
			<div className="reminder-filter">
				{/* props.showAllOnlineReminder() */}
				<button type="button" className="btn btn-showAll"
				  onClick={() => props.setFilter(SHOW_ALL)}>All</button>
				{/* props.showActiveOnlineReminder() */}
				<button type="button" className="btn btn-showActive"
					onClick={() => props.setFilter(SHOW_ACTIVE)}>Active</button>
				{/* props.showCompletedOnlineReminder() */}
				<button type="button" className="btn btn-showCompleted"
					onClick={() => props.setFilter(SHOW_COMPLETED)}>Completed</button>
			</div>
			<ul className="reminder-list">
				{props.onlineReminderList.length > 0 && props.onlineReminderList.map(listItem => (
					<li key={listItem.userId}>
						<p className="listItem">{listItem.title}</p>
						<div className="actions">
							<button type="button" className={listItem.completed ? 'btn btn-complete' : 'btn btn-inprogress'} >{listItem.completed ? 'COMPLETED' : 'INPROGRESS'}</button>
						</div>
					</li>
				)
				)}
			</ul>
		</div>
	);
}

const getFilteredReminders = (reminderList, filter) => {
	switch(filter) {
		case SHOW_ALL:
			return reminderList;
		case SHOW_ACTIVE:
			return reminderList.flat().filter(item => !item.completed);
		case SHOW_COMPLETED:
			return reminderList.flat().filter(item => item.completed);
		default:
			return;
	}
}

const mapStateToProps = state => ({
	onlineReminderList: getFilteredReminders(state.OnlineReminderReducer, state.FilterReducer)
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		showAllOnlineReminder,
		showOnlineReminder,
		showActiveOnlineReminder,
		showCompletedOnlineReminder,
		setFilter
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps) (OnlineReminders);