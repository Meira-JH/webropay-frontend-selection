import React from "react";
import { Wrapper, TitleWrapper, Title } from "./style";
import AddButton from "../AddButton";
import ContractsList from "../ContractsList";

const ContractsWrapper = (props) => {
  return (
    <Wrapper>
      <div></div>
      <div>
        <TitleWrapper>
          <Title>CONTRATOS</Title>
          <AddButton />
        </TitleWrapper>
        <ContractsList />
      </div>
    </Wrapper>
  );
};

export default ContractsWrapper;
