import React, { useState } from 'react';
import Button from '../components/Button/Button.component';
import Modal from '../components/Modal/Modal.component';
import ModalActions from '../components/Modal/ModalActions/ModalActions.component';
import ModalImage from '../components/Modal/ModalImage/ModalImage.component';
import ModalText from '../components/Modal/ModalText/ModalText.component';
import ModalTitle from '../components/Modal/ModalTitle/ModalTitle.component';

const ModalExample = () => {
	const [
		show,
		setShow
	] = useState(false);
	return (
		<React.Fragment>
			<Modal show={show} onClose={() => setShow(false)}>
				<ModalTitle>This Is Modal Title</ModalTitle>
				<ModalImage src="https://cdn.pixabay.com/photo/2021/03/06/11/28/ships-6073537__340.jpg" alt="my" />
				<ModalText>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eos atque, enim numquam eum
					totam provident odit quas! Perferendis veniam quis autem. Sapiente distinctio animi fugit, deserunt
					quia excepturi aliquam?
				</ModalText>
				<ModalActions>
					<Button variant="text" size="small">
						Cancel
					</Button>
					<Button variant="text" size="small">
						Save
					</Button>
				</ModalActions>
			</Modal>
			<Button onClick={() => setShow(true)}>Open Modal</Button>
		</React.Fragment>
	);
};

export default ModalExample;
