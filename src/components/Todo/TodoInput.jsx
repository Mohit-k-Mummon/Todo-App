import React from 'react';
import { useRef } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks-slice';
import { toggleInitial } from '../features/ui-slice';

const TodoInput = () => {
	const taskInputRef = useRef();
	const dispatch = useDispatch();

	const onFormSubmit = e => {
		e.preventDefault();
		dispatch(toggleInitial());

		// On Mobile this hides keyboard after submit
		taskInputRef.current.blur();

		dispatch(addTask(taskInputRef.current.value));
		taskInputRef.current.value = '';
	};

	return (
		<form onSubmit={onFormSubmit} className='todo__form'>
			<div className='circle'></div>
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
