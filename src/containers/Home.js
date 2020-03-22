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
import SkillIcon from '../Assets/skill-icon.svg'
import CalenderIcon from '../Assets/calender.svg'
import TimeIcon from '../Assets/time.svg'
import WatchIcon from '../Assets/watch.svg'
import Lappy from '../Assets/lappy.jpg'
import Virtual from '../Assets/vitual.jpg'
import { NavRight, BannerWrapper, PaddingWrapper, Sqwrapper,FeatureWrap } from '../Assets/style'


const Home = () => {
    return (
        <>
        <BannerComponent />
        <Sqwrapper>
            <h3>Upcoming online courses <span className="live"><span className="oval"></span>LIVE</span></h3>
            <p className="upcoming-head">Learn from live teachers, not pre-recorded videos, in our intelligent virtual classrooms.  <br/> <img src={SkillIcon} alt="SkillIcon" /> = 21st century skills you’ll unlock <img src={CampCoin} alt="CampCoin" /> = coins you’ll earn for completion</p>
            <Container>
                <Row>
                    <Col expand="md">
                        <Card style={{'box-shadow' : '0 2px 4px 0 rgba(0, 0, 0, 0.1)'}} >
                            <FeatureWrap>
                                <Card.Img variant="top" src={AndroidThumb} />
                                <span class="featureTag">Mobile Apps</span>
                            </FeatureWrap>
                            <Card.Body>
                                <Card.Title>Android App Development <br/> Level 1</Card.Title>
                                <Card.Text>
                                <Row className="borderClass">
                                    <Col expand="md">
                                        <img src={Grades} /> <span className="sm-txt">GRADES</span> <br/>
                                        <span className="standard">4 - 8</span>
                                    </Col>
                                    <Col expand="md" className="text-center">
                                        <img src={Req} /> <span className="sm-txt">PRE-REQ</span> <br/>
                                        <span className="standard">Yes</span>
                                    </Col>
                                </Row>
                                <ul className="tagList">
                                    <li><img src={SkillIcon} alt="SkillIcon" /></li>
                                    <li> <span className="tagGreen">ANDROID</span> </li>
                                    <li> <span className="tagGreen">UI/UX</span> </li>
                                    <li> <span className="tagGreen">+4</span> </li>
                                </ul>
                                <ul className="champList">
                                    <li><img src={CampCoin} alt="CampCoin" /></li>
                                    <li> <span className="tagOrange">ANDROID</span> </li>
                                </ul>
                                <ul className="scheduleList">
                                    <li>
                                        <span><img src={CalenderIcon} alt="CalenderIcon" /></span>
                                        17th Feb (in 4 days)
                                    </li>
                                    <li>
                                        <span><img src={TimeIcon} alt="TimeIcon" /></span>
                                        Mon, Tue & Wed
                                    </li>
                                    <li>
                                        <span><img src={WatchIcon} alt="WatchIcon" /></span>
                                        6:00PM to 7:00PM
                                    </li>
                                </ul>
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <span className="amt">Rs. 6,000</span>
                                    </Col>
                                    <Col className="text-right">
                                        <a className="Enroll" href="">ENROLL</a>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col expand="md">
                    <Card style={{'box-shadow' : '0 2px 4px 0 rgba(0, 0, 0, 0.1)'}}>
                        <FeatureWrap>
                            <Card.Img variant="top" src={Lappy} />
                            <span class="featureTag">WEB DEVELOPMENT</span>
                        </FeatureWrap>
                            <Card.Body>
                                <Card.Title>Web Development Level 1</Card.Title>
                                <Card.Text>
                                <Row className="borderClass">
                                    <Col expand="md">
                                        <img src={Grades} /> <span className="sm-txt">GRADES</span> <br/>
                                        <span className="standard">4 - 8</span>
                                    </Col>
                                    <Col expand="md" className="text-center">
                                        <img src={Req} /> <span className="sm-txt">PRE-REQ</span> <br/>
                                        <span className="standard">Yes</span>
                                    </Col>
                                </Row>
                                <ul className="tagList">
                                    <li><img src={SkillIcon} alt="SkillIcon" /></li>
                                    <li> <span className="tagGreen">ANDROID</span> </li>
                                    <li> <span className="tagGreen">UI/UX</span> </li>
                                    <li> <span className="tagGreen">+4</span> </li>
                                </ul>
                                <ul className="champList">
                                    <li><img src={CampCoin} alt="CampCoin" /></li>
                                    <li> <span className="tagOrange">ANDROID</span> </li>
                                </ul>
                                <ul className="scheduleList">
                                    <li>
                                        <span><img src={CalenderIcon} alt="CalenderIcon" /></span>
                                        17th Feb (in 4 days)
                                    </li>
                                    <li>
                                        <span><img src={TimeIcon} alt="TimeIcon" /></span>
                                        Mon, Tue & Wed
                                    </li>
                                    <li>
                                        <span><img src={WatchIcon} alt="WatchIcon" /></span>
                                        6:00PM to 7:00PM
                                    </li>
                                </ul>
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <span className="amt">Rs. 6,000</span>
                                    </Col>
                                    <Col className="text-right">
                                        <a className="Enroll" href="">ENROLL</a>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col expand="md">
                    <Card style={{'box-shadow' : '0 2px 4px 0 rgba(0, 0, 0, 0.1)' }}>
                        <FeatureWrap>
                            <Card.Img variant="top" src={Virtual} />
                            <span class="featureTag">mixed reality</span>
                        </FeatureWrap>
                            <Card.Body>
                                <Card.Title>Virtual Reality  Level 1</Card.Title>
                                <Card.Text>
                                <Row className="borderClass">
                                    <Col expand="md">
                                        <img src={Grades} /> <span className="sm-txt">GRADES</span> <br/>
                                        <span className="standard">4 - 8</span>
                                    </Col>
                                    <Col expand="md" className="text-center">
                                        <img src={Req} /> <span className="sm-txt">PRE-REQ</span> <br/>
                                        <span className="standard">Yes</span>
                                    </Col>
                                </Row>
                                <ul className="tagList">
                                    <li><img src={SkillIcon} alt="SkillIcon" /></li>
                                    <li> <span className="tagGreen">ANDROID</span> </li>
                                    <li> <span className="tagGreen">UI/UX</span> </li>
                                    <li> <span className="tagGreen">+4</span> </li>
                                </ul>
                                <ul className="champList">
                                    <li><img src={CampCoin} alt="CampCoin" /></li>
                                    <li> <span className="tagOrange">ANDROID</span> </li>
                                </ul>
                                <ul className="scheduleList">
                                    <li>
                                        <span><img src={CalenderIcon} alt="CalenderIcon" /></span>
                                        17th Feb (in 4 days)
                                    </li>
                                    <li>
                                        <span><img src={TimeIcon} alt="TimeIcon" /></span>
                                        Mon, Tue & Wed
                                    </li>
                                    <li>
                                        <span><img src={WatchIcon} alt="WatchIcon" /></span>
                                        6:00PM to 7:00PM
                                    </li>
                                </ul>
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <span className="amt">Rs. 6,000</span>
                                    </Col>
                                    <Col className="text-right">
                                        <a className="Enroll" href="">ENROLL</a>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Sqwrapper>
      </>
    );
}

export default Home;