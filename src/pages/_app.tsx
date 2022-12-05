import type { AppProps } from 'next/app';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';

import ProviderWrapper, { ThemeAppContext } from '../context/ThemeAppContext';
import { UserProviderWrapper } from '../context/UserContext';
import GlobalStyles from '../styles/GlobalStyles';

import { dark, light } from '../styles/themes/generalThemes';

function MyApp({ Component, pageProps }: AppProps) {
	const context = useContext(ThemeAppContext);

	return (
		<>
			<ThemeProvider theme={context.theme === 'dark' ? dark : light}>
				<GlobalStyles />

				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default function App(props: any) {
	return (
		<ProviderWrapper>
			<UserProviderWrapper>
				<MyApp {...props} />
			</UserProviderWrapper>
		</ProviderWrapper>
	);
}
