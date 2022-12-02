import { ReactNode } from 'react';

interface Props {
	onClick: () => void;
	ariaLabel?: string;
	children: ReactNode;
	id?: string;
}

export default function Button({ onClick, ariaLabel, children, id }: Props) {
	return (
		<button type='button' aria-label={ariaLabel} onClick={onClick} id={id}>
			{children}
		</button>
	);
}
