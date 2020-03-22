import React from 'react'
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap'
import logo from './Assets/logo.svg'
import Leaderboard from './Assets/leaderboard.svg'
import CampCoin from './Assets/campcoins.svg'
import BannerImg from './Assets/header-photo.png'
import { NavRight, BannerWrapper, PaddingWrapper } from './Assets/style'


const Home = () => {
    return (
        <>
        <Navbar expand="lg" className="mainMenu" fixed="top">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="active">ONLINE COURSES</Nav.Link>
                        <Nav.Link href="#features">OFFLINE CAMPS</Nav.Link>
                        <Nav.Link href="#pricing">REFER & EARN</Nav.Link>
                    </Nav>
                    <NavRight>
                        <a href=""><img src={Leaderboard}/></a>
                        <Button variant="primary">FREE TRIAL</Button>
                        <Button variant="primary">LOG IN</Button>
                    </NavRight>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      
        <BannerWrapper>
        <Container>
            <PaddingWrapper>
                <Row>
                    <Col>
                      <h1>Welcome to the school of the future.</h1>
                      <p className="subhead">Cutting-edge technology courses for Ages 8 - 18. Unlock <span className="yellow"> 21st century skills</span>, earn <img src={CampCoin} />, and build a college-ready portfolio as you learn.</p>
                    </Col>
                    <Col>
                        <img src={BannerImg}  alt="banner"/>
                    </Col>
                </Row>
            </PaddingWrapper>
        </Container>
        </BannerWrapper>
      </>
    );
}

export default Home;