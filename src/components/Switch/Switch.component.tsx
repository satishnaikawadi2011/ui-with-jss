import React, { useRef } from 'react';
import styles from './switch.module.css';
import useSwitchStyles from './Switch.style';

export interface SwitchProps {
	// size?: 'small' | 'big';
	small?: boolean;
	checkedBgColor?: string;
	unCheckedBgColor?: string;
	checkedIcon?: any;
	unCheckedIcon?: any;
	checkedCircleColor?: string;
	unCheckedCircleColor?: string;
}

const Switch: React.FC<
	SwitchProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({
	checkedBgColor = '#2196f3',
	unCheckedBgColor = '#ccc',
	checkedCircleColor = '#fff',
	unCheckedCircleColor = '#fff',
	checkedIcon = null,
	unCheckedIcon = null,
	checked,
	onChange,
	small,
	...props
}) => {
	const inputRef = useRef(null);
	const classes = useSwitchStyles({
		small,
		checkedBgColor,
		unCheckedBgColor,
		checkedCircleColor,
		unCheckedCircleColor,
		checkedIcon,
		unCheckedIcon,
		checked,
		onChange
	});
	let Icon;
	if (checked) {
		Icon = checkedIcon;
	}
	else {
		Icon = unCheckedIcon;
	}

	return (
		<label
			className={`${
				small ? styles.switch__small :
				''} ${styles.switch}`}
		>
			<input ref={inputRef} type="checkbox" checked={checked} onChange={onChange} {...props} />
			<span className={`${styles.slider} ${classes.slider}`} />
			<span
				className={`${classes.circle} ${
					small ? styles.circle__small :
					''} ${styles.circle}`}
			>
				{Icon && (
					<Icon
						style={

								small ? { height: 10, width: 10 } :
								{ height: 20, width: 20 }
						}
					/>
				)}
			</span>
		</label>
	);
};

export default Switch;
