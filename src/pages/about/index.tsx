import { StyledAbout } from '../../styles/SharedStyles';

export default function About() {
	return (
		<StyledAbout>
			<h3>About page</h3>

			<h4>
				This project is designed to consume the{' '}
				<strong className='about__highlight'>github API</strong>.
			</h4>

			<p>
				Its purpose is to be a profile page based on{' '}
				<strong className='about__highlight'>Twitter</strong> layout
				with data brought from your{' '}
				<strong className='about__highlight'>Github</strong>.
			</p>

			<p>
				Created by{' '}
				<a
					href='https://github.com/lucianosants'
					target='_blank'
					rel='noreferrer'
				>
					lucianosants
				</a>
			</p>
			<p></p>
		</StyledAbout>
	);
}
