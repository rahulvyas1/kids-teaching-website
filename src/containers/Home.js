import React from 'react'
import BannerComponent from '../components/BannerComponent';
import { Container, Navbar, Nav, Button, Row, Col, Card } from 'react-bootstrap'
import logo from '../Assets/logo.svg'
import Leaderboard from '../Assets/leaderboard.svg'
import CampCoin from '../Assets/campcoins.svg'
import BannerImg from '../Assets/header-photo.png'
import AndroidThumb from '../Assets/and.jpg'
import Grades from '../Assets/grades.svg'
import Req from '../Assets/req.svg'
import { NavRight, BannerWrapper, PaddingWrapper, Sqwrapper } from '../Assets/style'


const Home = () => {
    return (
        <>
        <BannerComponent />
        <Sqwrapper>
            <Container>
                <Row>
                    <Col expand="md">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={AndroidThumb} />
                            <Card.Body>
                                <Card.Title>Android App Development Level 1</Card.Title>
                                <Card.Text>
                                <Row>
                                    <Col expand="md">
                                        <img src={Grades} /> <span className="sm-txt">GRADES</span> <br/>
                                        <span className="standard">4 - 8</span>
                                    </Col>
                                    <Col expand="md" className="text-center">
                                        <img src={Req} /> <span className="sm-txt">PRE-REQ</span> <br/>
                                        <span className="standard">Yes</span>
                                    </Col>
                                </Row>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col expand="md"></Col>
                    <Col expand="md"></Col>
                </Row>
            </Container>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Sqwrapper>
      </>
    );
}

export default Home;