import React from 'react';
import styles from './modal-actions.module.css';

const ModalActions: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
	children,
	className,
	...props
}) => {
	return (
		<div className={`${className} ${styles.actions}`} {...props}>
			{children}
		</div>
	);
};

export default ModalActions;
