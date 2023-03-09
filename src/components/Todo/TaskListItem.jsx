import React from 'react';
import crossIcon from '../../assets/icon-cross.svg';

// Redux
import { removeTask } from '../features/tasks-slice';
import { toggleInitial } from '../features/ui-slice';
import { useDispatch } from 'react-redux';

const TaskListItem = props => {
	const dispatch = useDispatch();
	const removeTaskHandler = () => {
		dispatch(toggleInitial());

		dispatch(removeTask(props.id));
	};
	return (
		<li className='todo__tasks-list-item'>
			<div className='inner-container'>
				<div className='circle'></div>
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
