import axios from 'axios';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';

import Repository from '../components/Layout/Repository';
import { UserContext } from '../context/UserContext';
import { messages } from '../data/app-messages';
import { StyledHome, StyledLoadingRepository } from '../styles/SharedStyles';

interface Repository {
	id: number;
	name: string;
	description: string;
	language: string;
	watchers: number;
	html_url: string;
}

export default function Home() {
	const [data, setData] = useState<Repository[]>([]);
	const [error, setError] = useState(false);
	const { user } = useContext(UserContext);

	const url = `https://api.github.com/users/${user}/repos`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(url);

				setData(data);

				setError(false);
			} catch (error) {
				setError(true);
			}
		};
		fetchData();
	}, [url]);

	return (
		<>
			<Head>
				<title>TwiiHub</title>
				<meta
					name='description'
					content='An app for you see a profile based from your github'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{error ? (
				<StyledLoadingRepository>
					{messages.error[2]}
				</StyledLoadingRepository>
			) : (
				<StyledHome>
					{data.map((repo) => {
						return (
							<article key={repo.id}>
								<Repository
									name={repo.name}
									description={repo.description}
									language={repo.language}
									watchers={repo.watchers}
									html_url={repo.html_url}
								/>
							</article>
						);
					})}
				</StyledHome>
			)}
		</>
	);
}
