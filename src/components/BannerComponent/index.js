import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import CampCoin from '../../Assets/campcoins.svg'
import BannerImg from '../../Assets/header-photo.png'
import { BannerWrapper, PaddingWrapper } from '../../Assets/style'

const BannerComponent = () => {
    return (
        <BannerWrapper>
            <Container>
                <PaddingWrapper>
                    <Row>
                        <Col expand="md" className="order2">
                        <h1>Welcome to the school of the future.</h1>
                        <p className="subhead">Cutting-edge technology courses for Ages 8 - 18. Unlock <span className="yellow"> 21st century skills</span>, earn <img alt={'CampCoin'} src={CampCoin} />, and build a college-ready portfolio as you learn.</p>
                        </Col>
                        <Col expand="md" className="order1">
                            <img src={BannerImg}  alt="banner"/>
                        </Col>
                    </Row>
                </PaddingWrapper>
            </Container>
        </BannerWrapper>
    );
}

export default BannerComponent;