import React from 'react';
import styled from 'styled-components';

const SpinnerStyled = styled.div`
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.8);
`;
const SpinnerImg = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Spinner = () => {
	return (
		<SpinnerStyled>
			<SpinnerImg src='/icons/spinner.svg' alt='loading' />
		</SpinnerStyled>
	);
};

export default Spinner;
