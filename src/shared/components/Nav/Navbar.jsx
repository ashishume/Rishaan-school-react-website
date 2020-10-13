import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/rishaan-edu.appspot.com/o/IMG-20200803-WA0029.png?alt=media&token=bd795c0c-d0fa-49f9-8a9b-f5beb38a3f92"
          style={{ width: 70, height: 70 }}
          alt="logo"
        />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
