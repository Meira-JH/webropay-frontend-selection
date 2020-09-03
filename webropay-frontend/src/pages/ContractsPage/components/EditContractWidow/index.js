import React, { useState, useEffect } from "react";
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
import EditButton from "../EditButton";
import axios from "axios";

const EditContractWindow = (props) => {
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    if (props.contractProps) {
      setDescription(props.contractProps.description);
    }
  }, []);

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
        axios.put(`http://localhost:3000/contract/${props.contractProps.id}`, body);
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
          <ExitButton onClick={props.closeEditContract}>X</ExitButton>
        </Header>
        <ContractForm>
          <Title>Editar Contrato</Title>
          {successMessage ? <span>Contrato editado!</span> : ""}
          <label name="description">
            Descrição:
            <StyledInput
              onChange={handleOnChange}
              value={description}
              type="text"
              name="description"
              placeholder={
                props.contractProps ? props.contractProps.description : ""
              }
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
          <EditButton submitContract={submitContract} />
        </ContractForm>
      </Container>
      <Overlay show={props.show} onClick={props.closeEditContract} />
    </>
  );
};

export default EditContractWindow;
