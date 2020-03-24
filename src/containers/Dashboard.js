import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import LearnIcon from '../Assets/learn.svg'
import { BannerWrapper, PaddingWrapper, BannerCard, Sqwrapper } from '../Assets/style'
import TabsComponent from '../components/TabsComponent';
const Dashboard = () => {
    return (
        <>
            <BannerWrapper>
                <Container>
                    <PaddingWrapper>
                        <h2 className="text-left">ONLINE COURSES</h2>
                        <Row>
                            <Col expand="md">
                                <BannerCard>
                                    <img src={LearnIcon} alt="LearnIcon " />
                                    <h3>Learn interactively.</h3>
                                    <p>LIVE online sessions with our expert mentors.<a href=""> See a demo.</a></p>
                                </BannerCard>
                            </Col>
                            <Col expand="md">
                                <BannerCard>
                                    <img src={LearnIcon} alt="LearnIcon " />
                                    <h3>Learn interactively.</h3>
                                    <p>LIVE online sessions with our expert mentors.<a href=""> See a demo.</a></p>
                                </BannerCard>
                            </Col>
                            <Col expand="md">
                                <BannerCard>
                                    <img src={LearnIcon} alt="LearnIcon " />
                                    <h3>Learn interactively.</h3>
                                    <p>LIVE online sessions with our expert mentors.<a href=""> See a demo.</a></p>
                                </BannerCard>
                            </Col>
                            <Col expand="md">
                                <BannerCard>
                                    <img src={LearnIcon} alt="LearnIcon " />
                                    <h3>Learn interactively.</h3>
                                    <p>LIVE online sessions with our expert mentors.<a href=""> See a demo.</a></p>
                                </BannerCard>
                            </Col>
                        </Row>
                        <Button className="Book" variant="primary">BOOK A FREE TRIAL</Button>
                    </PaddingWrapper>
                </Container>
            </BannerWrapper>
            <Sqwrapper className="inner">
                <TabsComponent />
            </Sqwrapper>
        </>
    );
}

export default Dashboard;