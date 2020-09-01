import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr;
  grid-template-rows: 1fr;
`;

export const TitleWrapper = styled.div`
  margin: 63px 0 25px 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 37px;
`;

export const Title = styled.span`
  text-align: left;
  font-family: Roboto;
  font: normal normal 900 30px/33px Roboto;
  letter-spacing: 0px;
  color: #122659;
  text-shadow: 0px 3px 6px #00000029;
  text-transform: uppercase;
  opacity: 1;
`;
