import { createUseStyles } from 'react-jss';
import { SwitchProps } from './Switch.component';

type MyProps = SwitchProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const useSwitchStyles = createUseStyles({
	circle:
		(props: MyProps) => ({
			transform:

					props.checked ? props.small ? 'translateX(26px)' :
					'translateX(65px)' :
					'',
			backgroundColor:

					props.checked ? props.checkedCircleColor :
					props.unCheckedCircleColor
		}),
	slider:
		(props: MyProps) => ({
			backgroundColor:

					props.checked ? props.checkedBgColor :
					props.unCheckedBgColor
		})
});

export default useSwitchStyles;
