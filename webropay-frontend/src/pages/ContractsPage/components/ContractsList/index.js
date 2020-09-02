import React, { useEffect, useState } from "react";
import {
  ContractsListWrapper,
  ListHeader,
  ListItem,
  ListEdit,
  ListField,
  ListTitle,
} from "./style";
import editIcon from "../../../../img/lapis.svg";
import axios from "axios";

const ContractsList = (props) => {
  const fields = ["Contrato", "Descrição", "Status"];

  const [currentContracts, setCurrentContracts] = useState();

  useEffect(() => {
    async function getContracts() {
      const response = await axios.get(`http://localhost:3000/contracts`);
      setCurrentContracts(response.data);
      console.log("get contracts", response.data);
    }
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
          <span> {item.id} </span>
        </ListField>
        <ListField>
          <span> {item.description} </span>
        </ListField>
        <ListField>
          <span> {item.status} </span>
        </ListField>
        <ListField>
          <img src={editIcon} />
        </ListField>
      </ListItem>
    ))
  ) : (
    <span>Carregando...</span>
  );

  return (
    <ContractsListWrapper>
      <ListHeader>
        {listTitledRender}
        <ListField>
          <ListEdit> </ListEdit>
        </ListField>
      </ListHeader>
      {listTextRender}
    </ContractsListWrapper>
  );
};

export default ContractsList;
