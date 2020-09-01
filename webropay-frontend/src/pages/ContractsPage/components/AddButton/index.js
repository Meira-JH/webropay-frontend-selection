import React from "react";
import styled from "styled-components";
import Add from '../../../../img/add.svg'

const AddButtonWrapper = styled.div`
  margin-left: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 141px;
  height: 43px;
  background: #122659 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000033;
  opacity: 1;
  border-radius: 4px;
  color: #ffff;
  cursor: pointer;
`;

const AddLogo = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 11px;
`;

const AddButton = (props) => {
  return (
    <AddButtonWrapper>
      <AddLogo src={Add}/>
      <span>Adicionar</span>
    </AddButtonWrapper>
  );
};

export default AddButton;
