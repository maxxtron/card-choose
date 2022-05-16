import React from 'react';
import styled from 'styled-components';
import PriceImg from '../reusableComponents/PriceImg';

const PopupPriceStyled = styled.div`
	display: flex;
	margin-top: 16px;
	@media (max-width: 768px) {
		margin-top: 0px;
	}
`;

const PopupPriceText = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 60px;
	line-height: 72px;
	letter-spacing: -0.02em;
	color: #000000;
	@media (max-width: 768px) {
		font-size: 50px;
	}
`;

const PopupPrice = ({ children }) => {
	return (
		<PopupPriceStyled>
			<PriceImg src='/icons/dollar.svg' alt='price' />
			<PopupPriceText>{children}</PopupPriceText>
		</PopupPriceStyled>
	);
};

export default PopupPrice;
