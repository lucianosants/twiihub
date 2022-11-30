import { ReactNode } from 'react';
import Header from './Header';
import { StyledContainer } from './styled';
interface Props {
	children: ReactNode;
}

export default function Layout(props: Props) {
	return (
		<StyledContainer>
			<Header />
			<main>{props.children}</main>
		</StyledContainer>
	);
}
