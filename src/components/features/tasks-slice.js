import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tasks: [{ id: 't1', task: 'Add a task above to get started' }],
	tasksQuantity: 1,
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: initialState,
	reducers: {
		addTask: (state, action) => {
			const id = Math.random() * 10;
			const newTask = { id: id, task: action.payload };
			state.tasks.unshift(newTask);
			state.tasksQuantity++;
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
			localStorage.setItem('tasksQuantity', JSON.stringify(state.tasksQuantity));
		},
		removeTask: (state, action) => {
			state.tasks = state.tasks.filter(task => task.id !== action.payload);
			state.tasksQuantity--;
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
			localStorage.setItem('tasksQuantity', JSON.stringify(state.tasksQuantity));
		},
		// Fetch from local storage
		fetchTaskData: state => {
			const tasks = JSON.parse(localStorage.getItem('tasks'));
			const tasksQuantity = JSON.parse(localStorage.getItem('tasksQuantity'));
			if (!tasks || tasks.length === 0) {
				state = initialState;
			} else {
				state.tasks = tasks;
				state.tasksQuantity = tasksQuantity;
			}
		},
	},
});

export const { addTask, removeTask, fetchTaskData } = tasksSlice.actions;

export default tasksSlice.reducer;
