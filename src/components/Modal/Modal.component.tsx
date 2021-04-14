import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import CloseIcon from '../../icons/CloseIcon';
import Backdrop from '../Backdrop/Backdrop.component';
import Button from '../Button/Button.component';

import styles from './modal.module.css';

interface ModalProps {
	show: boolean;
	onClose: () => void;
	backdropStyle?: CSSProperties;
}

const Modal: React.FC<ModalProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
	show,
	onClose,
	children,
	style,
	backdropStyle,
	className,
	...props
}) => {
	const [
		isHovered,
		setIsHovered
	] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);
	useEffect(
		() => {
			if (show) {
				modalRef.current!.classList.add(styles.visible);
			}
			else {
				modalRef.current!.classList.remove(styles.visible);
			}
		},
		[
			show
		]
	);
	return (
		<div>
			{show && (
				<Button
					onClick={onClose}
					variant="hoverable"
					bgColor="#ffeba7"
					hoverBgColor="#102770"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					style={{ position: 'absolute', right: '20px', top: '20px', minWidth: '70px', zIndex: 1001 }}
				>
					<CloseIcon
						height={25}
						width={25}
						fill={

								isHovered ? '#ffeba7' :
								'#102770'
						}
					/>
				</Button>
			)}
			<Backdrop onClick={onClose} open={show} style={backdropStyle}>
				<div
					{...props}
					ref={modalRef}
					onClick={(e) => {
						e.stopPropagation();
						e.nativeEvent.stopImmediatePropagation();
					}}
					className={`${className} ${styles.modal}`}
					style={style}
				>
					{children}
				</div>
			</Backdrop>
		</div>
	);
};

export default Modal;
