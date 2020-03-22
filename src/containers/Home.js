import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CampCoin from '../Assets/campcoins.svg'
import BannerImg from '../Assets/header-photo.png'
import { BannerWrapper, PaddingWrapper } from '../Assets/style'


const Home = () => {
    return (
        <>
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