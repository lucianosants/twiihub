import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			BG_L1: string;
			BG_L2: string;
			TEXT_L1: string;
			TEXT_L2: string;
			BORDER: string;
		};
	}
}
