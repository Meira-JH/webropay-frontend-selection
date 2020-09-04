import React from "react";
import styled from "styled-components";
import moment from "moment";

const FooterWrapper = styled.div`
  padding: 0 34px;
  width: 100%;
  height: 61px;
  background-color: #122659;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffff;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 15px;
  font-family: Poppins;
`;

const TradeMark = styled.span``

const Credits = styled.div`
  font-size: 12px;
  padding-top: 5px;
  a{
    text-decoration: none;
    color: #ffff;
  }
`


const Footer = (props) => {
    const date = `${moment().format('DD/MM/YYYY hh')}h${moment().format('mm')}`
  return (
    <FooterWrapper>
      <span> {date} </span>
      <span></span>
      <div>
        <TradeMark>Webro pay 2020</TradeMark>
        <Credits>
          Ícones editar feito por{" "}
          <a
            href="https://www.flaticon.com/br/icone-gratis/lapis_971289?term=blue%20pen&page=5&position=8"
            title="itim2101"
          >
            itim2101
          </a>{" "}
          em{" "}
          <a href="https://www.flaticon.com/br/" title="Flaticon">
            www.flaticon.com
          </a>
        </Credits>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
