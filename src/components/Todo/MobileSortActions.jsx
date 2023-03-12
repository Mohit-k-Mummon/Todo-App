import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { sortTasks } from '../features/tasks-slice';
import { useSelector } from 'react-redux';

// Constant with our possible actions
const SORT__ACTIONS = { ALL: 'All', ACTIVE: 'Active', COMPLETED: 'Completed' };

const MobileSortActions = () => {
	// Grabbing our task state
	const task = useSelector(state => state.tasks);

	// Dispatch redux hook
	const dispatch = useDispatch();

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
		<div className='mobile-sort-actions'>
			<div className='sort'>
				<button
					className={`sort-button ${task.sortBy === SORT__ACTIONS.ALL ? 'active' : ''}`}
					onClick={sortByAllHandler}
				>
					All
				</button>
				<button
					className={`sort-button ${
						task.sortBy === SORT__ACTIONS.ACTIVE ? 'active' : ''
					}`}
					onClick={sortByActiveHandler}
				>
					Active
				</button>
				<button
					className={`sort-button ${
						task.sortBy === SORT__ACTIONS.COMPLETED ? 'active' : ''
					}`}
					onClick={sortByCompletedHandler}
				>
					Completed
				</button>
			</div>
		</div>
	);
};

export default MobileSortActions;
