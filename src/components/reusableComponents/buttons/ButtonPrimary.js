import React from 'react';
import styled from 'styled-components';

const ButtonPrimaryStyled = styled.button`
	margin: ${({ m }) => m};
	background: #4bcfa0;
	max-width: ${({ maxWidth }) => maxWidth};
	width: 100%;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	height: 56px;
	letter-spacing: 0.04em;
	text-transform: ${({ tt }) => tt};
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: none;
	color: #ffffff;
`;

const ButtonPrimary = ({ children, maxWidth, tt, m, onClick, type }) => {
	return (
		<ButtonPrimaryStyled
			maxWidth={maxWidth}
			tt={tt}
			m={m}
			onClick={onClick}
			type={type}>
			{children}
		</ButtonPrimaryStyled>
	);
};

export default ButtonPrimary;
