import React from 'react';

// Icon import
import moonIcon from '../../assets/icon-moon.svg';
import sunIcon from '../../assets/icon-sun.svg';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/ui-slice';

const TodoHeader = () => {
	// Grab current ui state
	const ui = useSelector(state => state.ui);

	// Redux dispatch hook
	const dispatch = useDispatch();

	// Theme toggle handler
	const toggleThemeHandler = () => {
		dispatch(toggleTheme());
	};

	// helper constant grabs the root of the html document
	const documentClassList = document.documentElement.classList;

	// ToggleIcon Logic
	let toggleIcon;
	if (ui.isDarkmode) {
		toggleIcon = sunIcon;
		documentClassList.add('dark');
		documentClassList.remove('light');
	} else {
		toggleIcon = moonIcon;
		documentClassList.add('light');
		documentClassList.remove('dark');
	}

	return (
		<header className='todo__header'>
			<h1>Todo</h1>
			<img onClick={toggleThemeHandler} src={toggleIcon} alt='theme toggle icon' />
		</header>
	);
};

export default TodoHeader;
