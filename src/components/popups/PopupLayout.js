import React, { useEffect } from 'react';
import styled from 'styled-components';
const PopupLayoutStyled = styled.div`
	display: ${({ show }) => (show ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.8);
`;

const PopupBlockWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 384px;
	width: 100%;
	background: #ffffff;
	box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.2);
	border-radius: 24px;
	@media (max-width: 768px) {
		width: 80%;
	}
`;
const PopupBlock = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	padding: 54px 46px 66px;
	background: #fafafa;
	border-radius: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 425px) {
		padding: 40px 23px 40px;
	}
`;
const IconWrapper = styled.img`
	position: absolute;
	top: -15px;
	right: -15px;
	cursor: pointer;
`;

const PopupLayout = ({ children, show, setShow }) => {
	useEffect(() => {
		show
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = '');
	}, [show]);
	return (
		<PopupLayoutStyled show={show}>
			<PopupBlockWrapper>
				<PopupBlock>
					<IconWrapper
						onClick={() => setShow(false)}
						src='/icons/icon-close.svg'
						alt='close'
					/>
					{children}
				</PopupBlock>
			</PopupBlockWrapper>
		</PopupLayoutStyled>
	);
};

export default PopupLayout;
