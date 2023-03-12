import React from 'react';
import TaskActions from './TaskActions';
import checkIcon from '../../assets/icon-check.svg';
import crossIcon from '../../assets/icon-cross.svg';

// Framer Motion
import { Reorder } from 'framer-motion';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchTaskData, removeTask, reorderState, toggleComplete } from '../features/tasks-slice';
import { fetchUiData, toggleInitial } from '../features/ui-slice';

const TodoTasks = () => {
	// Grab our ui state
	const ui = useSelector(state => state.ui);

	// Dispatch hook
	const dispatch = useDispatch();

	// Check to see if initial browser visit
	if (ui.isInitial) {
		dispatch(toggleInitial());
		dispatch(fetchTaskData());
		dispatch(fetchUiData());
	}

	// Grab our tasks state
	const tasks = useSelector(state => state.tasks);

	// Sort our task to be displayed in our component
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
			{/* Framer motion component that renders a <ul> but can be changed with the as prop
				Reorder group must be passed the array of values in your reorderable list via the 'values' prop
				A onReorder event will fire with the latest calculated order, which provides us with our new reordered array which is passed to us automatically*/}
			<Reorder.Group
				values={sortedTasks}
				onReorder={sorted => dispatch(reorderState(sorted))}
				className='todo__tasks-list'
			>
				{sortedTasks.map(task => (
					// To render each reorderable item, we use Reorder.Item, passing it the value it represents via the 'value' prop
					<Reorder.Item
						className={`todo__tasks-list-item ${task.isComplete ? 'completed' : ''}`}
						key={task.id}
						value={task}
					>
						<div className='inner-container'>
							<div
								onClick={() => dispatch(toggleComplete(task.id))}
								className={`circle ${task.isComplete ? 'iscompleted' : ''}`}
							>
								<img src={checkIcon} alt='check-icon' />
							</div>
							<span>{task.task}</span>
						</div>
						<img
							onClick={() => dispatch(removeTask(task.id))}
							className='delete-icon'
							src={crossIcon}
							alt='delete task button'
						></img>
					</Reorder.Item>
				))}
				{/* {sortedTasks.map(task => (
					<TaskListItem
						key={task.id}
						id={task.id}
						task={task.task}
						isComplete={task.isComplete}
					/>
				))} */}
			</Reorder.Group>
			<TaskActions />
		</div>
	);
};

export default TodoTasks;
