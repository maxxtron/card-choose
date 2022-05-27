import React, { useEffect, useId, useState } from 'react';
import styled from 'styled-components';
import Container from '../components/container/Container';
import Card from '../components/card/Card';
import axios from 'axios';
import PopupLoyout from '../components/popups/PopupLayout';
import ButtonPrimary from '../components/reusableComponents/buttons/ButtonPrimary';
import Spinner from '../components/reusableComponents/spinner/Spinner';
import PopupCard from '../components/popups/PopupCard';
import { useDispatch } from 'react-redux';
import { getList } from '../redux/actions/listAction';

const MainPageStyled = styled.div`
	background: #f2f2f2;
	min-height: 100vh;
	padding: 105px 0 115px 0;
	@media (max-width: 1200px) {
		padding: 105px 15px 115px 15px;
	}
`;

const MainPage = () => {
	const dispatch = useDispatch();
	const id = useId();

	const [info, setInfo] = useState([]);
	const [show, setShow] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		axios
			.get('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e')
			.then((res) => {
				setInfo(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	useEffect(() =>
		info?.length < 1 ? setIsLoading(true) : setIsLoading(false)
	);
	const handleLowPrice = () => {
		let minValue = info[0].price;
		for (let i = 1; i < info.length; i++) {
			if (info[i].price < minValue) {
				minValue = info[i].price;
			}
			if (info[i].price === minValue) {
				dispatch(getList(info[i]));
			}
		}
		setShow(true);
	};
	return (
		<>
			{!isLoading ? (
				<MainPageStyled>
					<Container>
						{info?.map((items, i) => {
							return (
								<Card
									setShow={setShow}
									items={items}
									key={id}
									id={id}
								/>
							);
						})}
					</Container>
					<ButtonPrimary
						m='85px auto 0'
						maxWidth='235px'
						onClick={handleLowPrice}>
						Buy cheapest
					</ButtonPrimary>
					<PopupLoyout show={show} setShow={setShow}>
						<PopupCard setShow={setShow} show={show} />
					</PopupLoyout>
				</MainPageStyled>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default MainPage;
