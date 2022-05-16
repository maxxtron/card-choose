import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
	display: flex;
	//justify-content: space-between;
	margin: 0 auto;
	max-width: 1136px;
	flex-wrap: wrap;
	gap: 40px;
	width: 100%;
	@media (max-width: 1200px) {
		justify-content: center;
	}
`;

const Container = ({ children }) => {
	return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
