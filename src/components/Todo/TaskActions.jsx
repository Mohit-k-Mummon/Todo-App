import React from 'react';

const TaskActions = () => {
	return (
		<div className='todo__tasks-actions'>
			<span className='items-info'>{5} items left</span>
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
