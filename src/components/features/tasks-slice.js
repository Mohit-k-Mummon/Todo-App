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
			// Generate id for our new task and add it to our tasks array [{}]
			const id = Math.random() * 10;
			const newTask = { id: id, task: action.payload, isComplete: false };
			state.tasks.unshift(newTask);
			state.tasksQuantity++;

			// Update tasks and tasksQuantity in local storage
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
			localStorage.setItem('tasksQuantity', JSON.stringify(state.tasksQuantity));
		},
		removeTask: (state, action) => {
			// Recieve id as payload and find the index of the element we want to remove
			let index = state.tasks.findIndex(element => element.id === action.payload);

			// If the item we want to remove is completed we decrement countComplete
			if (state.tasks[index].isComplete) {
				state.countComplete--;
			}

			// Here we remove the task by filtering our tasks array
			state.tasks = state.tasks.filter(task => task.id !== action.payload);
			state.tasksQuantity--;

			// Update tasks and tasksQuantity in local storage
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
			localStorage.setItem('tasksQuantity', JSON.stringify(state.tasksQuantity));
		},
		// Fetch from local storage
		fetchTaskData: state => {
			// Grab our data from local storage
			const tasks = JSON.parse(localStorage.getItem('tasks'));
			const tasksQuantity = JSON.parse(localStorage.getItem('tasksQuantity'));
			const countComplete = JSON.parse(localStorage.getItem('countComplete'));

			// If our tasks is empty or null we set state back to initalState
			if (!tasks || tasks.length === 0) {
				state = initialState;
			} else {
				state.tasks = tasks;
				state.tasksQuantity = tasksQuantity;
				state.countComplete = countComplete;
			}

			// Update tasks, taskQuantity, countComplete in our localStorage
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
			localStorage.setItem('tasksQuantity', JSON.stringify(state.tasksQuantity));
			localStorage.setItem('countComplete', JSON.stringify(state.countComplete));
		},
		toggleComplete: (state, action) => {
			// Find index of element
			let index = state.tasks.findIndex(element => element.id === action.payload);

			// toggle isComplete for that element
			state.tasks[index].isComplete = !state.tasks[index].isComplete;

			// reduce method to keep track of how many tasks complete
			state.countComplete = state.tasks.reduce((count, current) => {
				if (current.isComplete) {
					return count + 1;
				}
				return count;
			}, 0);

			// Update Local Storage
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
			localStorage.setItem('countComplete', JSON.stringify(state.countComplete));
		},
		clearCompleted: state => {
			// Remove completed tasks by filtering our tasks array [{}]
			state.tasks = state.tasks.filter(task => !task.isComplete);

			// Update our tasksQuantity by subtracting the # of completed tasks we just removed
			state.tasksQuantity = state.tasksQuantity - state.countComplete;

			// reset countComplete to 0
			state.countComplete = 0;

			// Update Local Storage
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
			localStorage.setItem('tasksQuantity', JSON.stringify(state.tasksQuantity));
			localStorage.setItem('countComplete', JSON.stringify(state.countComplete));
		},
		sortTasks: (state, action) => {
			// Here we recieve a string that determines how we sort our tasks
			state.sortBy = action.payload;
		},
		// Reorder state update (Motion Component)
		reorderState: (state, action) => {
			// Here we recieve our reordered tasks array as an action from 'TodoTasks.jsx' from the framer-motion Reorder.Group component
			state.tasks = action.payload;

			// Update local Storage
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
	reorderState,
} = tasksSlice.actions;

export default tasksSlice.reducer;
