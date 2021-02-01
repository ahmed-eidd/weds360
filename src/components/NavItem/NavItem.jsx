import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { LinkStyle } from '../../styled/sharedStyles';

const Item = styled.li`
  position: relative;
  padding: 12px 7px;
  text-align: center;
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

const NavItem = ({ path, children, fixed }) => {
  return (
    <Item fixed={fixed}>
      <ItemLink to={path}>{children}</ItemLink>
    </Item>
  );
};

export default NavItem;
