import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import logo from '../Assets/logo.svg'
import Leaderboard from '../Assets/leaderboard.svg'
import { NavRight } from '../Assets/style'

const Header = (props) => {
    const handleLogIn = () => {
        props.handleLogIn();
        props.history.push('/dashboard');
    };

    const handleLogOut = () => {
        props.handleLogOut();
        props.history.push('/home');
    };

    return (
        <Navbar expand="xl" className={`mainMenu ${props.activeClass}`} fixed="top">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt={'logo'} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {props.isLoggedIn
                        ? <NavRight className="log-div"><Button className="logout" variant="primary" onClick={handleLogOut}>LOG OUT</Button></NavRight>
                        : <>
                            <Nav className="mr-auto">
                                <Nav.Link href="#home" className="active">ONLINE COURSES</Nav.Link>
                                <Nav.Link href="#features">OFFLINE CAMPS</Nav.Link>
                                <Nav.Link href="#pricing">REFER & EARN</Nav.Link>
                            </Nav>
                            <NavRight>
                                <a href="/#"><img src={Leaderboard} alt={'Leaderboard'} /></a>
                                <Button variant="primary">FREE TRIAL</Button>
                                <Button variant="primary" onClick={handleLogIn}>LOG IN</Button>
                            </NavRight>
                    </>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default withRouter(Header);