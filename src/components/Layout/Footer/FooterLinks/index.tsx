import { ReactNode } from 'react';

import { StyledLinkFooter } from './styled';
interface Props {
	href: string;
	icon: ReactNode;
	arial_label: string;
}

export function LinkFooter({ href, icon, arial_label }: Props) {
	return (
		<StyledLinkFooter
			href={href}
			target='_blank'
			rel='noreferrer'
			aria-label={arial_label}
		>
			{icon}
		</StyledLinkFooter>
	);
}
