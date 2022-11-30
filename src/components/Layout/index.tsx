import { ReactNode } from 'react';
import { StyledContainer } from './styled';
interface Props {
	children: ReactNode;
}

export default function Layout(props: Props) {
	return (
		<StyledContainer>
			<main>{props.children}</main>
		</StyledContainer>
	);
}
