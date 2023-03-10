import React from 'react';
import TaskListItem from './TaskListItem';
import TaskActions from './TaskActions';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchTaskData } from '../features/tasks-slice';
import { fetchUiData, toggleInitial } from '../features/ui-slice';

const TodoTasks = () => {
	const ui = useSelector(state => state.ui);
	const dispatch = useDispatch();

	// Check to see if initial browser visit
	if (ui.isInitial) {
		dispatch(toggleInitial());
		dispatch(fetchTaskData());
		dispatch(fetchUiData());
	}

	const tasks = useSelector(state => state.tasks);

	// Sorting logic
	let sortedTasks;
	if (tasks.sortBy === 'All') {
		sortedTasks = tasks.tasks;
	} else if (tasks.sortBy === 'Active') {
		sortedTasks = tasks.tasks.filter(task => !task.isComplete);
	} else if (tasks.sortBy === 'Completed') {
		sortedTasks = tasks.tasks.filter(task => task.isComplete);
	}

	return (
		<div className='todo__tasks'>
			<ul className='todo__tasks-list'>
				{sortedTasks.map(task => (
					<TaskListItem
						key={task.id}
						id={task.id}
						task={task.task}
						isComplete={task.isComplete}
					/>
				))}
			</ul>
			<TaskActions />
		</div>
	);
};

export default TodoTasks;
