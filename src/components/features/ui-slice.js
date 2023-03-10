import { createSlice } from '@reduxjs/toolkit';

const initialState = { isInitial: true, isDarkmode: false };

const uiSlice = createSlice({
	name: 'uiSlice',
	initialState: initialState,
	reducers: {
		toggleInitial: state => {
			state.isInitial = false;
		},
		toggleTheme: state => {
			state.isDarkmode = state.isDarkmode ? false : true;
			localStorage.setItem('isDarkmode', JSON.stringify(state.isDarkmode));
		},
		fetchUiData: state => {
			const isDarkmode = JSON.parse(localStorage.getItem('isDarkmode'));
			state.isDarkmode = isDarkmode;
			localStorage.setItem('isDarkmode', JSON.stringify(state.isDarkmode));
		},
	},
});

export const { toggleInitial, toggleTheme, fetchUiData } = uiSlice.actions;
export default uiSlice.reducer;
