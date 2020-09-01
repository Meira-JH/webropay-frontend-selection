import React from "react";
import {
  ContractsListWrapper,
  ListHeader,
  ListItem,
  ListEdit,
  ListField,
  ListTitle,
} from "./style";
import editIcon from "../../../../img/lapis.svg";

const ContractsList = (props) => {
  const items = [
    {
      id: "CT-0000013",
      description: "Contrato de aquisição",
      status: "fechado",
    },
    {
      id: "CT-0000023",
      description: "Contrato dos painéis zima blue",
      status: "aberto",
    },
    {
      id: "CT-00000145",
      description: "Contrato da doideira doida",
      status: "fechado",
    },
    {
      id: "CT-000001356",
      description: "Contrato do zé das couves",
      status: "fechado",
    },
    {
      id: "CT-000001356",
      description: "Contrato do zé das couves",
      status: "fechado",
    },
    {
      id: "CT-000001356",
      description: "Contrato do zé das couves",
      status: "fechado",
    },
    {
      id: "CT-000001356",
      description:
        "Contrato do zé das couves asdiufh uaheu  aeuhuae huahe uahe uae huae haeuhadsuifhusaih asdifaisud f9io9saud fiouad sifuasdiofu sadiofu asodif ",
      status: "fechado",
    },
  ];

  const fields = ["Contrato", "Descrição", "Status"];

  const listTitledRender = fields.map((field, index) => (
    <ListField details={field} key={index}>
      <ListTitle details={index}> {field} </ListTitle>
    </ListField>
  ));

  const listTextRender = items.map((item, itemIndex) => (
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
  ));

  return (
    <ContractsListWrapper>
      <ListHeader>
        {listTitledRender}
        <ListField >
          <ListEdit>  </ListEdit>
        </ListField>
      </ListHeader>
      {listTextRender}
    </ContractsListWrapper>
  );
};

export default ContractsList;
