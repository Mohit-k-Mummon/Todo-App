import React from 'react';

// Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCompleted, sortTasks } from '../features/tasks-slice';

const SORT__ACTIONS = { ALL: 'All', ACTIVE: 'Active', COMPLETED: 'Completed' };

const TaskActions = () => {
	// Current state
	const tasks = useSelector(state => state.tasks);

	const remainingTasks = tasks.tasksQuantity - tasks.countComplete;

	let itemsString;
	if (remainingTasks === 0 || remainingTasks > 1) {
		itemsString = 'items';
	} else {
		itemsString = 'item';
	}

	const dispatch = useDispatch();
	const clearTasksHandler = () => {
		dispatch(clearCompleted());
	};

	// Sort Functions
	const sortByAllHandler = () => {
		dispatch(sortTasks(SORT__ACTIONS.ALL));
	};
	const sortByActiveHandler = () => {
		dispatch(sortTasks(SORT__ACTIONS.ACTIVE));
	};
	const sortByCompletedHandler = () => {
		dispatch(sortTasks(SORT__ACTIONS.COMPLETED));
	};

	return (
		<div className='todo__tasks-actions'>
			<span className='items-info'>
				{remainingTasks} {itemsString} left
			</span>
			<div className='sort'>
				<button
					className={`sort-button ${tasks.sortBy === SORT__ACTIONS.ALL ? 'active' : ''}`}
					onClick={sortByAllHandler}
				>
					All
				</button>
				<button
					className={`sort-button ${
						tasks.sortBy === SORT__ACTIONS.ACTIVE ? 'active' : ''
					}`}
					onClick={sortByActiveHandler}
				>
					Active
				</button>
				<button
					className={`sort-button ${
						tasks.sortBy === SORT__ACTIONS.COMPLETED ? 'active' : ''
					}`}
					onClick={sortByCompletedHandler}
				>
					Completed
				</button>
			</div>
			<button onClick={clearTasksHandler} className='clear'>
				Clear Completed
			</button>
		</div>
	);
};

export default TaskActions;
