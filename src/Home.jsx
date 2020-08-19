import React from 'react';
import Common from './Common';
import Web from '../src/images/home1.svg';

const Home = () => {
	return (
		<>
			<Common
				name='Grow your buisness with'
				imgsrc={Web}
				visit='/service'
				btname='Get Started'
			/>
		</>
	);
};

export default Home;
