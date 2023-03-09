import React from 'react';
import MobileSortActions from './MobileSortActions';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoTasks from './TodoTasks';

const Todo = () => {
	return (
		<main className='todo container'>
			<TodoHeader />
			<TodoInput />
			<TodoTasks />
			<MobileSortActions />
		</main>
	);
};

export default Todo;
