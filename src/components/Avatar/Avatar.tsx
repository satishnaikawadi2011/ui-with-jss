import React from 'react';
import useAvatarStyles from './Avatar.style';

export interface AvatarProps {
	bgColor?: string;
	varinat?: 'rounded' | 'square' | 'circular';
	type: 'letter' | 'image';
	size?: number;
	src?: string;
	alt?: string;
}

const Avatar: React.FC<AvatarProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
	bgColor = 'teal',
	varinat = 'circular',
	type,
	size = 50,
	src,
	alt,
	className,
	style,
	children,
	...props
}) => {
	const classes = useAvatarStyles({
		bgColor,
		varinat,
		type,
		size,
		src,
		alt
	});
	return (
		<div
			className={`${className} ${classes.avatar}`}
			style={{ fontWeight: 'bold', fontSize: '1.5rem', ...style }}
			{...props}
		>
			{
				type === 'letter' ? children :
				null}
		</div>
	);
};

export default Avatar;
