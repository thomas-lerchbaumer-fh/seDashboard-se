  import React, { Fragment, useState} from 'react';
  import {ReactComponent as MainLogo} from "../../res/img/se_logo.svg";

const Header = () => {

   return (
      <Fragment>
  
          <div className="navbar">
          <MainLogo></MainLogo>
          </div>
      </Fragment>
  )
};

export default Header;