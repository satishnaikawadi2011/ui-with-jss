import React from 'react';
import useButtonStyles from './Button.styles';

type variantType = 'rounded' | 'normal' | 'outline' | 'block' | 'hoverable' | 'text' | undefined;

export interface ButtonProps {
	bgColor?: string;
	labelColor?: string;
	variant?: variantType;
	hoverBgColor?: string;
	size?: 'small' | 'large' | 'medium';
	disabled?: boolean;
	onClick?: () => void;
}

const Button: React.FC<
	ButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({
	bgColor = '#008080',
	children,
	labelColor,
	hoverBgColor = 'black',
	variant = 'normal',
	size = 'large',
	disabled = false,
	className,
	...props
}) => {
	const classes = useButtonStyles({ bgColor, labelColor, hoverBgColor, variant, size, disabled });
	let btnClasses = classes.baseButton;
	switch (variant) {
		case 'block':
			btnClasses = `${classes.baseButton} ${classes.blockButton}`;
			break;
		case 'hoverable':
			btnClasses = `${classes.baseButton} ${classes.hoverableButton}`;
			break;
		case 'outline':
			btnClasses = `${classes.baseButton} ${classes.outlineButton}`;
			break;
		case 'rounded':
			btnClasses = `${classes.baseButton} ${classes.roundedButton}`;
			break;
		case 'text':
			btnClasses = `${classes.baseButton} ${classes.textButton}`;
			break;
		default:
			btnClasses = `${classes.baseButton}`;
			break;
	}
	return (
		<button className={`${className} ${btnClasses}`} {...props}>
			{children}
		</button>
	);
};

export default Button;
