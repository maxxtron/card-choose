import React from 'react';
import styled from 'styled-components';

const CategoryStyled = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	opacity: 0.5;
	color: #000;
	margin-top: 8px;
`;

const Category = ({ category }) => {
	return <CategoryStyled>{category}</CategoryStyled>;
};

export default Category;
