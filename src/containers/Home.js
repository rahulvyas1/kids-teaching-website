import React from 'react'
import BannerComponent from '../components/BannerComponent';
import ReactSlick from '../components/ReactSlider';
import CoursesGrid from '../components/CoursesGrid';
import { Container, Row } from 'react-bootstrap'
import CampCoin from '../Assets/campcoins.svg'
import SkillIcon from '../Assets/skill-icon.svg'
import { Sqwrapper, SliderWrap } from '../Assets/style'
import courses from '../MockData/courses';

const Home = () => {
    return (
        <>
        <BannerComponent />
        <Sqwrapper>
            <SliderWrap>
                {/* <ReactSlick /> */}
            </SliderWrap>
            <h3>Upcoming online courses <span className="live"><span className="oval"></span>LIVE</span></h3>
            <p className="upcoming-head">Learn from live teachers, not pre-recorded videos, in our intelligent virtual classrooms.  <br/> <img src={SkillIcon} alt="SkillIcon" /> = 21st century skills you’ll unlock <img src={CampCoin} alt="CampCoin" /> = coins you’ll earn for completion</p>
            <Container>
                <Row>
                    {courses.map(course => <CoursesGrid {...course} />)}
                </Row>
            </Container>
            
        </Sqwrapper>
      </>
    );
}

export default Home;