import React, { CSSProperties } from 'react';
import Backdrop from '../Backdrop/Backdrop.component';
import useDrawerStyles from './Drawer.style';

export interface DrawerProps {
	show?: boolean;
	onClose: () => void;
	position?: 'top' | 'bottom' | 'left' | 'right';
	height?: any;
	width?: any;
	minWidth?: string | number;
	minHeight?: string | number;
	maxHeight?: string | number;
	maxWidth?: string | number;
	drawerStyle?: CSSProperties;
	drawerClasses?: string;
	backdropStyle?: CSSProperties;
	backdropClasses?: string;
}

const Drawer: React.FC<DrawerProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
	show = false,
	children,
	onClose = () => {},
	position = 'top',
	height,
	width,
	minHeight,
	minWidth,
	maxHeight,
	maxWidth,
	drawerClasses,
	drawerStyle,
	backdropClasses,
	backdropStyle,
	...props
}) => {
	const classes = useDrawerStyles({
		show,
		onClose,
		position,
		height,
		width,
		minHeight,
		minWidth,
		maxHeight,
		maxWidth
	});
	let drawerClassOnPosition;
	switch (position) {
		case 'top':
			drawerClassOnPosition = classes.topDrawer;
			break;
		case 'bottom':
			drawerClassOnPosition = classes.bottomDrawer;
			break;
		case 'left':
			drawerClassOnPosition = classes.leftDrawer;
			break;
		case 'right':
			drawerClassOnPosition = classes.rightDrawer;
			break;
		default:
			drawerClassOnPosition = classes.topDrawer;
			break;
	}
	return (
		<React.Fragment>
			{show && (
				<Backdrop onClick={onClose} style={{ ...backdropStyle }} className={backdropClasses} open={true} />
			)}
			<div
				className={`${drawerClasses} ${drawerClassOnPosition} ${
					show ? classes.open :
					classes.close}`}
				style={drawerStyle}
				{...props}
			>
				{children}
			</div>
		</React.Fragment>
	);
};

export default Drawer;
