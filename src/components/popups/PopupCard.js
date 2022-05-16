import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PopupCategory from './PopupCategory';
import PopupName from './PopupName';
import PopupPrice from './PopunPrice';
import InputText from '../reusableComponents/inputs/InputText';
import ButtonPrimary from '../reusableComponents/buttons/ButtonPrimary';
import { useSelector } from 'react-redux';
import { validatePhone } from '../../utils/validatePhone';
import { validateName } from '../../utils/validateName';
import { useValidate } from '../../hooks/useValidate';

const FormStyled = styled.form`
	width: 100%;
`;

const PopupCard = ({ setShow, show }) => {
	const { list } = useSelector((state) => state.cardReducer);

	const [validate, setValidate] = useState(false);

	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const phoneValid = useValidate(number, validatePhone, validate);
	const nameValid = useValidate(name, validateName, validate);
	const [newOpen, setNewOpen] = useState(true);

	const onSubmit = (e) => {
		e.preventDefault();
		setValidate(true);
		setNewOpen(false);
		if (validatePhone(number) || validateName(name)) {
			return;
		} else {
			console.log(
				`Product: ${Object?.keys(list)}: ${Object?.values(
					list
				)} , name: ${name}, number: ${number}`
			);
			setShow(false);
			setName('');
			setNumber('');
			setValidate(true);
		}
	};
	useEffect(() => {
		if (!show) {
			setNumber('');
			setName('');
			setValidate(false);
			setNewOpen(true);
		}
	}, [show]);
	return (
		<FormStyled onSubmit={onSubmit}>
			<PopupCategory>{list.category}</PopupCategory>
			<PopupName>{list.name}</PopupName>
			<PopupPrice>{list.price}</PopupPrice>
			<InputText
				value={name}
				setValue={setName}
				placeholder='Name'
				mt='32px'
				validate={validate}
				setValidate={setValidate}
				errorMessage={nameValid}
				newOpen={newOpen}
				setNewOpen={setNewOpen}
			/>
			<InputText
				value={number}
				setValue={setNumber}
				placeholder='Number'
				mt='16px'
				validate={validate}
				errorMessage={phoneValid}
				setValidate={setValidate}
				newOpen={newOpen}
				setNewOpen={setNewOpen}
			/>
			<ButtonPrimary
				maxWidth='288px'
				tt='uppercase'
				m='32px auto 0'
				type='submit'>
				order
			</ButtonPrimary>
		</FormStyled>
	);
};

export default PopupCard;
