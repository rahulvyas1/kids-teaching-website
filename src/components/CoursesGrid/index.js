import React from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import CampCoin from '../../Assets/campcoins.svg'
import Req from '../../Assets/req.svg'
import SkillIcon from '../../Assets/skill-icon.svg'
import CalenderIcon from '../../Assets/calender.svg'
import TimeIcon from '../../Assets/time.svg'
import WatchIcon from '../../Assets/watch.svg'
import { FeatureWrap } from '../../Assets/style'
import Grades from '../../Assets/grades.svg'

const CoursesGrid = props => {
    const {icon, label, title, lavel, gradRange, perReq, skills, campCoin, date, weeks, times, amount} = props;
    return (
        <Col expand="md">
            <Card style={{'box-shadow' : '0 2px 4px 0 rgba(0, 0, 0, 0.1)'}} >
                <FeatureWrap>
                    <Card.Img variant="top" src={icon} />
                    <span class="featureTag">{label}</span>
                </FeatureWrap>
                <Card.Body className="home-cards">
                    <Card.Title>{title} <br/> {lavel}</Card.Title>
                    <Card.Text>
                    <Row className="borderClass">
                        <Col expand="md">
                            <img src={Grades} alt={'Grades'} /> <span className="sm-txt">GRADES</span> <br/>
                            <span className="standard">{gradRange}</span>
                        </Col>
                        <Col expand="md" className="text-center">
                            <img src={Req} alt={'Req'} /> <span className="sm-txt">PRE-REQ</span> <br/>
                            <span className="standard">{perReq}</span>
                        </Col>
                    </Row>
                    <ul className="tagList">
                        <li><img src={SkillIcon} alt="SkillIcon" /></li>
                        {skills.map(skill => <li> <span className="tagGreen">{skill}</span> </li>)}
                    </ul>
                    <ul className="champList">
                        <li><img src={CampCoin} alt="CampCoin" /></li>
                        {campCoin.map(coin => <li> <span className="tagOrange">{coin}</span> </li>)}
                    </ul>
                    <ul className="scheduleList">
                        <li>
                            <span><img src={CalenderIcon} alt="CalenderIcon" /></span>
                            {date}
                        </li>
                        <li>
                            <span><img src={TimeIcon} alt="TimeIcon" /></span>
                            {weeks}
                        </li>
                        <li>
                            <span><img src={WatchIcon} alt="WatchIcon" /></span>
                            {times}
                        </li>
                    </ul>
                    </Card.Text>
                    <Row>
                        <Col>
                            <span className="amt">Rs. {amount}</span>
                        </Col>
                        <Col className="text-right">
                            <a className="Enroll" href="/#">ENROLL</a>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CoursesGrid;