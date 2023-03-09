import React from 'react';

// Image imports
import mobileBackgroundLight from '../../assets/bg-mobile-light.jpg';
import desktopBackgroundLight from '../../assets/bg-desktop-light.jpg';

const BackgroundImg = () => {
	return (
		<picture className='background-img-container'>
			<source media='(max-width: 535px )' srcSet={mobileBackgroundLight} />
			<source media='(min-width: 536px )' srcSet={desktopBackgroundLight} />
			<img className='background-img' src={mobileBackgroundLight} alt='banner' />
		</picture>
	);
};

export default BackgroundImg;
