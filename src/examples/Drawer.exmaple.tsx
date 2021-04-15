import React, { useState } from 'react';
import Button from '../components/Button/Button.component';
import Drawer from '../components/Drawer/Drawer.component';

const DrawerExmaple = () => {
	const [
		show,
		setShow
	] = useState(false);
	return (
		<React.Fragment>
			<Button onClick={() => setShow(true)}>Open Drawer</Button>
			<Drawer
				drawerStyle={{ backgroundColor: 'red' }}
				position="bottom"
				onClose={() => setShow(false)}
				show={show}
			/>
		</React.Fragment>
	);
};

export default DrawerExmaple;
