import { BackdropProps } from './Backdrop.component';
import { createUseStyles } from 'react-jss';

const useBackdropStyles = createUseStyles({
	backdrop:
		(props: BackdropProps) => ({
			position: 'fixed',
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			margin: '0 auto',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			width: '100vw',
			height: '100vh',
			zIndex: 1000,
			overflowX: 'hidden',
			backgroundColor: 'rgba(31, 32, 41, .75)',
			transition: 'opacity 250ms ease',
			pointerEvents:

					props.open ? 'auto' :
					'none',
			opacity:

					props.open ? 1 :
					0
		})
});

export default useBackdropStyles;
