import styled from 'styled-components';
import React from 'react';

const PriceImgStyled = styled.img`
	width: 17px;
	height: 35px;
	margin-top: 13px;
	margin-right: 4px;
`;

const PriceImg = () => {
	return <PriceImgStyled src='/icons/dollar.svg' alt='price' />;
};

export default PriceImg;
