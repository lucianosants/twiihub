import { ReactNode } from 'react';
import { StyledContainer, StyledMain } from './styled';

import Header from './Header';
import Profile from './Profile';
import Nav from './Nav';
interface Props {
	children: ReactNode;
}

export default function Layout(props: Props) {
	return (
		<StyledContainer>
			<Header />
			<Profile />
			<StyledMain>
				<Nav />
				{props.children}
			</StyledMain>
		</StyledContainer>
	);
}
