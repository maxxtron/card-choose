import React from 'react';
import styled from 'styled-components';

const PopupCategoryStyled = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: #000000;
	opacity: 0.5;
`;

const PopupCategory = ({ children }) => {
	return <PopupCategoryStyled>{children}</PopupCategoryStyled>;
};

export default PopupCategory;
