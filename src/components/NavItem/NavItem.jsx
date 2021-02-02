import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { LinkStyle } from '../../styled/sharedStyles';
import Dropdown from '../Dropdown/Dropdown';

const Item = styled.li`
  position: relative;
  padding: 12px 7px;
  text-align: center;
  @media (max-width: 767px) {
    display: none;
  }
  ${({ fixed }) =>
    fixed &&
    css &&
    `padding: 12px 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

const ItemLink = styled(Link)`
  ${LinkStyle}
`;

const NavItem = ({ path, children, fixed, dropdownItems }) => {
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <Item onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} fixed={fixed}>
      <ItemLink to={path}>{children}</ItemLink>
      {dropdown && <Dropdown items={dropdownItems} />}
    </Item>
  );
};

export default NavItem;
