import React from 'react';
import styles from './collapsible-wrapper.module.css';

const CollapsibleWrapper: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
	children,
	className,
	...props
}) => {
	return (
		<div className={`${styles.collapse__content} ${className}`} {...props}>
			{children}
		</div>
	);
};

export default CollapsibleWrapper;
