import React from 'react'
import { useHistory } from "react-router-dom";
import {ContractsPageWrapper} from "./style"
import Header from '../Header';
import ContractsWrapper from './components/ContractsWrapper';

const ContractsPage = (props) => {

  const history = useHistory()

  return (
    <ContractsPageWrapper>
        <Header />
        <ContractsWrapper />
    </ContractsPageWrapper>
  )
}

export default ContractsPage
