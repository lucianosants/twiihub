import { useState, useEffect } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { LinkFooter } from './FooterLinks';

export default function Footer() {
	const [currentYear, setCurrentYear] = useState(0);
	const year = new Date().getFullYear();

	useEffect(() => {
		setCurrentYear(year);
	}, [year]);

	return (
		<footer>
			<LinkFooter
				href='https://github.com/lucianosants'
				icon={<AiFillGithub size={22} />}
			/>

			<LinkFooter
				href='https://www.linkedin.com/in/lucianosants/'
				icon={<AiFillLinkedin size={22} />}
			/>

			<LinkFooter
				href='https://instagram.com/lucianosants.dev'
				icon={<AiFillInstagram size={22} />}
			/>

			<p>lucianosants © {currentYear}</p>
		</footer>
	);
}
