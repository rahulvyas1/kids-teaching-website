import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import logo from '../Assets/logo.svg'
import Leaderboard from '../Assets/leaderboard.svg'
import { NavRight } from '../Assets/style'

const Header = props => {
    return (
        <Navbar expand="lg" className="mainMenu" fixed="top">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt={'logo'} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="active">ONLINE COURSES</Nav.Link>
                        <Nav.Link href="#features">OFFLINE CAMPS</Nav.Link>
                        <Nav.Link href="#pricing">REFER & EARN</Nav.Link>
                    </Nav>
                    <NavRight>
                        <a href=""><img src={Leaderboard} alt={'Leaderboard'} /></a>
                        <Button variant="primary">FREE TRIAL</Button>
                        <Button variant="primary">LOG IN</Button>
                    </NavRight>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;