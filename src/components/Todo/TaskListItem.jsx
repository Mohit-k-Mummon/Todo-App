import React from 'react';
import crossIcon from '../../assets/icon-cross.svg';

const TaskListItem = props => {
	return (
		<li className='todo__tasks-list-item'>
			<div className='inner-container'>
				<div className='circle'></div>
				<span>{props.task}</span>
			</div>
			<img className='delete-icon' src={crossIcon} alt='delete task button'></img>
		</li>
	);
};

export default TaskListItem;
