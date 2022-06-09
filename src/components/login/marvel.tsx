import { Navigate } from "react-router-dom";
import { HomePage } from "../../pages/homePage";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const MarvelButton = () => {
    let navigate = useNavigate();
    const { isAuthenticated, user } = useAuth0();

  function button(){
    {isAuthenticated ? navigate('/home') : navigate('/')}
            
  }
    return (
        <img className="logo" src="./static/Marvel.png" alt="logo" onClick={button}/>

    );
  };
  
  export default MarvelButton;