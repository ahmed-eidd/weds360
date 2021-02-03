import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImgResponsive } from '../../../styled/sharedStyles';
import icon1 from '../../../assests/Mobile Icon/icon-1.png';
import icon2 from '../../../assests/Mobile Icon/icon-2.png';
import icon3 from '../../../assests/Mobile Icon/icon-3.png';
import icon4 from '../../../assests/Mobile Icon/icon-4.png';
import icon5 from '../../../assests/Mobile Icon/icon-5.png';
import icon6 from '../../../assests/Mobile Icon/icon-6.png';
import icon7 from '../../../assests/Mobile Icon/icon-7.png';
import icon8 from '../../../assests/Mobile Icon/icon-8.png';
import icon9 from '../../../assests/Mobile Icon/icon-9.png';
import icon10 from '../../../assests/Mobile Icon/icon-10.png';

const Wrapper = styled.div`
  overflow: hidden;
  display: block;
  transition: all ease-out;
  @media (max-width: 767px) {
    top: 100%;
    position: absolute;
    height: 485px;
    width: 100%;
    left: 0;
    text-align: center;
  }
`;

const NavWrapper = styled.div`
  @media (max-width: 767px) {
    /* background-image: url(https://weds360.com/assets/background-cf0f33b….jpg); */
    width: 100%;
    background-color: #000000;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    font-family: monospace;
    position: relative;
    height: 100%;
    width: 100%;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
`;

const NavItem = styled.div`
  &::before {
    content: '';
    width: 100%;
    height: 3px;
    background: #fff;
    position: absolute;
    bottom: -3px;
  }
  &::after {
    content: '';
    height: 100%;
    width: 3px;
    background: #fff;
    position: absolute;
    right: -3px;
  }
  @media (max-width: 767px) {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
    position: relative;
    width: ${({ quarter }) => (quarter ? `25%` : `50%`)};
  }

  .img {
    ${ImgResponsive}
    @media (max-width: 767px) {
      padding: 25px;
      max-width: 90px;
      max-height: 90px;
      display: inline-block;
    }
  }
  p {
    font-size: 15px;
  }
`;

const NavLink = styled(Link)`

    @media (max-width: 767px) {
      color: #fff;
      text-align: center;
    }
`;

const NavMobile = ({ quarter }) => {
  return (
    <Wrapper>
      <NavWrapper>
        <NavItem>
          <NavLink to="#">
            <img src={icon1} alt="" className="img" />
            <p>360 Planner</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">
            <img src={icon2} alt="" className="img" />
            <p>For The Wedding</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">
            <img src={icon3} alt="" className="img" />
            <p>Him</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">
            <img src={icon4} alt="" className="img" />
            <p>Her</p>
          </NavLink>
        </NavItem>
        <NavItem quarter>
          <NavLink to="#" className="link">
            <img src={icon5} alt="" className="img" />
            <p>Check List</p>
          </NavLink>
        </NavItem>
        <NavItem quarter>
          <NavLink to="#">
            <img src={icon6} alt="" className="img" />
            <p>Guest List</p>
          </NavLink>
        </NavItem>
        <NavItem quarter>
          <NavLink to="#">
            <img src={icon7} alt="" className="img" />
            <p>Registry List</p>
          </NavLink>
        </NavItem>
        <NavItem quarter>
          <NavLink to="#">
            <img src={icon8} alt="" className="img" />
            <p>Budgeter</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">
            <img src={icon8} alt="" className="img" />
            <p>Gallery</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">
            <img src={icon9} alt="" className="img" />
            <p>Ideas & More</p>
          </NavLink>
        </NavItem>
      </NavWrapper>
    </Wrapper>
  );
};

export default NavMobile;
