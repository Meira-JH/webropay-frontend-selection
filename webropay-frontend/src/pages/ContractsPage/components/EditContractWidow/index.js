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
  SuccessMessage,
  ErrorMessage,
} from "./style";
import EditButton from "../EditButton";
import axios from "axios";

const EditContractWindow = (props) => {
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (props.contractProps) {
      setDescription(props.contractProps.description);
    }
    console.log(
      "verificando id edit",
      props.contractProps ? props.contractProps.id : ""
    );
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
    console.log(body, props.contractProps.id);
    if (!body.description || !body.status) {
      setErrorMessage(true);
    }
    if (body.description && body.status) {
      setErrorMessage(false);
      try {
        axios.put(
          `http://localhost:3000/contract/${
            props.contractProps ? props.contractProps.id : ""
          }`,
          body
        );
        function closeWindow() {
            return props.closeEditContract;
        }
        closeWindow();
        window.location.reload();
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
          {successMessage ? (
            <SuccessMessage>Contrato editado!</SuccessMessage>
          ) : (
            ""
          )}
          {errorMessage ? (
            <ErrorMessage>Preencha os campos corretamente!</ErrorMessage>
          ) : (
            ""
          )}
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
