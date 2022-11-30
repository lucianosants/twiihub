import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>TwiiHub</title>
				<meta
					name='description'
					content='An app for you see a profile based from your github'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h2>TwiiHub</h2>
			</main>
		</div>
	);
}
