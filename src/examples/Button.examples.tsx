import React from 'react';
import Button from '../components/Button/Button.component';

const ButtonExamples = () => {
	return (
		<div
			style={{
				display: 'flex',
				alignContent: 'center',
				justifyContent: 'space-around',
				height: '100vh',
				flexDirection: 'column'
			}}
		>
			<Button>Normal Button</Button>
			<Button bgColor="red" variant="outline" labelColor="white">
				Outline Button
			</Button>
			<Button variant="block" bgColor="aqua">
				Block Button
			</Button>
			<Button variant="rounded" bgColor="yellow">
				Rounded Button
			</Button>
			<Button variant="text" bgColor="#0000FF">
				Text Button
			</Button>
			<Button bgColor="green" hoverBgColor="orange" variant="hoverable">
				Hover Button
			</Button>
		</div>
	);
};

export default ButtonExamples;
