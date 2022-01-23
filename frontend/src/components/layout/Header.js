  import React, { Fragment} from 'react';
  import {ReactComponent as MainLogo} from "../../res/img/se_logo.svg";
  import {ReactComponent as MainLogoWhite} from "../../res/img/se_logo_white.svg";


const Header = (props) => {

  const {themeSelected} = props;
   return (
      <Fragment>
  
          <div className="navbar">
             {themeSelected == "light" ?(
               <MainLogo></MainLogo>
               
             ):(
               <MainLogoWhite></MainLogoWhite>
             )}
          
          </div>
      </Fragment>
  )
};

export default Header;