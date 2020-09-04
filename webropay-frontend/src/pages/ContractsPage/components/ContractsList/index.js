import React, { useEffect, useState } from "react";
import {
  ContractsListWrapper,
  ListHeader,
  ListItem,
  ListEdit,
  ListField,
  ListTitle,
  ListText,
} from "./style";
import editIcon from "../../../../img/lapis.svg";
import axios from "axios";

const ContractsList = (props) => {
  const fields = ["Contrato", "Descrição", "Status", "Editar"];

  const [currentContracts, setCurrentContracts] = useState();

  async function getContracts() {
    const response = await axios.get(`http://localhost:3000/contracts`);
    setCurrentContracts(response.data);
    console.log("get contracts", response.data);
  }

  useEffect(() => {
    getContracts();
  }, []);

  const listTitledRender = fields.map((field, index) => (
    <ListField details={field} key={index}>
      <ListTitle details={index}> {field} </ListTitle>
    </ListField>
  ));

  const listTextRender = currentContracts ? (
    currentContracts.map((item, itemIndex) => (
      <ListItem key={itemIndex}>
        <ListField>
          <ListText> {item.id} </ListText>
        </ListField>
        <ListField>
          <ListText> {item.description} </ListText>
        </ListField>
        <ListField>
          <ListText> {item.status === true ? "aberto" : "fechado"} </ListText>
        </ListField>
        <ListField>
          <div>
            <img
              src={editIcon}
              alt="Edit icon"
              onClick={() => props.showEditContractProps(item)}
            />
          </div>
        </ListField>
      </ListItem>
    ))
  ) : (
    <span>Carregando...</span>
  );

  return (
    <ContractsListWrapper>
      <ListHeader>{listTitledRender}</ListHeader>
      {listTextRender}
    </ContractsListWrapper>
  );
};

export default ContractsList;
