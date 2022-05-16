import React from 'react';
import styled from 'styled-components';
import Button from '../reusableComponents/buttons/ButtonBuy';
import ButtonBuy from '../reusableComponents/buttons/ButtonBuy';
import PriceImg from '../reusableComponents/PriceImg';

const PriceStyled = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
`;

const PriceText = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 60px;
	line-height: 72px;
	letter-spacing: -0.02em;
	color: #000;
`;

const Price = ({ price }) => {
	return (
		<PriceStyled>
			<PriceImg src='/icons/dollar.svg' alt='price' />
			<PriceText>{price}</PriceText>
		</PriceStyled>
	);
};

export default Price;
