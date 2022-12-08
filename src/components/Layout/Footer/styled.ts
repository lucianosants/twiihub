import styled from 'styled-components';

const StyledFooter = styled.footer`
	border: 1px solid ${({ theme }) => theme.colors.BORDER};
	border-radius: 12px;
	height: 13.5rem;
	width: 100%;
	max-width: 16rem;
	background-color: ${({ theme }) => theme.colors.BG_L2};

	position: sticky;
	top: calc(7.5rem + 1.5rem);

	display: flex;
	flex-direction: column;
	justify-content: center;

	gap: 3rem;
	padding: 0 1.8rem;

	.footer__links {
		display: flex;
		justify-content: space-between;
	}

	.footer__separator {
		width: 100%;
		height: 0.1rem;
		background-color: ${({ theme }) => theme.colors.BORDER};
	}

	.footer__copyright {
		font-size: 1.2rem;
		color: ${({ theme }) => theme.colors.TEXT_L2};
	}

	@media (max-width: 620px) {
		max-width: 100%;
		margin-bottom: 1.8rem;

		.footer__copyright {
			text-align: center;
		}
	}
`;

export { StyledFooter };
