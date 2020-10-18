import React from "react";
import styled from "styled-components";
import "./styles.scss";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    z-index: 1;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li className="menu-items">Home</li>
      <li className="menu-items">About Us</li>
      <li className="menu-items">Admission</li>
      <li className="menu-items">Curriculum</li>
      <li className="menu-items">Contact Us</li>
    </Ul>
  );
};

export default RightNav;
