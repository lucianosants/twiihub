import type { AppProps } from 'next/app';
import { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import ProviderWrapper, { ThemeAppContext } from '../context/ThemeAppContext';
import GlobalStyles from '../styles/GlobalStyles';

import { dark, light } from '../styles/themes/generalThemes';

function MyApp({ Component, pageProps }: AppProps) {
	const context = useContext(ThemeAppContext);

	return (
		<>
			<ThemeProvider theme={context.theme === 'dark' ? dark : light}>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default function App(props: any) {
	return (
		<ProviderWrapper>
			<MyApp {...props} />
		</ProviderWrapper>
	);
}
