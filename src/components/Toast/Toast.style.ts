import { ToastProps, Variant } from './Toast.hook';
import { createUseStyles } from 'react-jss';
import pickTextColorBasedOnBgColorAdvanced from '../../utils/pickTextColorBasedOnBgColor';

const useToastStyles = createUseStyles({
	success:
		(props: ToastProps & { variant: Variant }) => ({
			backgroundColor: '#157347',
			color:

					props.messageColor ? props.messageColor :
					'white'
		}),
	info:
		(props: ToastProps & { variant: Variant }) => ({
			backgroundColor: '#31D2F2',
			color:

					props.messageColor ? props.messageColor :
					'black'
		}),
	warning:
		(props: ToastProps & { variant: Variant }) => ({
			backgroundColor: '#FFCA2C',
			color:

					props.messageColor ? props.messageColor :
					'black'
		}),
	error:
		(props: ToastProps & { variant: Variant }) => ({
			backgroundColor: '#BB2D3B',
			color:

					props.messageColor ? props.messageColor :
					'black'
		}),
	custom:
		(props: ToastProps & { variant: Variant }) => ({
			backgroundColor:

					props.bgColor ? props.bgColor :
					'#157347',
			color:

					props.messageColor ? props.messageColor :
					pickTextColorBasedOnBgColorAdvanced(props.bgColor || '#157347', '#ffffff', '#000000')
		}),
	iconColor:
		(props: ToastProps & { variant: Variant }) => ({
			fill:

					props.messageColor ? props.messageColor :
					pickTextColorBasedOnBgColorAdvanced(

							props.variant === 'custom' ? props.bgColor :
							getBgColor(props.variant),
						'#ffffff',
						'#000000'
					)
		})
});

const getBgColor = (varinat: Variant) => {
	switch (varinat) {
		case 'success':
			return '#157347';
		case 'error':
			return '#BB2D3B';
		case 'info':
			return '#31D2F2';
		case 'warning':
			return '#FFCA2C';
		default:
			return '#157347';
	}
};

export default useToastStyles;
