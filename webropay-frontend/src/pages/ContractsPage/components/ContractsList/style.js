import styled from "styled-components";

export const ContractsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 356px;
  min-height: 356px;
  width: 1211px;
  border: 1px solid #e5e5e5;
  border-radius: 1px;
  overflow-y: scroll;
`;

export const ListHeader = styled.div`
  width: 100%;
  min-height: 48px;
  display: grid;
  grid-template-columns: 498px 399px 237px 65px;
  align-content: stretch;
  justify-items: start;
  background: #fafafa 0% 0% no-repeat padding-box;
  border: 1px solid #e5e5e5;
`;

export const ListItem = styled.div`
  width: 100%;
  height: auto;
  min-height: 44px;
  display: grid;
  grid-template-columns: 498px 399px 237px 65px;
  align-content: stretch;
  justify-items: start;
  border: 1px solid #e5e5e5;
`;

export const ListField = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid #e5e5e5;
  overflow-y: scroll;
  span {
    padding-left: 20px;
    text-align: left;
    font-family: Roboto, sans-serif;
    font: normal normal medium 14px/19px;
    letter-spacing: 1.25px;
    color: #00000099;
    opacity: 1;
  }
  img{
      justify-self: center;
      align-self: center;
      width: 21px;
      height: 21px;
  }
`;

export const ListTitle = styled.span`
  padding-left: 20px;
  text-align: center;
  font-family: Roboto, sans-serif;
  font: normal normal medium 14px/19px;
  letter-spacing: 1.25px;
  color: #00000099;
  opacity: 1;
`;

export const ListEdit = styled.span`
    width: 100%;
    text-align: center;
  font-family: Roboto, sans-serif;
  font: normal normal medium 14px/19px;
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
  overflow-y: scroll;
`;
