import { VscLinkExternal } from 'react-icons/vsc';

import {
	StyledProfile,
	StyledProfilePic,
	StyledProfileName,
	StyledProfileBio,
	StyledProfileLocation,
	StyledProfileCount,
} from './styled';

export default function Profile() {
	return (
		<StyledProfile>
			<StyledProfilePic>
				{/* eslint-disable-next-line */}
				<img src='https://github.com/lucianosants.png' alt='' />
			</StyledProfilePic>

			<StyledProfileName>
				<p className='profile__name'>Name...</p>
				<p className='profile__username'>username...</p>
			</StyledProfileName>

			<StyledProfileBio>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
				ipsum dolor sit amet consectetur adipisicing elit. A ut facilis
				ullam.
			</StyledProfileBio>

			<StyledProfileLocation>
				<p className='profile__location--title'>Location:</p>
				<p className='profile__location--description'>
					Lorem ipsum - dolor
				</p>
			</StyledProfileLocation>

			<StyledProfileCount>
				<div className='profile__count'>
					<span className='profile__count--number'>...</span>
					<span className='profile__count--title'>Following</span>
				</div>

				<div className='profile__count--separator'></div>

				<div className='profile__count'>
					<span className='profile__count--number'>...</span>
					<span className='profile__count--title'>Followers</span>
				</div>
			</StyledProfileCount>

			<div>
				<a className='profile__link' href=''>
					View on GitHub
					<VscLinkExternal />
				</a>
			</div>
		</StyledProfile>
	);
}
