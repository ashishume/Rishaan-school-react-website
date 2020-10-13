import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color:#fff;
  background-color: rgba(0,0,0,0.5);
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Nav Bar</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
