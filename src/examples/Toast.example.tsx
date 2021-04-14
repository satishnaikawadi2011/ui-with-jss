import React from 'react';
import useToast from '../components/Toast/Toast.hook';
import CloseIcon from '../icons/CloseIcon';

const ToastExample = () => {
	const { openToast, ToastComponent } = useToast('This is my notification.', 'info', CloseIcon);
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh'
			}}
		>
			<button onClick={() => openToast()}>Show Snackbar </button>
			<ToastComponent
				containerStyle={{ backgroundColor: 'red' }}
				contentStyle={{ fontSize: '2rem' }}
				messageColor="#ffffff"
			/>
		</div>
	);
};

export default ToastExample;
