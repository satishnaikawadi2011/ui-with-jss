import React from 'react';
import useBackdropStyles from './Backdrop.styles';

export interface BackdropProps {
	open?: boolean;
}

const Backdrop: React.FC<
	BackdropProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ open = false, children, className, ...divProps }) => {
	const classes = useBackdropStyles({ open });
	return (
		<div className={`${className} ${classes.backdrop}`} {...divProps}>
			{children}
		</div>
	);
};

export default Backdrop;
