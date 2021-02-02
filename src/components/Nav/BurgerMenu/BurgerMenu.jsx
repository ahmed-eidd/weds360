import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .btn {
    position: relative;
    float: right;
    margin-right: 15px;
    padding: 9px 10px;
    margin-top: 8px;
    margin-bottom: 8px;
    background-color: transparent;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .sr-only {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  .icon-bar {
    margin-top: 4px;
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    @media (max-width: 767px) {
      background-color: #000;
    }
  }
`;

const BurgerMenu = () => {
  return (
    <Wrapper>
      <button
        type="button"
        className="btn"
        data-toggle="collapse"
        data-target=".navbar-collapse"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </Wrapper>
  );
};

export default BurgerMenu;
