import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LinkStyle } from '../../styled/sharedStyles';

const DropdownWrapper = styled.div`
  /* display: none; */
  min-width: 100% !important;
  top: 44px;
  left: 0;
  z-index: 9999;
  position: absolute;
  /* background-color: rgba(200, 200, 200, 0.7); */
  background-color:#fff; 
  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
`;

const DropdownItem = styled(Link)`
  ${LinkStyle}
  color: #000;
  /* border-top: solid 1px #000; */
  border-top: 1px solid #000000;
  font-weight: 900;
  text-transform: uppercase;
  display: block;
  /* border-top: solid 1px #fff; */
  text-align: center;
  font-size: 13.6px;

  padding: 10px 15px;
`;

const Dropdown = ({ items }) => {
  return (
    <DropdownWrapper>
      {items.map((el, i) => (
        <DropdownItem to={el.path} key={i}>
          {el.title}
        </DropdownItem>
      ))}
    </DropdownWrapper>
  );
};

export default Dropdown;
