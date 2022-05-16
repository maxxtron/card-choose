import React from 'react';
import styled from 'styled-components';

const ButtonBuyStyled = styled.div`
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	max-height: 56px;
	height: 100%;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: #4bcfa0;
	background: transparent;
	padding: 16px;
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: 1px solid rgba(0, 0, 0, 0.1);
	transition: all 0.2s ease;
	margin-bottom: 10px;
	&:hover {
		background: #50daa8;
		color: #ffffff;
		border: none;
	}
`;

const ButtonBuy = ({ children, onClick }) => {
	return <ButtonBuyStyled onClick={onClick}>{children}</ButtonBuyStyled>;
};
export default ButtonBuy;
