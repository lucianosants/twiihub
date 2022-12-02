import styled from 'styled-components';

const StyledRepository = styled.article`
	border: 1px solid ${({ theme }) => theme.colors.BORDER};
	background-color: ${({ theme }) => theme.colors.BG_L2};
	border-radius: 12px;

	display: flex;
	justify-content: space-between;
	gap: 4rem;
	padding: 2rem 2.6rem;
`;

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.6rem;
`;

const StyledName = styled.h4`
	border-bottom: 1px solid ${({ theme }) => theme.colors.BORDER};
	padding-bottom: 2.3rem;
	font-size: 1.4rem;
	font-weight: 600;
	text-transform: uppercase;
`;

const StyledDescription = styled.p`
	font-size: 1.2rem;
	color: ${({ theme }) => theme.colors.TEXT_L2};
	line-height: 1.5rem;
`;

const StyledLanguage = styled(StyledDescription)`
	color: var(--brand);
	font-weight: 600;
`;

const StyledWatchers = styled(StyledDescription)`
	font-weight: 600;
`;

const StyledLink = styled.div`
	display: flex;
	align-items: center;
	a {
		color: var(--brand);

		&:hover,
		&:focus {
			color: ${({ theme }) => theme.colors.TEXT_L2};
		}
	}
`;

export {
	StyledRepository,
	StyledContent,
	StyledLink,
	StyledName,
	StyledDescription,
	StyledLanguage,
	StyledWatchers,
};
