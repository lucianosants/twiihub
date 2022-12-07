import { useRouter } from 'next/router';
import { VscLinkExternal } from 'react-icons/vsc';

import {
	StyledUserFooter,
	StyledUserPage,
	StyledWrapper,
} from '../../../styles/SharedStyles';

interface ProfileProps {
	avatar_url: string;
	name: string;
	login: string;
}

export default function Search() {
	const { query } = useRouter();

	return (
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
						<img src='https://github.com/lucianosants.png' alt='' />

						<p className='user__name'>Luciano Santos</p>
						<p className='user__username'>lucianosants</p>
						<p className='user__bio'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Soluta, deleniti! Rem ad voluptatem unde
							explicabo commodi quidem?
						</p>
					</div>

					<div className='user__count'>
						<div className='user__count--main'>
							<div className='user__main--col'>
								<strong>0</strong>
								<span>Following</span>
							</div>
							<div className='user__main--col'>
								<strong>0</strong>
								<span>Followers</span>
							</div>

							<div className='user__main--col'>
								<strong>0</strong>
								<span>Public repositories</span>
							</div>
						</div>
					</div>
				</StyledWrapper>
			</div>

			<StyledUserFooter>
				<div>
					<a
						href='https://github.com/lucianosants'
						rel='noreferrer'
						target='_blank'
					>
						View profile on GitHub
						<VscLinkExternal />
					</a>

					<a
						href='https://github.com/lucianosants?tab=repositories'
						rel='noreferrer'
						target='_blank'
					>
						View all repositories on GitHub
						<VscLinkExternal />
					</a>
				</div>
			</StyledUserFooter>
		</StyledUserPage>
	);
}
