import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import Name from './Name';
import Price from './Price';
import ButtonBuy from '../reusableComponents/buttons/ButtonBuy';
import { useDispatch } from 'react-redux';
import { getList } from '../../redux/actions/listAction';

const CardStyled = styled.div`
	max-width: 352px;
	width: 100%;
	padding: 32px;
	background: #ffffff;
	border-radius: 24px;
`;
const PriceBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;

const Card = ({ items, setShow }) => {
	const dispatch = useDispatch();
	const handleOpenPopup = () => {
		dispatch(getList(items));
		setShow(true);
	};

	return (
		<CardStyled>
			<Category category={items.category} />
			<Name name={items.name} />
			<PriceBlock>
				<Price price={items.price} />
				<ButtonBuy onClick={handleOpenPopup}>Buy</ButtonBuy>
			</PriceBlock>
		</CardStyled>
	);
};

export default Card;
