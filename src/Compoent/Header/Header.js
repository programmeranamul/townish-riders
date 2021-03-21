import React, { useContext } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { userContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";

const Header = () => {

    //Hamdel Log Out
    const handelLogOut = () => {
        firebase.auth().signOut().then(() => {
            const singedInUser = { name: "", email: "" }
            setLogedInUser(singedInUser)
        }).catch((error) => {
            console.log(error);
        });
    }

    const [logedInUser, setLogedInUser] = useContext(userContext)
    return (
        <header>
            <Navbar bg="white" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Townish Riders</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                        {logedInUser.email || logedInUser.displayName ? <Button as={Link} to="/" variant="danger" onClick={handelLogOut}>Log Out</Button> : <Button as={Link} to="/login" variant="danger">Log In</Button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;