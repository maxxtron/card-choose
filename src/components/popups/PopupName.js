import React from 'react';
import styled from 'styled-components';

const PopupNameStyled = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 40px;
	line-height: 48px;
	letter-spacing: -0.02em;
	color: #000000;
	margin-top: 8px;
`;

const PopupName = ({ children }) => {
	return <PopupNameStyled>{children}</PopupNameStyled>;
};

export default PopupName;
