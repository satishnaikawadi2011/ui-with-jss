import { createUseStyles } from 'react-jss';
import pickTextColorBasedOnBgColorAdvanced from '../../utils/pickTextColorBasedOnBgColor';
import { ButtonProps } from './Button.component';

const useButtonStyles = createUseStyles({
	baseButton:
		(props: ButtonProps) => ({
			letterSpacing: '1px',
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
			alignSelf: 'center',
			border: 'none',
			fontFamily: 'inherit',
			position: 'relative',
			fontWeight: 'bold',
			lineHeight: 2,
			transition: 'all 200ms linear',
			borderRadius: '4px',
			boxShadow: '0 12px 35px 0 rgba(16, 39, 112, 0.25)',
			outline: 0,
			textTransform: 'capitalize',
			fontSize:

					props.size === 'medium' ? '1rem' :
					props.size === 'large' ? '1.3rem' :
					'0.8rem',
			height:

					props.size === 'medium' ? '40px' :
					props.size === 'large' ? '50px' :
					'30px',
			minWidth:

					props.size === 'medium' ? '130px' :
					props.size === 'large' ? '200px' :
					'80px',
			cursor:

					props.disabled ? 'default' :
					'pointer',
			backgroundColor:

					props.bgColor ? props.bgColor :
					'teal',
			color:

					props.labelColor ? props.labelColor :
					pickTextColorBasedOnBgColorAdvanced(props.bgColor || 'teal', '#ffffff', '#000000'),
			opacity:

					props.disabled ? 0.4 :
					1
		}),
	outlineButton:
		(props: ButtonProps) => ({
			border: `1px solid ${props.bgColor}`,
			color: props.bgColor,
			backgroundColor: '#ffffff',
			'&:hover':
				{
					backgroundColor:

							props.disabled ? '#ffffff' :
							props.bgColor,
					color:

							props.disabled ? props.bgColor :
							props.labelColor ? props.labelColor :
							pickTextColorBasedOnBgColorAdvanced(props.bgColor || 'teal', '#ffffff', '#000000')
				}
		}),
	roundedButton:
		(props: ButtonProps) => ({
			borderRadius: '25px',
			fontSize:

					props.size === 'medium' ? '0.8rem' :
					props.size === 'large' ? '1.1rem' :
					'0.6rem'
		}),
	blockButton:
		{
			width: '95%',
			margin: '0 auto'
		},
	hoverableButton:
		(props: ButtonProps) => ({
			'&:hover':
				{
					backgroundColor:

							props.disabled ? props.bgColor :
							props.hoverBgColor,
					color:

							props.labelColor ? props.labelColor :
							pickTextColorBasedOnBgColorAdvanced(

									props.disabled ? props.bgColor || 'teal' :
									props.hoverBgColor || 'teal',
								'#ffffff',
								'#000000'
							)
				}
		}),
	textButton:
		(props: ButtonProps) => ({
			backgroundColor: 'transparent',
			color: props.bgColor,
			boxShadow: 'none',
			'&:hover':
				{
					backgroundColor:

							props.disabled ? 'transparent' :
							`${props.bgColor}20`
				}
		})
});

export default useButtonStyles;
