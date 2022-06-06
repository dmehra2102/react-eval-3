import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext);
  const {cartcount} = useContext(CartContext);
  const navigator = useNavigate();
  const handleauth = ()=>{
    // if(isAuth){
    //   setIsAuth(!isAuth);
    // }
    if(!isAuth){
      setIsAuth(!isAuth);
      navigator("/login");
    }
    else{
      setIsAuth(!isAuth)
    }
    console.log(isAuth)
  }
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/login">Logo</Link>
      <span data-cy="navbar-cart-items-count">cart : {cartcount/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleauth}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
