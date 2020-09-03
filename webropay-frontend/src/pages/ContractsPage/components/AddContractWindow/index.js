import React, { useState } from "react";
import {
  Header,
  Container,
  Title,
  ExitButton,
  ContractForm,
  Overlay,
  StyledInput,
  StyledSelect,
} from "./style";
import AddButtonForm from "../AddButtonForm";
import axios from "axios";

const AddContractWindow = (props) => {
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const [successMessage, setSuccessMessage] = useState(false);

  function handleOnChange(event) {
    if (event.target.name === "description") {
      setDescription(event.target.value);
    }
    if (event.target.name === "status") {
      setStatus(event.target.value);
    }
  }

  function submitContract(event) {
    event.preventDefault();
    const body = { description, status };
    console.log(body);
    if (body.description && body.status) {
      try {
        axios.post(`http://localhost:3000/contract`, body);
        setSuccessMessage(true);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <>
      <Container show={props.show}>
        <Header>
          <Title></Title>
          <ExitButton onClick={props.closeAddContract}>X</ExitButton>
        </Header>
        <ContractForm>
          <Title>Adicionar Contrato</Title>
          {successMessage ? <span>Contrato adicionado!</span> : ""}
          <label name="description">
            Descrição:
            <StyledInput
              onChange={handleOnChange}
              value={description}
              type="text"
              name="description"
            />
          </label>
          <label name="status">
            Status:
            <StyledSelect
              name="status"
              onChange={handleOnChange}
              value={status}
            >
              <option></option>
              <option value={true}>Aberto</option>
              <option value={false}>Fechado</option>
            </StyledSelect>
          </label>
          <AddButtonForm submitContract={submitContract} />
        </ContractForm>
      </Container>
      <Overlay show={props.show} onClick={props.closeAddContract} />
    </>
  );
};

export default AddContractWindow;
