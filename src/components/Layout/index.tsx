import { ReactNode } from 'react';
import useModalFunctions from '../../hooks/useModalFunctions';

import { StyledContainer, StyledMain } from './styled';

import Message from './Message';
import Header from './Header';
import Profile from './Profile';
import Nav from './Nav';
import Footer from './Footer';
import Modal from './Modal';
interface Props {
	children: ReactNode;
}

export default function Layout(props: Props) {
	const { initialModal, closeInitialModal } = useModalFunctions();

	return (
		<StyledContainer>
			<Message />
			<Modal
				isOpen={initialModal}
				title='Welcome to TwiiHub'
				description='What is your github user?'
				placeholder='Your github user...'
				submitClose={closeInitialModal}
			/>
			<Header />
			<Profile />
			<StyledMain>
				<Nav />
				{props.children}
			</StyledMain>
			<Footer />
		</StyledContainer>
	);
}
