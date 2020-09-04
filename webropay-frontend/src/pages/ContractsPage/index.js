import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ContractsPageWrapper } from "./style";
import Header from "../Header";
import ContractsListWrapper from "./components/ContractsListWrapper";
import AddContractWindow from "./components/AddContractWindow";
import EditContractWindow from "./components/EditContractWidow";
import Footer from "../Footer";

const ContractsPage = (props) => {
  const [showAddContract, setShowAddContract] = useState(false);
  const [showEditContract, setShowEditContract] = useState(false);
  const [contractState, setContract] = useState();

  const history = useHistory();

  function handleAddContract() {
    setShowAddContract(!showAddContract);
  }

  function handleEditContract(contract) {
    console.log(contract)
    setContract(contract);
    setShowEditContract(!showEditContract);
  }
  return (
    <ContractsPageWrapper>
      <Header />
      <ContractsListWrapper
        showAddContract={handleAddContract}
        showEditContract={handleEditContract}
      />
      <AddContractWindow
        show={showAddContract}
        closeAddContract={handleAddContract}
      />
      <EditContractWindow
        contractProps = {contractState}
        show={showEditContract}
        closeEditContract={handleEditContract}
      />
      <Footer />
    </ContractsPageWrapper>
  );
};

export default ContractsPage;
