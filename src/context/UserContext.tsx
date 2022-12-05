import { createContext, useState } from 'react';

interface ProviderProps {
	children: React.ReactNode;
	initialValue: string;
}

interface ProviderWrapperProps {
	children: React.ReactNode;
}

export const UserContext = createContext({
	user: '',
	setUser: (value: string) => {
		return value;
	},
});

export function UserProvider({ children, initialValue }: ProviderProps) {
	const [value, setValue] = useState(initialValue);

	function handleSetValue(value: string): string {
		const enviar = setValue(value);
		return value;
	}

	return (
		<UserContext.Provider value={{ user: value, setUser: handleSetValue }}>
			{children}
		</UserContext.Provider>
	);
}

export function UserProviderWrapper({ children }: ProviderWrapperProps) {
	return <UserProvider initialValue=''>{children}</UserProvider>;
}
