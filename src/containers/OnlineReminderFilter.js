import React from 'react';
import { useDispatch} from 'react-redux';
import { setFilter } from '../actions/actionCreators';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../actions/actionTypes';

function OnlineReminderFilter(props) {
	const dispatch = useDispatch();
    return (
        <div className="reminder-filter">
				<button type="button" className="btn btn-showAll"
				  onClick={() => dispatch(setFilter(SHOW_ALL))}>All</button>
				<button type="button" className="btn btn-showActive"
					onClick={() => dispatch(setFilter(SHOW_ACTIVE))}>Active</button>
				<button type="button" className="btn btn-showCompleted"
					onClick={() => dispatch(setFilter(SHOW_COMPLETED))}>Completed</button>
			</div>
    )
}

export default OnlineReminderFilter;