import React, { useState } from 'react';
import Switch from '../components/Switch/Switch.component';

const SwitchExample = () => {
	const [
		checked,
		setChecked
	] = useState(false);
	return (
		<Switch
			small
			checked={checked}
			unCheckedBgColor="red"
			checkedBgColor="green"
			unCheckedCircleColor="orange"
			checkedCircleColor="aqua"
			onChange={() => setChecked(!checked)}
		/>
	);
};

export default SwitchExample;
