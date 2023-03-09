import { createSlice } from '@reduxjs/toolkit';

const initialState = { isInitial: true };

const uiSlice = createSlice({
	name: 'uiSlice',
	initialState: initialState,
	reducers: {
		toggleInitial: state => {
			state.isInitial = false;
		},
	},
});

export const { toggleInitial } = uiSlice.actions;
export default uiSlice.reducer;
