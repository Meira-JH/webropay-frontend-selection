import styled from "styled-components";

export const ContractsListWrapper = styled.div`
  display: flex;
  padding-right: 10px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 1px;
  box-sizing: border-box;
  max-height: 356px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ListHeader = styled.div`
  min-height: 48px;
  display: grid;
  grid-template-columns: 498px 399px 237px 80px;
  grid-template-rows: auto;
  align-content: stretch;
  justify-items: start;
  background: #fafafa 0% 0% no-repeat padding-box;
  border: 1px solid #e5e5e5;
`;

export const ListItem = styled.div`
  height: auto;
  min-height: 44px;
  display: grid;
  grid-template-columns: 498px 399px 237px 80px;
  align-content: stretch;
  justify-items: start;
  border: 1px solid #e5e5e5;
`;

export const ListField = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-right: 1px solid #e5e5e5;
  overflow-y: auto;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  img {
    justify-self: center;
    align-self: center;
    width: 21px;
    height: 21px;
    cursor: pointer;
    margin-left: 5px;
  }
`;

export const ListTitle = styled.span`
  padding-left: 10px;
  min-width: 65px;
  text-align: flex-start;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.25px;
  color: #00000099;
  opacity: 1;
`;

export const ListText = styled.span`
  height: auto;
  padding-left: 20px;
  text-align: left;
  font-family: Roboto, sans-serif;
  font: normal normal normal 16px/25px;
  letter-spacing: 0.15px;
  color: #666666;
  opacity: 1;
`;
