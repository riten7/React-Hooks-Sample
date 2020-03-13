import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions/actionCreators';
import { bindActionCreators } from 'redux';


function AddReminder(props) {
	const [remindertext, setReminderText] = useState('');

	return (
		<div className="form-panel">
			<div className="form-panel__input">
				<input onChange={e => setReminderText(e.target.value)} value={remindertext} type="text" className="form-panel__input-text" id="reminder" placeholder="Add Reminder" />
				<button type="button" onClick={() => setReminderText('')} className="form-panel__input-cross">Cancel</button>
			</div>
			<button type="button" onClick={() => remindertext ? (props.addReminder(remindertext), setReminderText('') ) : null } className="form-panel__input-add">Add Reminder</button>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addReminder
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(AddReminder);
