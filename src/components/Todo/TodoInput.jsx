import React from 'react';

const TodoInput = () => {
	return (
		<form className='todo__form'>
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
			/>
		</form>
	);
};

export default TodoInput;
