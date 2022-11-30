import { ReactNode } from 'react';
interface Props {
	children: ReactNode;
}

export default function Layout(props: Props) {
	return (
		<div>
			<main>{props.children}</main>
		</div>
	);
}
