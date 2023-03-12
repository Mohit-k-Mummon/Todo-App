import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tasks: [{ id: 't1', task: 'Add a task above to get started', isComplete: false }],
	tasksQuantity: 1,
	countComplete: 0,
	sortBy: 'All',
	draggedItem: null,
	draggedOverItem: null,
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: initialState,
	reducers: {
		addTask: (state, action) => {
			const id = Math.random() * 10;
			const newTask = { id: id, task: action.payload, isComplete: false };
			state.tasks.unshift(newTask);
			state.tasksQuantity++;
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
			localStorage.setItem('tasksQuantity', JSON.stringify(state.tasksQuantity));
		},
		removeTask: (state, action) => {
			let i = state.tasks.findIndex(element => element.id === action.payload);
			if (state.tasks[i].isComplete) {
				state.countComplete--;
			}

			state.tasks = state.tasks.filter(task => task.id !== action.payload);
			state.tasksQuantity--;

			localStorage.setItem('tasks', JSON.stringify(state.tasks));
			localStorage.setItem('tasksQuantity', JSON.stringify(state.tasksQuantity));
		},
		// Fetch from local storage
		fetchTaskData: state => {
			const tasks = JSON.parse(localStorage.getItem('tasks'));
			const tasksQuantity = JSON.parse(localStorage.getItem('tasksQuantity'));
			const countComplete = JSON.parse(localStorage.getItem('countComplete'));
			if (!tasks || tasks.length === 0) {
				state = initialState;
			} else {
				state.tasks = tasks;
				state.tasksQuantity = tasksQuantity;
				state.countComplete = countComplete;
			}
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
			localStorage.setItem('tasksQuantity', JSON.stringify(state.tasksQuantity));
			localStorage.setItem('countComplete', JSON.stringify(state.countComplete));
		},
		toggleComplete: (state, action) => {
			// Find index of element
			let i = state.tasks.findIndex(element => element.id === action.payload);

			// toggle isComplete for that element
			state.tasks[i].isComplete = !state.tasks[i].isComplete;

			// Increment or decrement state.countComplete on toggle
			state.tasks[i].isComplete ? state.countComplete++ : state.countComplete--;

			// Update Local Storage
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
			localStorage.setItem('countComplete', JSON.stringify(state.countComplete));
		},
		clearCompleted: state => {
			state.tasks = state.tasks.filter(task => !task.isComplete);
			state.tasksQuantity = state.tasksQuantity - state.countComplete;
			state.countComplete = 0;

			localStorage.setItem('tasks', JSON.stringify(state.tasks));
			localStorage.setItem('tasksQuantity', JSON.stringify(state.tasksQuantity));
			localStorage.setItem('countComplete', JSON.stringify(state.countComplete));
		},
		sortTasks: (state, action) => {
			state.sortBy = action.payload;
		},

		// Drag and Drop Methods
		dragTask: (state, action) => {
			// Action is going to be the dragged item's id
			const id = action.payload;
			const indexOfDragged = state.tasks.findIndex(task => task.id === id);
			state.draggedItem = indexOfDragged;
		},
		draggedOverItem: (state, action) => {
			// Action is going to be the dragged item's id
			const id = action.payload;
			const indexOfDraggedOverItem = state.tasks.findIndex(task => task.id === id);
			state.draggedOverItem = indexOfDraggedOverItem;
		},
		dropDraggedItem: state => {
			if (state.draggedItem === state.draggedOverItem) return;
			if (state.draggedItem > state.draggedOverItem) {
				state.tasks.splice(state.draggedOverItem, 0, state.tasks[state.draggedItem]);
			} else {
				state.tasks.splice(state.draggedOverItem + 1, 0, state.tasks[state.draggedItem]);
			}
			if (state.draggedItem > state.draggedOverItem) {
				state.tasks.splice(state.draggedItem + 1, 1);
			} else {
				state.tasks.splice(state.draggedItem, 1);
			}
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
		},
	},
});

export const {
	addTask,
	removeTask,
	fetchTaskData,
	toggleComplete,
	clearCompleted,
	sortTasks,
	dragTask,
	draggedOverItem,
	dropDraggedItem,
} = tasksSlice.actions;

export default tasksSlice.reducer;
