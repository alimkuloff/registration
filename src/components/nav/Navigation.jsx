import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import "./Nav.css";

const { Header } = Layout;

const Navigation = () => {
  return (
    <Header className="navbar-header">
      <div className="logo">MyLogo</div>
      <Menu mode="horizontal" className="navbar-menu">
        <Menu.Item key="1">
          <NavLink to="/" className="navbar-link">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/auth" className="navbar-link">Auth</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/" className="navbar-link">Services</NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/dashboard" className="navbar-link">Dashboard</NavLink>
        </Menu.Item>
      </Menu>
      
    </Header>
  );
};

export default Navigation;
