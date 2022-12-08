import styled from 'styled-components';

const StyledProfile = styled.aside`
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

	.profile__link {
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

	@media (max-width: 620px) {
		top: auto;
		max-width: 100%;
	}
`;

const StyledProfilePic = styled.div`
	margin-bottom: 1.2rem;

	img {
		max-width: 8rem;
		clip-path: circle();
		border-radius: 100%;
		border: 3px solid var(--brand);
	}
`;

const StyledProfileName = styled.div`
	padding: 0 2.6rem;

	.profile__name {
		font-weight: 600;
	}

	.profile__username {
		font-size: 1.2rem;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.TEXT_L2};
	}
`;

const StyledProfileBio = styled.p`
	width: 100%;
	padding: 0 2.6rem;
	margin-top: 1.2rem;
	font-size: 1.3rem;
	line-height: 1.2;
	color: ${({ theme }) => theme.colors.TEXT_L2};
`;

const StyledProfileLocation = styled.div`
	margin-top: 1.8rem;
	padding: 0 2.6rem;
	width: 100%;

	.profile__location--title {
		font-weight: 600;
		font-size: 1.4rem;
	}

	.profile__location--description {
		font-size: 1.2rem;
		color: ${({ theme }) => theme.colors.TEXT_L2};
	}
`;

const StyledProfileCount = styled.div`
	width: 100%;
	padding: 2rem 0;
	margin: 3rem 0;
	border-block: 1px solid ${({ theme }) => theme.colors.BORDER};

	display: flex;
	align-items: center;
	justify-content: space-evenly;

	.profile__count {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.2rem;

		.profile__count--number {
			color: ${({ theme }) => theme.colors.TEXT_L2};
			font-size: 1.2rem;
		}

		.profile__count--title {
			font-weight: 600;
			font-size: 1.4rem;
		}
	}

	.profile__count--separator {
		background-color: ${({ theme }) => theme.colors.BORDER};
		width: 0.1rem;
		height: 5rem;
	}
`;

export {
	StyledProfile,
	StyledProfilePic,
	StyledProfileBio,
	StyledProfileName,
	StyledProfileLocation,
	StyledProfileCount,
};
