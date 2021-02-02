import React from 'react';
import styled from 'styled-components';
import FilterForm from './FilterForm/FilterForm';
import Photos from './Photos/Photos';

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  max-width: 1100px;
  margin: 30px auto 0;
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

const Gallery = ({children}) => {
  return <Wrapper>
    <FilterForm />
    <Photos>

    {children}
    </Photos>
  </Wrapper>;
};

export default Gallery;
