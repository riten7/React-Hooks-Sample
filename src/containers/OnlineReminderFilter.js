import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFilter } from '../actions/actionCreators';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../actions/actionTypes';

function OnlineReminderFilter(props) {
    return (
        <div className="reminder-filter">
				<button type="button" className="btn btn-showAll"
				  onClick={() => props.setFilter(SHOW_ALL)}>All</button>
				<button type="button" className="btn btn-showActive"
					onClick={() => props.setFilter(SHOW_ACTIVE)}>Active</button>
				<button type="button" className="btn btn-showCompleted"
					onClick={() => props.setFilter(SHOW_COMPLETED)}>Completed</button>
			</div>
    )
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		setFilter
	}, dispatch);
};

export default connect(null, mapDispatchToProps) (OnlineReminderFilter);