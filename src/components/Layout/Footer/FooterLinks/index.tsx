import { ReactNode } from 'react';

interface Props {
	href: string;
	icon: ReactNode;
}

export function LinkFooter({ href, icon }: Props) {
	return (
		<a href={href} target='_blank' rel='noreferrer'>
			{icon}
		</a>
	);
}
