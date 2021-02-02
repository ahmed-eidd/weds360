import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 70%;
  @media (max-width: 767px) {
    width: 100%;
  }
  .row {
    margin: 0;
  }
`;

const Photos = ({ children }) => {
  return (
    <Wrapper>
      <div className="row">{children}</div>
    </Wrapper>
  );
};

export default Photos;
