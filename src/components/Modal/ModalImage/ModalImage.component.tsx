import React from 'react';
import styles from './modal-image.module.css';

const ModalImage: React.FC<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = ({
	alt,
	src,
	className,
	...props
}) => {
	return <img src={src} alt={alt} {...props} className={`${className} ${styles.image}`} />;
};

export default ModalImage;
