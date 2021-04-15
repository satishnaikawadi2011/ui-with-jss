import { AvatarProps } from './Avatar';
import { createUseStyles } from 'react-jss';
import pickTextColorBasedOnBgColorAdvanced from '../../utils/pickTextColorBasedOnBgColor';

const useAvatarStyles = createUseStyles({
	avatar:
		(props: AvatarProps) => ({
			width:

					props.size ? props.size :
					50,
			height:

					props.size ? props.size :
					50,
			borderRadius:

					props.varinat === 'circular' ? '50%' :
					props.varinat === 'rounded' ? '5px' :
					0,
			background:

					props.type === 'image' ? `url(${props.src}),${props.bgColor}` :
					props.bgColor,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: pickTextColorBasedOnBgColorAdvanced(props.bgColor, '#ffffff', '#000000'),
			backgroundSize: 'cover',
			backgroundPosition: 'center'
		})
});

export default useAvatarStyles;
