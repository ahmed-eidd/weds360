import React from 'react';
import logo from '../../assests/logo.png';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ImgResponsive } from '../../styled/sharedStyles';

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 10%;
  text-align: center;
  ${({ fixed }) =>
    fixed &&
    css &&
    `height: 60px;
    order: 0;
    justify-content: center;`}
`;

const ImgLink = styled(Link)`
  max-height: 100%;
`;

const Img = styled.img`
  ${ImgResponsive}

  max-height: 78px;
  ${({ fixed }) =>
    fixed &&
    css`
      max-height: 40px;
    `}
`;

const Logo = ({ fixed }) => {
  return (
    <ImgWrapper fixed={fixed}>
      <ImgLink to='/'>
        <Img src={logo} fixed={fixed} />
      </ImgLink>
    </ImgWrapper>
  );
};

export default Logo;
