import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteReminder } from '../actions/actionCreators';

function ListItemReminder(props) {
	return (
		<div>
			{/* <li key={reminder.id}>{reminder.reminderText}</li> */}
		</div>
	);
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		deleteReminder
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItemReminder);
