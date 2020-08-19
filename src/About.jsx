import React from 'react';
import Common from './Common';
import Web from '../src/images/about1.svg';

const About = () => {
	return (
		<>
			<Common
				name='Welcome To About page'
				imgsrc={Web}
				visit='/contact'
				btname='Contact Now'
			/>
		</>
	);
};

export default About;
