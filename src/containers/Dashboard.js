import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import LearnIcon from '../Assets/learn.svg'
import AnywhereIcon from '../Assets/anywhere.svg'
import PioneerIcon from '../Assets/pioneer.svg'
import DoingIcon from '../Assets/doing.svg'
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
                                    <img src={AnywhereIcon} alt="LearnIcon " />
                                    <h3>Learn from anywhere.</h3>
                                    <p>Convenience and safety for you and your child.</p>
                                </BannerCard>
                            </Col>
                            <Col expand="md">
                                <BannerCard>
                                    <img src={PioneerIcon} alt="LearnIcon " />
                                    <h3>Learn from the pioneers.</h3>
                                    <p>We’ve been teaching kids to code since 2010.<a href=""> Read more.</a></p>
                                </BannerCard>
                            </Col>
                            <Col expand="md">
                                <BannerCard>
                                    <img src={DoingIcon} alt="LearnIcon " />
                                    <h3>Learn by doing.</h3>
                                    <p>100% project-based curriculum. Solve real-world problems. </p>
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