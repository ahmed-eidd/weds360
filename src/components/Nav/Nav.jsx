import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Logo from '../Logo/Logo';
import NavItem from '../NavItem/NavItem';
import * as dropdownitem from './dropdownItems';
const Section = styled.div`
  width: 100%;
  padding-top: 40px;
  z-index: 9998;
  @media (max-width: 767px) {
    padding-top: 0;
    background-color: #fff;
    height: 60px;
    z-index: 999999;
    position: relative;
  }
`;

const NavWrapper = styled.div`
  transition: all ease 0.1s;
  margin: auto;
  width: 92%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  @media (max-width: 767px) {
    width: auto;
    padding: 2% 2.5%;
    max-height: 100%;
    background-color: #fff;
    position: relative;
    display: block;
  }
  ${({ fixed }) =>
    fixed &&
    css`
      transition: all ease 1s;
      position: fixed;
      top: 0;
      min-width: 100%;
      background-color: #fff;
      justify-content: flex-start;
      align-items: center;
      z-index: 9999;
    `}
`;

const NavItemsWrapper = styled.div`
  width: 43%;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
  @media (max-width: 767px) {
    border-top: 0;
    border-bottom: 0;
  }
  ${({ position, fixed }) => {
    if (position === 'right' && css) {
      if (fixed && css) {
        return `
        height: 60px;
        width: auto;
        padding: 0;
        order: 2;
        border: none;
        `;
      } else {
        return `padding: 0 5px;`;
      }
    } else if (position === 'left' && css) {
      if (fixed && css) {
        return ` 
        height: 60px;
        width: auto;
        padding: 0;
        order: 1;
        border: none;
}
        `;
      } else {
        return `position: relative; padding: 0 15px;`;
      }
    }
  }}
`;
const NavList = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
`;

const Nav = ({ children, position, fixed }) => {
  const [navFixed, setNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section>
      <NavWrapper fixed={navFixed}>
        <NavItemsWrapper position="left" fixed={navFixed}>
          <NavList>
            <NavItem
              to="#"
              fixed={navFixed}
              dropdownItems={dropdownitem.dropdown1}
            >
              360 Planner
            </NavItem>
            <NavItem fixed={navFixed} dropdownItems={dropdownitem.dropdown2}>
              HER
            </NavItem>
            <NavItem fixed={navFixed} dropdownItems={dropdownitem.dropdown3}>
              HIM
            </NavItem>
            <NavItem fixed={navFixed} dropdownItems={dropdownitem.dropdown4}>
              THE WEDDING
            </NavItem>
          </NavList>
        </NavItemsWrapper>
        <Logo fixed={navFixed} />
        <NavItemsWrapper position="right" fixed={navFixed}>
          <NavList>
            <NavItem
              to="#"
              fixed={navFixed}
              dropdownItems={dropdownitem.dropdown5}
            >
              VENDORS
            </NavItem>
            <NavItem fixed={navFixed} dropdownItems={dropdownitem.dropdown6}>
              GALLERY
            </NavItem>
            <NavItem fixed={navFixed} dropdownItems={dropdownitem.dropdown7}>
              IDEAS & MORE
            </NavItem>
          </NavList>
        </NavItemsWrapper>
      </NavWrapper>
    </Section>
  );
};

export default Nav;
