import React from 'react';
import TaskListItem from './TaskListItem';
import TaskActions from './TaskActions';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchTaskData } from '../features/tasks-slice';

const TodoTasks = () => {
	const ui = useSelector(state => state.ui);
	const dispatch = useDispatch();
	if (ui.isInitial) {
		dispatch(fetchTaskData());
	}
	const tasks = useSelector(state => state.tasks);

	return (
		<div className='todo__tasks'>
			<ul className='todo__tasks-list'>
				{tasks.tasks.map(task => (
					<TaskListItem key={task.id} id={task.id} task={task.task} />
				))}
			</ul>
			<TaskActions />
		</div>
	);
};

export default TodoTasks;
