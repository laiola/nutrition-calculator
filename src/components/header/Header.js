import React from "react";
import { Navbar } from "react-bootstrap";

import logo from './logo.jpg';
import './Header.css';

const icon = (
    <img src={logo} className="logo" alt="Nutrition calculator"/>
);

export const Header = props => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <a href="/">{icon} Nutrition calculator</a>
            </Navbar.Brand>
        </Navbar>
    );
};
