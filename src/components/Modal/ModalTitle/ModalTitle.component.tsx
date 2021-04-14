import React from 'react';
import styles from './modal-title.module.css';

const ModalTitle: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({
	children,
	className,
	...props
}) => {
	return (
		<h1 className={`${className} ${styles.title}`} {...props}>
			{children}
		</h1>
	);
};

export default ModalTitle;
