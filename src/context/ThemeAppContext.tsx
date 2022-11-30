import { createContext, useState } from 'react';

interface AppProviderProps {
	children: React.ReactNode;
	initialValue: string;
}

interface ProviderWrapperProps {
	children: React.ReactNode;
}

export const ThemeAppContext = createContext({
	theme: '',
});

export function ThemeAppProvider({ children, initialValue }: AppProviderProps) {
	const [theme, setTheme] = useState(initialValue);

	return (
		<ThemeAppContext.Provider value={{ theme: theme }}>
			{children}
		</ThemeAppContext.Provider>
	);
}

export default function ProviderWrapper({ children }: ProviderWrapperProps) {
	return <ThemeAppProvider initialValue='dark'>{children}</ThemeAppProvider>;
}
