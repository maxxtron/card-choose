import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const InputStyledContainer = styled.div`
	position: relative;
	margin-top: ${({ mt }) => mt};
	max-width: 288px;
	width: 100%;
	height: 56px;
`;
const InputStyled = styled.input`
	padding: 16px 50px 16px 16px;
	height: 100%;
	width: 100%;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: -0.02em;
	border: ${({ validate, newOpen }) =>
		newOpen
			? '1px solid rgba(0, 0, 0, 0.2)'
			: validate
			? '1px solid #E43F3F'
			: '1px solid #4BCFA0'};
	border-radius: 16px;
	outline: none;

	::placeholder {
		color: rgba(0, 0, 0, 0.5);
	}
`;
const HelpText = styled.div`
	margin-top: 2px;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
	color: #e43f3f;
`;
const ValidImg = styled.img`
	position: absolute;
	top: 16px;
	right: 16px;
`;

const InputText = ({
	value,
	setValue,
	placeholder,
	mt,
	errorMessage,
	validate,
	newOpen,
	setNewOpen,
}) => {
	const handleValue = (e) => {
		setValue(e.target.value);
		setNewOpen(false);
	};
	return (
		<>
			<InputStyledContainer mt={mt}>
				<InputStyled
					value={value}
					onChange={(e) => handleValue(e)}
					placeholder={placeholder}
					validate={validate && errorMessage}
					newOpen={newOpen}
				/>
				{errorMessage && validate ? (
					<ValidImg src='/icons/error.svg' alt='not valid' />
				) : (
					<></>
				)}
			</InputStyledContainer>
			{errorMessage && validate ? (
				<HelpText>{errorMessage}</HelpText>
			) : (
				''
			)}
		</>
	);
};

export default InputText;
