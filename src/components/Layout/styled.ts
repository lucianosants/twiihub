import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 100%;
	max-width: 123rem;
	margin: 0 auto;
	padding: 0 1.8rem;
	margin-top: calc(7.4rem + 3.1rem);

	display: flex;
	justify-content: space-between;
	gap: 3rem;

	@media (max-width: 960px) {
		margin-top: calc(10.4rem + 3.1rem);
		flex-direction: column;
	}
`;

const StyledMain = styled.main`
	width: 100%;
	margin: 0 auto;
`;

export { StyledContainer, StyledMain };
