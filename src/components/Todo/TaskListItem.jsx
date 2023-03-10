import React from 'react';
import crossIcon from '../../assets/icon-cross.svg';
import checkIcon from '../../assets/icon-check.svg';

// Redux
import { removeTask, toggleComplete } from '../features/tasks-slice';
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

	return (
		<li className={`todo__tasks-list-item ${isComplete ? 'completed' : ''}`}>
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
