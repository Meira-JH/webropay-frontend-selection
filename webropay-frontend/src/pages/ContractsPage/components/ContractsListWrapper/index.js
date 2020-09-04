import React from "react";
import { Wrapper, TitleWrapper, Title } from "./style";
import AddButton from "../AddButton";
import ContractsList from "../ContractsList";

const ContractsWrapper = (props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>CONTRATOS</Title>
        <AddButton showAddContractProps={props.showAddContract} />
      </TitleWrapper>
        <ContractsList showEditContractProps={props.showEditContract}/>
    </Wrapper>
  );
};

export default ContractsWrapper;
