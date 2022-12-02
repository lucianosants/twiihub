import Head from 'next/head';
import Repository from '../components/Layout/Repository';

export default function Home() {
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

			<section>
				<Repository
					name='twiihub'
					description='Uma página de perfil usando informações do github e criada com NextJS'
					language='TypeScript'
					watchers={0}
					html_url='https://github.com/lucianosants/twiihub'
				/>
			</section>
		</>
	);
}
