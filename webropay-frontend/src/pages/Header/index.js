import React from 'react'
import { HeaderWrapper, Logo } from "./style";
import Webropay from "../../img/logo webropay.png"

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo src={Webropay}/>
    </HeaderWrapper>
  );
};

export default Header;
