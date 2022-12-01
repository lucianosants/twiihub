import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Nav() {
	const [currentPage, setCurrentPage] = useState('/');
	const router = useRouter();

	useEffect(() => {
		const repo = document.querySelector('#repos') as HTMLAnchorElement;
		const about = document.querySelector('#about') as HTMLAnchorElement;

		if (router.route === '/') {
			repo.classList.add('active');
			about.classList.remove('active');
			setCurrentPage('/');
		}

		if (router.route === '/about') {
			about.classList.add('active');
			repo.classList.remove('active');
			setCurrentPage('/about');
		}
	}, [router.route]);

	return (
		<nav>
			<Link id='repos' href='/'>
				Repositories
			</Link>
			<Link id='about' href='/about'>
				About project
			</Link>
		</nav>
	);
}
