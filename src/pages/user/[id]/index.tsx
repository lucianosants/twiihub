import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { VscLinkExternal } from 'react-icons/vsc';

import {
	StyledLoadingRepository,
	StyledUserFooter,
	StyledUserPage,
	StyledWrapper,
} from '../../../styles/SharedStyles';

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

				setError(false);
				setData(user);
			} catch (error) {
				setError(true);
			}
		};

		fetchData();
	}, [url]);

	return (
		<>
			{error ? (
				<StyledLoadingRepository>
					User not found!
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

									<div className='user__main--col'>
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
