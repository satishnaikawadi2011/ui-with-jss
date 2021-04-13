import React, { useState } from 'react';
import './App.css';
import Backdrop from './components/Backdrop/Backdrop.component';
import Button from './components/Button/Button.component';

function App() {
	const [
		open,
		setOpen
	] = useState(false);
	return (
		<React.Fragment>
			<Button onClick={() => setOpen(true)}>Open Backdrop</Button>
			<Backdrop open={open} onClick={() => setOpen(false)}>
				Hi, I am Backdrop
			</Backdrop>
		</React.Fragment>
	);
}

export default App;
