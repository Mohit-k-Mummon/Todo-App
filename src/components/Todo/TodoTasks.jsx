import React from 'react';
import TaskListItem from './TaskListItem';
import TaskActions from './TaskActions';

const DUMMY_TASKS = [
	{ id: 't1', task: 'Complete online JavaScript course' },
	{ id: 't2', task: 'Jog around the park 3x' },
	{ id: 't3', task: '10 minutes meditation' },
	{ id: 't4', task: 'Read for 1 hour' },
	{ id: 't5', task: 'Pick up groceries' },
	{ id: 't6', task: 'Complete Todo App on Frontend Mentor' },
];

const TodoTasks = () => {
	return (
		<div className='todo__tasks'>
			<ul className='todo__tasks-list'>
				{DUMMY_TASKS.map(task => (
					<TaskListItem key={task.id} id={task.id} task={task.task} />
				))}
			</ul>
			<TaskActions />
		</div>
	);
};

export default TodoTasks;
