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

	display: flex;
	align-items: center;
	justify-content: center;

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

	@media (max-width: 620px) {
		top: auto;
		max-width: 100%;
	}
`;

const StyledLoadingRepository = styled(StyledLoading)`
	max-width: 100%;
	margin-top: 3rem;
	z-index: -1;
`;

const StyledUserPage = styled(StyledHome)`
	border: 1px solid ${({ theme }) => theme.colors.BORDER};
	border-radius: 12px;
	background-color: ${({ theme }) => theme.colors.BG_L2};
	gap: 0;
`;

const StyledWrapper = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.colors.BORDER};

	div {
		padding: 2.6rem;

		h2 {
			font-size: 1.8rem;

			strong {
				color: var(--brand);
			}
		}

		img {
			max-width: 8rem;
			clip-path: circle();
			border-radius: 100%;
			border: 3px solid var(--brand);
			margin-bottom: 1.3rem;
		}

		.user__name {
			font-weight: 600;
		}

		.user__username {
			font-size: 1.2rem;
			font-weight: 600;
			color: ${({ theme }) => theme.colors.TEXT_L2};
		}

		.user__bio {
			width: 100%;
			margin-top: 1.2rem;
			font-size: 1.3rem;
			line-height: 1.2;
			color: ${({ theme }) => theme.colors.TEXT_L2};
		}
	}

	.user__count {
		border-top: 1px solid ${({ theme }) => theme.colors.BORDER};
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;

		.user__count--main {
			display: flex;
			flex-wrap: wrap;

			.user__main--col {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 1.2rem;
				text-align: center;

				strong {
					font-size: 1.4rem;
				}

				span {
					color: ${({ theme }) => theme.colors.TEXT_L2};
					font-size: 1.2rem;
					font-weight: 600;
				}
			}
		}
	}
`;

const StyledUserFooter = styled.div`
	padding: 2.6rem;

	div {
		display: flex;
		justify-content: space-between;
		width: 100%;

		a {
			display: flex;
			gap: 0.5rem;
			color: var(--brand);
			text-decoration: none;
			transition: all 0.3s;
			font-size: 1.4rem;

			&:hover,
			&:focus {
				color: ${({ theme }) => theme.colors.TEXT_L2};
			}
		}
	}
`;

export {
	StyledHome,
	StyledAbout,
	StyledLoading,
	StyledLoadingRepository,
	StyledUserPage,
	StyledWrapper,
	StyledUserFooter,
};
