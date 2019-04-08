import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';

import logo from './logo.jpg';
import './Header.css';

const icon = (
    <img src={logo} className="logo" alt="Nutrition calculator"/>
);

export const Header = () => (
    <Navbar bg="light" className="nav-tabs justify-content-between">
        <Navbar.Brand>
            <Link to="calculator" className="no-link-underline">{icon} Nutrition calculator</Link>
        </Navbar.Brand>
        <Nav>
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
