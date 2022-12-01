import { ReactNode } from 'react';
import { StyledContainer } from './styled';

import Header from './Header';
import Profile from './Profile';
interface Props {
	children: ReactNode;
}

export default function Layout(props: Props) {
	return (
		<StyledContainer>
			<Header />
			<Profile />
			<main>{props.children}</main>
		</StyledContainer>
	);
}
