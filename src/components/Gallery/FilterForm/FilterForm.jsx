import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  position: relative;
  box-sizing: border-box;
  margin-right: 25px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const Form = styled.form`
  margin-top: 15px;
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    padding: 0;
    flex-wrap: wrap;
    margin-left: 10px;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
  .action-clear {
    background-color: #fff;
    color: #000;
    border: solid 1px #000;
    padding-right: 10px;
    padding-left: 10px;
    height: 21px;
  }
  .action-apply {
    vertical-align: middle;
    padding: 0;
    border: solid 1px #000;
    width: 55px;
    height: 21px;
    margin-left: 3px;
    font-size: 12px;
    text-align: center;
    background-color: #000;
    color: #fff;
  }
`;

const InputContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  input {
    width: 100%;
    border: 1px solid #000;
    padding: 5px;
  }
`;

const FilterForm = () => {
  return (
    <Wrapper>
      <Form>
        <Actions>
          <a href="#" className="action-clear">
            Clear
          </a>
          <button className="action-apply">Apply</button>
        </Actions>
        <InputContainer>
          <input type="text" placeholder="Search" />
        </InputContainer>
      </Form>
    </Wrapper>
  );
};

export default FilterForm;
