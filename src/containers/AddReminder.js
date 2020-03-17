import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addReminder } from '../actions/actionCreators';

function AddReminder() {
	const [remindertext, setReminderText] = useState('');
	const dispatch = useDispatch();

	const saveReminder = useCallback(() => {
		if (remindertext) {
			dispatch(addReminder(remindertext))
			setReminderText('')
		}
	}, [dispatch, remindertext])

	const onReminderChange = useCallback(e => setReminderText(e.target.value), []);

	return (
		<div className="form-panel">
			<div className="form-panel__input">
				<input onChange={onReminderChange} value={remindertext} type="text" className="form-panel__input-text" id="reminder" placeholder="Add Reminder" />
				<button type="button" onClick={() => setReminderText('')} className="form-panel__input-cross">Cancel</button>
			</div>
			<button type="button" onClick={saveReminder} className="form-panel__input-add">Add Reminder</button>
		</div>
	)
}

export default AddReminder;