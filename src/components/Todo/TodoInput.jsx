import React from 'react';
import { useRef } from 'react';

import checkIcon from '../../assets/icon-check.svg';

// Redux
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks-slice';

const TodoInput = () => {
	// Inpur ref we use to grab the input value
	const taskInputRef = useRef();
	const dispatch = useDispatch();

	// Form submit logic
	const onFormSubmit = e => {
		e.preventDefault();

		// On Mobile this hides keyboard after submit
		taskInputRef.current.blur();

		if (taskInputRef.current.value.trim() === '') {
			return;
		}

		// Here we dispatch our add task action with our input value
		dispatch(addTask(taskInputRef.current.value.trim()));

		// Reset the input to an empty string
		taskInputRef.current.value = '';
	};

	return (
		<form onSubmit={onFormSubmit} className='todo__form'>
			<button type='submit' className='circle-button'>
				<img src={checkIcon} alt='' />
			</button>
			<label className='sr-only' htmlFor='input'>
				Input
			</label>
			<input
				className='todo__form-input'
				id='input'
				type='text'
				placeholder='Create a new todo...'
				maxLength={'255'}
				ref={taskInputRef}
			/>
		</form>
	);
};

export default TodoInput;
