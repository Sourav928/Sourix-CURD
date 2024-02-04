import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import styled from "@emotion/styled";

import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">SOURIX</Tabs>
          <Tabs to="/all">All User</Tabs>
          <Tabs to="/add">Add User</Tabs>
        </Toolbar>
      </Header>
    </>
  );
};

export default NavBar;
