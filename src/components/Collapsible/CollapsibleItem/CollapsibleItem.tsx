import React, { useRef, useState } from 'react';
import Less from '../../../icons/Less';
import More from '../../../icons/More';
import styles from './collapsible.module.css';

export interface CollapsibleProps {
	heading: string;
	headingColor?: string;
	bgHeader?: string;
	iconColor?: string;
	icon?: any;
}

const CollapsibleItem: React.FC<
	CollapsibleProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, icon = null, heading, iconColor = 'white', bgHeader = 'teal', headingColor = 'white' }) => {
	const iconStyle = { width: 20, cursor: 'pointer', height: 20 };
	const collapsibleToggleHavdler = () => {
		let content: any = contentRef.current;
		if (!isOpen) {
			content.style.maxHeight = content.scrollHeight + 'px';
		}
		else {
			content.style.maxHeight = null;
		}
		setIsOpen(!isOpen);
	};
	const [
		isOpen,
		setIsOpen
	] = useState(false);
	const contentRef = useRef(null);
	let Icon = icon;
	return (
		<div className={styles.collapse}>
			<div className={styles.header} style={{ backgroundColor: bgHeader, color: headingColor }}>
				<div className={styles.heading}>
					<div>{icon && <Icon />}</div>
					<h1>{heading}</h1>
				</div>
				{
					isOpen ? <Less style={iconStyle} fill={iconColor} onClick={collapsibleToggleHavdler} /> :
					<More fill={iconColor} style={iconStyle} onClick={collapsibleToggleHavdler} />}
			</div>
			<div className={styles.content} ref={contentRef}>
				<div className={styles.inner__content}>
					<h3>{heading}</h3>
					{children}
				</div>
			</div>
		</div>
	);
};

export default CollapsibleItem;
