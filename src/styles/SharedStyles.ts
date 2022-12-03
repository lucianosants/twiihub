import styled from 'styled-components';

const StyledHome = styled.section`
	margin-top: 3rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

const StyledAbout = styled(StyledHome)`
	background-color: ${({ theme }) => theme.colors.BG_L2};
	border: 1px solid ${({ theme }) => theme.colors.BORDER};
	border-radius: 12px;
	padding: 2.5rem;

	p {
		color: ${({ theme }) => theme.colors.TEXT_L2};
		line-height: 1.6;
		font-size: 1.4rem;
	}

	.about__highlight {
		padding: 0.5rem;
		text-decoration: 2px solid underline;

		&:hover {
			color: var(--brand);
		}
	}

	a {
		color: var(--brand);
		font-size: 1.2rem;

		&:hover,
		&:focus {
			color: ${({ theme }) => theme.colors.TEXT_L2};
		}
	}
`;

export { StyledHome, StyledAbout };
