import React, { CSSProperties, useRef } from 'react';
import styles from './toast.module.css';
import SuccessIcon from '../../icons/SuccessIcon';
import ErrorIcon from '../../icons/ErrorIcon';
import InfoIcon from '../../icons/InfoIcon';
import WarningIcon from '../../icons/WarningIcon';
import useToastStyles from './Toast.style';
import pickTextColorBasedOnBgColorAdvanced from '../../utils/pickTextColorBasedOnBgColor';

export type Variant = 'success' | 'error' | 'warning' | 'info' | 'custom';

export interface ToastProps {
	bgColor?: string;
	messageColor?: string;
	containerStyle?: CSSProperties;
	contentStyle?: CSSProperties;
	containerClasses?: string;
	contentClasses?: string;
}

const useToast = (message: string, variant: Variant = 'success', icon: any = SuccessIcon) => {
	const toastRef: any = useRef(null);
	const openToast = () => {
		toastRef.current.classList.add(styles.show);
		setTimeout(function() {
			toastRef.current.classList.remove(styles.show);
		}, 3000);
	};
	let Icon: any = icon;

	const ToastComponent: React.FC<
		ToastProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> = ({
		className,
		bgColor,
		messageColor,
		containerStyle,
		contentStyle,
		containerClasses,
		contentClasses,
		...props
	}) => {
		const classes = useToastStyles({ bgColor, messageColor, variant });
		let toastClasses: string = classes.custom;
		switch (variant) {
			case 'success':
				toastClasses = classes.success;
				Icon = SuccessIcon;
				break;
			case 'error':
				toastClasses = classes.error;
				Icon = ErrorIcon;
				break;
			case 'info':
				toastClasses = classes.info;
				Icon = InfoIcon;
				break;
			case 'warning':
				toastClasses = classes.warning;
				Icon = WarningIcon;
				break;
			default:
				break;
		}
		return (
			<React.Fragment>
				<div
					ref={toastRef}
					className={`${className} ${containerClasses} ${toastClasses} ${styles.snackbar}`}
					style={containerStyle}
					{...props}
				>
					<div className={`${styles.content} ${contentClasses}`} style={contentStyle}>
						<Icon className={`${styles.icon} ${classes.iconColor}`} />
						{message}
					</div>
				</div>
			</React.Fragment>
		);
	};
	return { openToast, ToastComponent };
};

export default useToast;
