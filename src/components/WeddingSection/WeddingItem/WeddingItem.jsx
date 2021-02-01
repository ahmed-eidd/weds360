import React from 'react';
import styled from 'styled-components';
import { ImgResponsive } from '../../../styled/sharedStyles';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 0;
  display: inline-block;
  float: none;
  padding: 35px 13px;
 
  @media (min-width: 768px) {
    width: 49% !important;
  } @media (min-width: 992px) {
    width: 33% !important;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemIconWrapper = styled.div`
  margin-right: 52px;
  width: 90px;
`;

const ItemIcon = styled.img`
  /* width: 90px; */
  width: 60px;
  margin: 30px;
  ${ImgResponsive}
`;

const ItemInfoWrapper = styled.div`
  h4 {
    margin: 0;
    text-transform: uppercase;
    margin-bottom: 7px;
    font-size: 18px;
    font-weight: 900;
    line-height: 1.39;
    letter-spacing: 0.7px;
  }
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.5px;
    text-align: left;
  }
`;

const ItemInfoLink = styled(Link)`
  display: block;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.5px;
  text-align: left;
  color: #024d4c;
`;

// const ItemTitle = styled.h4``;

const WeddingItem = ({ title, text, icon, link, linkText }) => {
  return (
    <Wrapper>
      <ItemWrapper>
        {/* icon */}

        <ItemIconWrapper>
          <ItemIcon src={icon} alt="Tools website" />
        </ItemIconWrapper>

        {/* info */}

        <ItemInfoWrapper>
          <h4>{title}</h4>
          <span>{text}</span>
          <ItemInfoLink to={link}>{linkText}</ItemInfoLink>
        </ItemInfoWrapper>
      </ItemWrapper>
    </Wrapper>
  );
};

export default WeddingItem;
