import styled from 'styled-components';

const StyledHeaderWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	height: 7.4rem;
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.BG_L1};
	box-shadow: 0 0 1px ${({ theme }) => theme.colors.BORDER};
`;

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 123rem;
	padding: 0 1.8rem;
	margin: 0 auto;
	width: 100%;
`;

const StyledBrand = styled.div`
	display: flex;
	height: 3.7rem;
	align-items: center;
	gap: 5.3rem;

	form {
		width: 26rem;
		height: 4rem;
		display: flex;
		justify-content: space-between;
		border: 1px solid ${({ theme }) => theme.colors.BORDER};
		border-radius: 7px;

		input {
			background: ${({ theme }) => theme.colors.BG_L2};
			width: 100%;
			height: 100%;
			padding: 1.3rem;
			border-radius: 7px 0 0 7px;
			color: ${({ theme }) => theme.colors.TEXT_L1};
			border: 1px solid ${({ theme }) => theme.colors.BORDER};
			transition: all 0.3s;

			&::placeholder {
				color: ${({ theme }) => theme.colors.TEXT_L2};
				font-size: 1.2rem;
			}
		}

		input:focus,
		button:focus {
			border: 1px solid var(--brand);
			box-shadow: 0 0 12px var(--brand);
		}

		button {
			background-color: var(--brand);
			border: 1px solid var(--brand);
			border-radius: 0 7px 7px 0;
			width: 5.5rem;

			svg {
				fill: ${({ theme }) => theme.colors.BG_L1};
			}
		}
	}
`;

const StyledSettings = styled.div`
	display: flex;
	gap: 2.9rem;

	button {
		background: transparent;
		border: none;
		cursor: pointer;

		svg {
			fill: ${({ theme }) => theme.colors.TEXT_L1};
		}

		&:focus,
		&:hover {
			svg {
				fill: var(--brand);
			}
		}
	}

	#btn__toggle {
		color: ${({ theme }) => theme.colors.TEXT_L2};
		border: 2px solid ${({ theme }) => theme.colors.BORDER};
		border-radius: 7px;
		padding: 0.5rem 1rem;
	}
`;

export { StyledHeader, StyledBrand, StyledSettings, StyledHeaderWrapper };
