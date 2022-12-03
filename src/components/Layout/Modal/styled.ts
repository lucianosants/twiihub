import styled from 'styled-components';

interface Props {
	isVisible: boolean;
}

const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 3;
	display: flex;
	justify-content: center;
	padding-top: 12.5rem;
	padding-inline: 1rem;
	transition: 0.3s ease-out;

	opacity: ${({ isVisible }: Props) => (isVisible ? 1 : 0)};
	visibility: ${({ isVisible }: Props) => (isVisible ? 'visible' : 'hidden')};
`;

const StyledMask = styled.div`
	background-color: ${({ theme }) => theme.colors.BG_L2};
	opacity: 0.9;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
`;

const StyledBody = styled.div`
	z-index: 4;
	height: 27.3rem;
	width: 100%;
	max-width: 62rem;

	border-radius: 12px;
	background-color: ${({ theme }) => theme.colors.BG_L1};
	border: 1px solid ${({ theme }) => theme.colors.BORDER};

	transition: 0.5s ease-out;
	opacity: ${({ isVisible }: Props) => (isVisible ? 1 : 0)};
	transform: translateY(
		${({ isVisible }: Props) => (isVisible ? '0%' : '-100%')}
	);
`;

const StyledHeader = styled.header`
	border-bottom: 1px solid ${({ theme }) => theme.colors.BORDER};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2.3rem 0;
	position: relative;

	.modal__title {
		font-weight: 700;
		font-size: 1.8rem;
	}

	.modal__icon {
		position: absolute;
		right: 3rem;

		background-color: var(--brand);
		padding: 0.5rem;
		border: none;
		border-radius: 7px;
		color: ${({ theme }) => theme.colors.BG_L1};
		cursor: pointer;
		display: flex;

		&:hover,
		&:focus {
			filter: brightness(1.1);
		}
	}
`;

const StyledContent = styled.div`
	width: 90%;
	max-width: 38rem;
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 19rem;
	gap: 2.3rem;

	.modal__description {
		font-size: 1.5rem;
		color: ${({ theme }) => theme.colors.TEXT_L2};
	}

	form {
		display: flex;
		width: 100%;
		height: 4.7rem;
		border-radius: 7px;
		border: 1px solid ${({ theme }) => theme.colors.BORDER};

		input {
			background: ${({ theme }) => theme.colors.BG_L2};
			border: 1px solid ${({ theme }) => theme.colors.BORDER};
			width: 100%;
			padding: 1.5rem 1.2rem;
			color: ${({ theme }) => theme.colors.TEXT_L1};
			font-size: 1.2rem;

			&::placeholder {
				color: ${({ theme }) => theme.colors.TEXT_L2};
			}
		}

		/* ... */

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
			cursor: pointer;

			&:hover {
				filter: brightness(1.1);
			}

			svg {
				fill: ${({ theme }) => theme.colors.BG_L1};
			}
		}
	}
`;

export { StyledModal, StyledMask, StyledBody, StyledHeader, StyledContent };
