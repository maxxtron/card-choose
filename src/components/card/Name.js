import React from 'react';
import styled from 'styled-components';

const NameStyled = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 40px;
	line-height: 48px;
	letter-spacing: -0.02em;
	color: #000;
	margin-top: 8px;
`;

const Name = ({ name }) => {
	return <NameStyled>{name}</NameStyled>;
};

export default Name;
