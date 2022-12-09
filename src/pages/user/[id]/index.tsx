import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { VscLinkExternal } from 'react-icons/vsc';
import { messages } from '../../../data/app-messages';

import {
	StyledLoadingRepository,
	StyledUserFooter,
	StyledUserPage,
	StyledWrapper,
} from '../../../styles/SharedStyles';
import { messageType } from '../../../utils/message-type';

interface ProfileProps {
	avatar_url: string;
	name: string;
	login: string;
	bio: string;
	following: number;
	followers: number;
	html_url: string;
	repos: string;
	public_repos: number;
}

export default function Search() {
	const [data, setData] = useState<ProfileProps>({
		avatar_url: '',
		name: '',
		login: '',
		bio: '',
		following: 0,
		followers: 0,
		html_url: '',
		repos: '',
		public_repos: 0,
	});
	const [error, setError] = useState(false);
	const { query } = useRouter();

	const url = `https://api.github.com/users/${query.id}`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(url);

				const user: ProfileProps = {
					avatar_url: data.avatar_url,
					name: data.name,
					login: data.login,
					bio: data.bio,
					following: data.following,
					followers: data.followers,
					html_url: data.html_url,
					repos: data.login,
					public_repos: data.public_repos,
				};

				messageType('success', messages.success[1]);
				setError(false);
				setData(user);
			} catch (error) {
				messageType('error', messages.error[2]);
				setError(true);
			}
		};

		fetchData();
	}, [url]);

	return (
		<>
			<Head>
				<title>User {data.login}</title>
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
				<StyledUserPage>
					<StyledWrapper>
						<div>
							<h2>
								Result for: <strong>{query.id}</strong>
							</h2>
						</div>
					</StyledWrapper>

					<div>
						<StyledWrapper>
							<div>
								{/* eslint-disable-next-line */}
								<img
									src={data.avatar_url}
									alt={`Profile pic of ${data.name}`}
								/>

								<p className='user__name'>{data.name}</p>
								<p className='user__username'>{data.login}</p>
								<p className='user__bio'>{data.bio}</p>
							</div>

							<div className='user__count'>
								<div className='user__count--main'>
									<div className='user__main--col'>
										<strong>{data.following}</strong>
										<span>Following</span>
									</div>
									<div className='user__main--col'>
										<strong>{data.followers}</strong>
										<span>Followers</span>
									</div>

									<div className='user__main--col col--public'>
										<strong>{data.public_repos}</strong>
										<span>Public repositories</span>
									</div>
								</div>
							</div>
						</StyledWrapper>
					</div>

					<StyledUserFooter>
						<div>
							<a
								href={data.html_url}
								rel='noreferrer'
								target='_blank'
							>
								View profile on GitHub
								<VscLinkExternal />
							</a>

							<a
								href={`https://github.com/${data.login}?tab=repositories`}
								rel='noreferrer'
								target='_blank'
							>
								View all repositories on GitHub
								<VscLinkExternal />
							</a>
						</div>
					</StyledUserFooter>
				</StyledUserPage>
			)}
		</>
	);
}
