import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 92%;
  max-width: 1100px;
  margin: 120px auto 0;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    margin-top: 10px;
    flex-wrap: wrap;
  }
  i {
    line-height: 30px;
    height: 30px;
    font-size: 30px;
    font-weight: 700;
    margin: 0 7.5px;
  }
`;

const ParentText = styled.h3`
  line-height: 30px;
  height: 30px;
  margin: 0;
  text-transform: uppercase;
  display: inline-block;
  font-size: 18px;
  font-weight: 900;
  color: #008174;
`;

const ChildText = styled.h2`
  line-height: 30px;
  height: 30px;
  margin: 0;
  text-transform: uppercase;
  display: inline-block;
  font-size: 18px;
  font-weight: 900;
  color: #010101;
`;

const WeddingBreadcrumb = ({ parent, child }) => {
  return (
    <Wrapper>
      {typeof parent === 'string' && (
        <>
        
          <ParentText>{parent}</ParentText>
          <i class="fa fa-angle-right " aria-hidden="true"></i>
        </>
      )}
      {Array.isArray(parent) &&
        parent.map((el) => (
          <>
            <ParentText>{el}</ParentText>
            <i class="fa fa-angle-right " aria-hidden="true"></i>
          </>
        ))}

      <ChildText>{child}</ChildText>
    </Wrapper>
  );
};

export default WeddingBreadcrumb;
