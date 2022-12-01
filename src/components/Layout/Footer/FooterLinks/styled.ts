import styled from 'styled-components';

const StyledLinkFooter = styled.a`
	color: ${({ theme }) => theme.colors.TEXT_L2};

	&:hover {
		color: var(--brand);
	}
`;

export { StyledLinkFooter };
