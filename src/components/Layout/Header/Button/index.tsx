import { ReactNode } from 'react';

interface Props {
	onClick: () => void;
	ariaLabel?: string;
	children: ReactNode;
}

export default function Button({ onClick, ariaLabel, children }: Props) {
	return (
		<button type='button' aria-label={ariaLabel} onClick={onClick}>
			{children}
		</button>
	);
}
