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

const StyledLoading = styled.aside`
	width: 100%;
	min-height: 20vw;
	position: relative;
	// ...

	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 2rem 0;
	max-width: 25.5rem;
	height: fit-content;
	border-radius: 12px;
	border: 1px solid ${({ theme }) => theme.colors.BORDER};
	background-color: ${({ theme }) => theme.colors.BG_L2};

	position: sticky;
	top: calc(7.5rem + 1.5rem);

	&::after {
		content: '';
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background: var(--brand);
		border-radius: 12px;
		animation: loading 3s alternate infinite;
	}

	@keyframes loading {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0.1;
		}
	}
`;

const StyledLoadingRepository = styled(StyledLoading)`
	max-width: 100%;
	margin-top: 3rem;
	z-index: -1;
`;

export { StyledHome, StyledAbout, StyledLoading, StyledLoadingRepository };
