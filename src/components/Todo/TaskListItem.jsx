import React from 'react';
import crossIcon from '../../assets/icon-cross.svg';
import checkIcon from '../../assets/icon-check.svg';

// Redux
import {
	removeTask,
	toggleComplete,
	dragTask,
	draggedOverItem,
	dropDraggedItem,
} from '../features/tasks-slice';
import { useDispatch } from 'react-redux';

const TaskListItem = props => {
	const dispatch = useDispatch();

	// Remove task function
	const removeTaskHandler = () => {
		dispatch(removeTask(props.id));
	};

	const toggleCompleteHandler = () => {
		dispatch(toggleComplete(props.id));
	};

	// Task is completed state
	const isComplete = props.isComplete;

	let circle = (
		<div
			onClick={toggleCompleteHandler}
			className={`circle ${isComplete ? 'iscompleted' : ''}`}
		>
			<img src={checkIcon} alt='' />
		</div>
	);

	// Handler drag start
	const onDragStart = (event, id) => {
		dispatch(dragTask(id));
	};

	const onDragEnter = (event, id) => {
		dispatch(draggedOverItem(id));
	};

	const onDragEnd = event => {
		// Update array
		dispatch(dropDraggedItem());
	};

	return (
		<li
			draggable
			onDragStart={event => onDragStart(event, props.id)}
			onDragEnter={event => onDragEnter(event, props.id)}
			onDragEnd={event => onDragEnd(event)}
			className={`todo__tasks-list-item ${isComplete ? 'completed' : ''}`}
		>
			<div className='inner-container'>
				{circle}
				<span>{props.task}</span>
			</div>
			<img
				onClick={removeTaskHandler}
				className='delete-icon'
				src={crossIcon}
				alt='delete task button'
			></img>
		</li>
	);
};

export default TaskListItem;
