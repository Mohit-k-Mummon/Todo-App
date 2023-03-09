import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks-slice';
import uiReducer from '../features/ui-slice';

export const store = configureStore({
	reducer: {
		tasks: taskReducer,
		ui: uiReducer,
	},
});
