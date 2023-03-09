import React from 'react';

// Redux
import { useSelector } from 'react-redux';

const TaskActions = () => {
	// Current state
	const tasks = useSelector(state => state.tasks);

	return (
		<div className='todo__tasks-actions'>
			<span className='items-info'>{tasks.tasksQuantity} items left</span>
			<div className='sort'>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
			<button className='clear'>Clear Completed</button>
		</div>
	);
};

export default TaskActions;
