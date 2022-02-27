
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import "./Header.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
function Header(props) {
  const { cartItems, } = useContext(cartContext);
  const Logout = () => {
    localStorage.clear()
    props.history.push({
      pathname: `/`,
    });
    window.location.reload();
  }

  return (
    <>
      <div className="header">
        <div className="header_text">
          <div className="header_heading">Shopping</div>
        </div>
        <div className="d-flex pt-2 ">
          <Link to="/">
            <div className="divpadding">
              <div>Home</div>
            </div>
          </Link>
          <Link to="/">
            <div className="divpadding">
              <div>Products</div>
            </div>
          </Link>
        </div>

        <Link to="/cart">
          <div className="header_carticon pt-2 mr-2">
            {" "}
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCartIcon className="header_Shoppingcart" />
              </StyledBadge>
            </IconButton>
          </div>
        </Link>
        {localStorage.getItem("userName") != null ? <div className="signinhover">

          <div className="signindiv mt-2 ">

            <div className="sign-in " ><i class="fa fa-sign-in" aria-hidden="true"></i> {localStorage.getItem("userName") != 'null' && localStorage.getItem("userName")}</div>
          </div>

        </div>
          : <Link to="/login">
            <div className="signindiv mt-2 ">
              <div className="sign-in"><i class="fa fa-sign-in" aria-hidden="true"></i> SignIn / SignUp</div>
            </div>
          </Link>}


        {localStorage.getItem("userName") != null && <div className='logoutdiv' onClick={Logout}> Logout</div>}
      </div>
    </>
  );
}

export default Header;
