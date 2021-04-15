import React from 'react';
import CollapsibleItem from '../../components/Collapsible/CollapsibleItem/CollapsibleItem';
import CollapsibleWrapper from '../../components/Collapsible/CollapsibleWrapper/CollapsibleWrapper';
import Burger from './icons/food/Burger';
import Fries from './icons/food/Fries';
import Pizza from './icons/food/Pizza';

const CollapsibleExample = () => {
	return (
		<React.Fragment>
			<div style={{ marginBottom: '5rem' }}>
				<CollapsibleWrapper>
					<CollapsibleItem heading="First Item">
						<p>
							Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
							graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
							century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for
							use in a type specimen book.
						</p>
					</CollapsibleItem>
					<CollapsibleItem heading="Second Item" bgHeader="cyan">
						<p>
							Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
							graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
							century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for
							use in a type specimen book.
						</p>
					</CollapsibleItem>
					<CollapsibleItem heading="Third Item" bgHeader="orange">
						<p>
							Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
							graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
							century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for
							use in a type specimen book.
						</p>
					</CollapsibleItem>
				</CollapsibleWrapper>
			</div>
			<CollapsibleWrapper>
				<CollapsibleItem heading="Spicy French Fries" icon={Fries} bgHeader="#a3cef1">
					<p>
						Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic
						or web designs. The passage is attributed to an unknown typesetter in the 15th century who is
						thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type
						specimen book.
					</p>
				</CollapsibleItem>
				<CollapsibleItem heading="Delicious Chicken Pizza" bgHeader="#6096ba" icon={Pizza}>
					<p>
						Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic
						or web designs. The passage is attributed to an unknown typesetter in the 15th century who is
						thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type
						specimen book.
					</p>
				</CollapsibleItem>
				<CollapsibleItem heading="Yummy Mexican Burger" bgHeader="#274c77" icon={Burger}>
					<p>
						Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic
						or web designs. The passage is attributed to an unknown typesetter in the 15th century who is
						thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type
						specimen book.
					</p>
				</CollapsibleItem>
			</CollapsibleWrapper>
		</React.Fragment>
	);
};

export default CollapsibleExample;
