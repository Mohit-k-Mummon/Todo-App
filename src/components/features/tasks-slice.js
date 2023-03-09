import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ id: 't1', task: 'Add a task above to get started' }];

createSlice({
	name: 'tasks',
	initialState: initialState,
	reducers: {},
});
