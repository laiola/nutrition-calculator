import React from "react";
import { Link } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";

import logo from './logo.jpg';
import './Header.css';

const icon = (
    <img src={logo} className="logo" alt="Nutrition calculator"/>
);

export const Header = props => {
    return (
        <Navbar bg="light" className="nav-tabs">
            <Navbar.Brand>
                <Link to="calculator" className="no-link-underline">{icon} Nutrition calculator</Link>
            </Navbar.Brand>
            <Nav>
                <Nav.Item>
                    <Link to="calculator" className="color-link">Calculator</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="menu" className="color-link">Menu</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="products" className="color-link">Products</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="about" className="color-link">About</Link>
                </Nav.Item>
            </Nav>

        </Navbar>
    );
};
