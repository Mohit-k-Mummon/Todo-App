import React from 'react';

// Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCompleted, sortTasks } from '../features/tasks-slice';

// Constant with our possible actions
const SORT__ACTIONS = { ALL: 'All', ACTIVE: 'Active', COMPLETED: 'Completed' };

const TaskActions = () => {
	// Current task state
	const tasks = useSelector(state => state.tasks);

	const dispatch = useDispatch();

	// This is what we display for how many items are remaining
	const remainingTasks = tasks.tasksQuantity - tasks.countComplete;

	// Determines which tense of item to use
	let itemsString;
	if (remainingTasks === 0 || remainingTasks > 1) {
		itemsString = 'items';
	} else {
		itemsString = 'item';
	}

	// Clear completed Tasks Handler
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
