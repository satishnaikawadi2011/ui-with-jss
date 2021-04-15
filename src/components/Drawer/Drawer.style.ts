import { createUseStyles } from 'react-jss';
import { DrawerProps } from './Drawer.component';

const useDrawerStyles = createUseStyles({
	leftDrawer:
		(props: DrawerProps) => ({
			height: '100vh',
			background: '#ffffff',
			position: 'fixed',
			width: props.width,
			top: 0,
			left: 0,
			minWidth:

					props.minWidth ? props.minWidth :
					'250px',
			maxWidth:

					props.maxWidth ? props.maxWidth :
					'500px',
			zIndex: 2000,
			boxShadow: '1px 0px 7px rgba(0, 0, 0, 0.5)',
			transform: 'translateX(-1000%)',
			transition: 'transform 0.5s ease-out'
		}),
	rightDrawer:
		(props: DrawerProps) => ({
			height: '100vh',
			background: '#ffffff',
			position: 'fixed',
			width: props.width,
			top: 0,
			right: 0,
			minWidth:

					props.minWidth ? props.minWidth :
					'250px',
			maxWidth:

					props.maxWidth ? props.maxWidth :
					'500px',
			zIndex: 2000,
			boxShadow: '1px 0px 7px rgba(0, 0, 0, 0.5)',
			transform: 'translateX(1000%)',
			transition: 'transform 0.5s ease-out'
		}),
	topDrawer:
		(props: DrawerProps) => ({
			height: props.height,
			background: '#ffffff',
			position: 'fixed',
			width: '100vw',
			top: 0,
			right: 0,
			left: 0,
			minHeight:

					props.minHeight ? props.minHeight :
					'500px',
			maxHeight:

					props.maxHeight ? props.maxHeight :
					'750px',
			zIndex: 2000,
			boxShadow: '1px 0px 7px rgba(0, 0, 0, 0.5)',
			transform: 'translateX(-1000%)',
			transition: 'transform 0.5s ease-out'
		}),
	bottomDrawer:
		(props: DrawerProps) => ({
			height: props.height,
			background: '#ffffff',
			position: 'fixed',
			width: '100vw',
			bottom: 0,
			right: 0,
			left: 0,
			top: 'auto',
			minHeight:

					props.minHeight ? props.minHeight :
					'500px',
			maxHeight:

					props.maxHeight ? props.maxHeight :
					'750px',
			zIndex: 2000,
			boxShadow: '1px 0px 7px rgba(0, 0, 0, 0.5)',
			transform: 'translateX(1000%)',
			transition: 'transform 0.5s ease-out'
		}),
	open:
		(props: DrawerProps) => ({
			transform:

					props.position === 'top' || 'bottom' ? 'translateY(0%)' :
					'translateX(0%)'
		}),
	close:
		(props: DrawerProps) => ({
			transform: getTransformForClose(props.position)
		})
});

const getTransformForClose = (position: any) => {
	switch (position) {
		case 'top':
			return 'translateY(-1000%)';
		case 'bottom':
			return 'translateY(1000%)';
		case 'left':
			return 'translateX(-1000%)';
		case 'right':
			return 'translateX(1000%)';
		default:
			break;
	}
};

export default useDrawerStyles;
