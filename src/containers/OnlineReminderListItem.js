import React from 'react';
import { connect } from 'react-redux';

function OnlineReminderListItem(props) {
    return(
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
    )
}

const getFilteredReminders = (reminderList, filter) => {
	switch(filter) {
		case 'SHOW_ALL':
			return reminderList;
		case 'SHOW_ACTIVE':
			return reminderList.flat().filter(item => !item.completed);
		case 'SHOW_COMPLETED':
			return reminderList.flat().filter(item => item.completed);
		default:
			return;
	}
}

const mapStateToProps = state => ({
 	onlineReminderList: getFilteredReminders(state.OnlineReminderReducer, state.FilterReducer)   
});

export default connect(mapStateToProps) (OnlineReminderListItem);