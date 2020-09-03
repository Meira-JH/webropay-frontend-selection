import React from "react";
import styled from "styled-components";

const EditButtonWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 43px;
  padding: 20px;
  background: #122659 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000033;
  opacity: 1;
  border-radius: 4px;
  color: #ffff;
  margin-top: 20px;
  cursor: pointer;
`;

const EditButton = (props) => {
  return (
    <EditButtonWrapper onClick={props.submitContract}>
      <span>Editar Contrato</span>
    </EditButtonWrapper>
  );
};

export default EditButton;
