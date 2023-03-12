import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Image imports
import mobileBackgroundLight from '../../assets/bg-mobile-light.jpg';
import desktopBackgroundLight from '../../assets/bg-desktop-light.jpg';

import mobileBackgroundDark from '../../assets/bg-mobile-dark.jpg';
import desktopBackgroundDark from '../../assets/bg-desktop-dark.jpg';

const BackgroundImg = () => {
	// Grab current ui state
	const ui = useSelector(state => state.ui);

	// Determine which banner to display
	let mobileBackground;
	let desktopBackground;

	if (!ui.isDarkmode) {
		mobileBackground = mobileBackgroundLight;
		desktopBackground = desktopBackgroundLight;
	} else {
		mobileBackground = mobileBackgroundDark;
		desktopBackground = desktopBackgroundDark;
	}
	return (
		<picture className='background-img-container'>
			<source media='(max-width: 535px )' srcSet={mobileBackground} />
			<source media='(min-width: 536px )' srcSet={desktopBackground} />
			<img className='background-img' src={mobileBackground} alt='banner' />
		</picture>
	);
};

export default BackgroundImg;
