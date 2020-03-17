import React from 'react';
import { connect } from 'react-redux';
import { deleteReminder } from '../actions/actionCreators';
import { bindActionCreators } from 'redux';

function LocalReminders(props) {
	const { reminderList } = props;
	return (
		reminderList.length !== 0 ?
			<div className="reminder-container">
				<ul className="reminder-list">
					{reminderList.map(reminder => (
						<li key={reminder.id}>
							<p className="listItem">{reminder.reminderText}</p>
							<div className="actions">
								<button type="button" className="btn btn-delete"
									onClick={() => props.deleteReminder(reminder.id)}>Delete</button>
							</div>
						</li>
					)
					)}
				</ul>
			</div> : <div className="empty-data" role="alert">You will see your set reminders here.. Try add a reminder above !!!</div>
	)
}

const mapStateToProps = state => ({
	reminderList: state.AddReminderReducer
})

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		deleteReminder
	}, dispatch);
}
// const mapStateToProps = state => ({
//     todos: state.todos
// })

// const mapStateToProps = state => { 
//     return { todos: state.todos }; 
// };

export default connect(mapStateToProps, mapDispatchToProps)(LocalReminders);