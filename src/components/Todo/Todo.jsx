import React from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';

const Todo = () => {
	return (
		<main className='todo container'>
			<TodoHeader />
			<TodoInput />
		</main>
	);
};

export default Todo;
