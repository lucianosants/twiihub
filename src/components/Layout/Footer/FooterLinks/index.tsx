import { ReactNode } from 'react';

import { StyledLinkFooter } from './styled';
interface Props {
	href: string;
	icon: ReactNode;
}

export function LinkFooter({ href, icon }: Props) {
	return (
		<StyledLinkFooter href={href} target='_blank' rel='noreferrer'>
			{icon}
		</StyledLinkFooter>
	);
}
