import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { VscLinkExternal } from 'react-icons/vsc';
import { UserContext } from '../../../context/UserContext';

import {
	StyledProfile,
	StyledProfilePic,
	StyledProfileName,
	StyledProfileBio,
	StyledProfileLocation,
	StyledProfileCount,
} from './styled';

interface ProfileProps {
	avatar_url: string;
	name: string;
	login: string;
	bio: string;
	location: string;
	following: number;
	followers: number;
	html_url: string;
}

export default function Profile() {
	const [data, setData] = useState<ProfileProps>({
		avatar_url: '',
		name: '',
		login: '',
		bio: '',
		location: '',
		following: 0,
		followers: 0,
		html_url: '',
	});

	const { user } = useContext(UserContext);

	const url = `https://api.github.com/users/${user}`;

	useEffect(() => {
		const getFetch = async () => {
			const { data } = await axios.get(url);

			const user: ProfileProps = {
				avatar_url: data.avatar_url,
				name: data.name,
				login: data.login,
				bio: data.bio,
				location: data.location,
				following: data.following,
				followers: data.followers,
				html_url: data.html_url,
			};

			setData(user);
		};

		getFetch();
	}, [url]);

	return (
		<StyledProfile>
			<StyledProfilePic>
				{/* eslint-disable-next-line */}
				<img
					src={data.avatar_url}
					alt={`profile pic of ${data.name}`}
				/>
			</StyledProfilePic>

			<StyledProfileName>
				{!data.name && <p className='profile__name'>Name: not found</p>}
				<p className='profile__name'>{data.name}</p>

				{!data.login && (
					<p className='profile__username'>Username: not found</p>
				)}
				<p className='profile__username'>{data.login}</p>
			</StyledProfileName>

			<StyledProfileBio>
				{!data.bio && <span>Bio: bio not found or do not have...</span>}

				{data.bio}
			</StyledProfileBio>

			<StyledProfileLocation>
				<p className='profile__location--title'>Location:</p>

				{!data.location && (
					<p className='profile__location--description'>
						Location: not found or do not have
					</p>
				)}
				<p className='profile__location--description'>
					{data.location}
				</p>
			</StyledProfileLocation>

			<StyledProfileCount>
				<div className='profile__count'>
					<span className='profile__count--number'>
						{data.following}
					</span>
					<span className='profile__count--title'>Following</span>
				</div>

				<div className='profile__count--separator'></div>

				<div className='profile__count'>
					<span className='profile__count--number'>
						{data.followers}
					</span>
					<span className='profile__count--title'>Followers</span>
				</div>
			</StyledProfileCount>

			<div>
				{data.html_url && (
					<a
						className='profile__link'
						href={data.html_url}
						target='_blank'
						rel='noreferrer'
					>
						View on GitHub
						<VscLinkExternal />
					</a>
				)}
			</div>
		</StyledProfile>
	);
}
