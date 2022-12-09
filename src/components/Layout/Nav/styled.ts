import styled from 'styled-components';

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 7px;
	height: 3.6rem;
	position: sticky;
	z-index: 2;
	top: calc(7.5rem + 1.5rem);
	background-color: ${({ theme }) => theme.colors.BG_L2};
	border: 1px solid ${({ theme }) => theme.colors.BORDER};

	a {
		color: ${({ theme }) => theme.colors.TEXT_L2};
		text-decoration: none;
		text-transform: uppercase;
		font-size: 1.3rem;
		letter-spacing: 0.1rem;
		padding: 0.5rem;
		border-radius: 7px;
		transition: all 0.3s;
		position: relative;

		&:hover,
		&:focus {
			color: var(--brand);
		}
	}

	.active {
		color: var(--brand);

		&::before {
			content: '';
			position: absolute;
			top: 0.2rem;
			left: 0rem;
			border-bottom: 3px solid var(--brand);
			width: 100%;
			height: 100%;
		}
	}

	@media (max-width: 620px) {
		top: calc(9rem + 1.5rem);
	}
`;

export { StyledNav };
