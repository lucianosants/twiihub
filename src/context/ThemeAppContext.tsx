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
	toggleTheme: () => {},
});

export function ThemeAppProvider({ children, initialValue }: AppProviderProps) {
	const [theme, setTheme] = useState(initialValue);

	const handleToggleTheme = () => {
		if (theme === 'dark') setTheme('light');
		if (theme === 'light') setTheme('dark');
	};

	return (
		<ThemeAppContext.Provider
			value={{ theme: theme, toggleTheme: handleToggleTheme }}
		>
			{children}
		</ThemeAppContext.Provider>
	);
}

export default function ProviderWrapper({ children }: ProviderWrapperProps) {
	return <ThemeAppProvider initialValue='dark'>{children}</ThemeAppProvider>;
}
