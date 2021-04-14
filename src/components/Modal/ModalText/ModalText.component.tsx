import React from 'react';
import styles from './modal-text.module.css';

const ModalText: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
	children,
	className,
	...props
}) => {
	return (
		<div {...props} className={`${styles.text} ${className}`}>
			{children}
		</div>
	);
};

export default ModalText;
