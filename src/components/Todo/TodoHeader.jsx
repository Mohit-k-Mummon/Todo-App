import React from 'react';

// Icon import
import moonIcon from '../../assets/icon-moon.svg';

const TodoHeader = () => {
	return (
		<header className='todo__header'>
			<h1>Todo</h1>
			<img src={moonIcon} alt='theme toggle icon' />
		</header>
	);
};

export default TodoHeader;
