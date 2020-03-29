import React, { useState } from 'react';
import {  DropdownButton, Dropdown, Nav, Row, Col, Card, Button,  } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import HolderImg from '../../Assets/holder.png'
import TimeIcon from '../../Assets/time.svg'
import OffIcon from '../../Assets/off.png'
import { FlexWrapper, FilterWrapper } from '../../Assets/style'
import { TabsWrapper, RCardWrap } from '../../Assets/style'

const TabsComponent = () => {
  const [activeState, setTabState] = useState('first');
  console.log(activeState);
    return (
        <TabsWrapper>
           <TabContainer>
           <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="flex-column" onSelect={(selectedKey) => setTabState(selectedKey)}>
                <FlexWrapper>
                      <Nav.Item>
                          <Nav.Link eventKey="first" actives={activeState !== 'first'}>Grades 1-4</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link eventKey="second" actives={activeState !== 'second'}>Grades 5-8</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link eventKey="third" actives={activeState !== 'third'}>Grades 9 - 12</Nav.Link>
                      </Nav.Item>
                    </FlexWrapper>
                </Nav>

            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <FilterWrapper>
                      <p>Showing All courses for Grades 1-4</p>
                      <DropdownButton className="fliterDrop" id="dropdown-item-button" title="All Courses">
                        <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                      </DropdownButton>
                    </FilterWrapper>
                    <RCardWrap>
                      <Row>
                        <Col expand="xl" className="exploreCourse">
                          <Card style={{ width: '' }}>
                            <Card.Img variant="top" src={HolderImg} />
                            <Card.Body>
                              <Card.Title>
                                AI & Machine  Learning : <br/> Code Intelligent Bots
                                <div className="levelGrade">
                                  <p>Level <span>1</span></p>
                                  <p>Level <span>1-4</span></p>
                                </div>
                              </Card.Title>

                              <Card.Text>
                                <ul className="sdetail">
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>12 Hours</strong> over 6 Session</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                </ul>
                                <div className="d-flex justify-content-between ">
                                  <span className="amt">₹ 9999 <strike>12000</strike></span>
                                  <span><img src={OffIcon} alt="OffICon"/></span>
                                </div>
                              </Card.Text>
                              <Button className="learnMore" variant="link">Learn More</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col expand="xl">
                        <Card style={{ width: '' }}>
                            <Card.Img variant="top" src={HolderImg} />
                            <Card.Body>
                              <Card.Title>
                                AI & Machine  Learning : <br/> Code Intelligent Bots
                                <div className="levelGrade">
                                  <p>Level <span>1</span></p>
                                  <p>Level <span>1-4</span></p>
                                </div>
                              </Card.Title>

                              <Card.Text>
                                <ul className="sdetail">
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>12 Hours</strong> over 6 Session</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                </ul>
                                <div className="d-flex justify-content-between ">
                                  <span className="amt">₹ 9999 <strike>12000</strike></span>
                                  <span><img src={OffIcon} alt="OffICon"/></span>
                                </div>
                              </Card.Text>
                              <Button className="learnMore" variant="link">Learn More</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col expand="xl">
                        <Card style={{ width: '' }}>
                            <Card.Img variant="top" src={HolderImg} />
                            <Card.Body>
                              <Card.Title>
                                AI & Machine  Learning : <br/> Code Intelligent Bots
                                <div className="levelGrade">
                                  <p>Level <span>1</span></p>
                                  <p>Level <span>1-4</span></p>
                                </div>
                              </Card.Title>

                              <Card.Text>
                                <ul className="sdetail">
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>12 Hours</strong> over 6 Session</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                </ul>
                                <div className="d-flex justify-content-between ">
                                  <span className="amt">₹ 9999 <strike>12000</strike></span>
                                  <span><img src={OffIcon} alt="OffICon"/></span>
                                </div>
                              </Card.Text>
                              <Button className="learnMore" variant="link">Learn More</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </RCardWrap>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <FilterWrapper>
                      <p>Showing All courses for Grades 5-8</p>
                      <DropdownButton className="fliterDrop" id="dropdown-item-button" title="All Courses">
                        <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                      </DropdownButton>
                    </FilterWrapper>
                <RCardWrap>
                      <Row>
                        <Col expand="xl">
                          <Card style={{ width: '' }}>
                            <Card.Img variant="top" src={HolderImg} />
                            <Card.Body>
                              <Card.Title>
                                AI & Machine  Learning : <br/> Code Intelligent Bots
                                <div className="levelGrade">
                                  <p>Level <span>1</span></p>
                                  <p>Level <span>5-8</span></p>
                                </div>
                              </Card.Title>

                              <Card.Text>
                                <ul className="sdetail">
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>12 Hours</strong> over 6 Session</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                </ul>
                                <div className="d-flex justify-content-between ">
                                  <span className="amt">₹ 9999 <strike>12000</strike></span>
                                  <span><img src={OffIcon} alt="OffICon"/></span>
                                </div>
                              </Card.Text>
                              <Button className="learnMore" variant="link">Learn More</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col expand="xl">
                        <Card style={{ width: '' }}>
                            <Card.Img variant="top" src={HolderImg} />
                            <Card.Body>
                              <Card.Title>
                                AI & Machine  Learning : <br/> Code Intelligent Bots
                                <div className="levelGrade">
                                  <p>Level <span>1</span></p>
                                  <p>Level <span>5-8</span></p>
                                </div>
                              </Card.Title>

                              <Card.Text>
                                <ul className="sdetail">
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>12 Hours</strong> over 6 Session</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                </ul>
                                <div className="d-flex justify-content-between ">
                                  <span className="amt">₹ 9999 <strike>12000</strike></span>
                                  <span><img src={OffIcon} alt="OffICon"/></span>
                                </div>
                              </Card.Text>
                              <Button className="learnMore" variant="link">Learn More</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col expand="xl">
                        <Card style={{ width: '' }}>
                            <Card.Img variant="top" src={HolderImg} />
                            <Card.Body>
                              <Card.Title>
                                AI & Machine  Learning : <br/> Code Intelligent Bots
                                <div className="levelGrade">
                                  <p>Level <span>1</span></p>
                                  <p>Level <span>5-8</span></p>
                                </div>
                              </Card.Title>

                              <Card.Text>
                                <ul className="sdetail">
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>12 Hours</strong> over 6 Session</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                </ul>
                                <div className="d-flex justify-content-between ">
                                  <span className="amt">₹ 9999 <strike>12000</strike></span>
                                  <span><img src={OffIcon} alt="OffICon"/></span>
                                </div>
                              </Card.Text>
                              <Button className="learnMore" variant="link">Learn More</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </RCardWrap>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <FilterWrapper>
                      <p>Showing All courses for Grades 9-12</p>
                      <DropdownButton className="fliterDrop" id="dropdown-item-button" title="All Courses">
                        <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                      </DropdownButton>
                    </FilterWrapper>
                <RCardWrap>
                      <Row>
                        <Col expand="xl">
                          <Card style={{ width: '' }}>
                            <Card.Img variant="top" src={HolderImg} />
                            <Card.Body>
                              <Card.Title>
                                AI & Machine  Learning : <br/> Code Intelligent Bots
                                <div className="levelGrade">
                                  <p>Level <span>1</span></p>
                                  <p>Level <span>9-12</span></p>
                                </div>
                              </Card.Title>

                              <Card.Text>
                                <ul className="sdetail">
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>12 Hours</strong> over 6 Session</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                </ul>
                                <div className="d-flex justify-content-between ">
                                  <span className="amt">₹ 9999 <strike>12000</strike></span>
                                  <span><img src={OffIcon} alt="OffICon"/></span>
                                </div>
                              </Card.Text>
                              <Button className="learnMore" variant="link">Learn More</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col expand="xl">
                        <Card style={{ width: '' }}>
                            <Card.Img variant="top" src={HolderImg} />
                            <Card.Body>
                              <Card.Title>
                                AI & Machine  Learning : <br/> Code Intelligent Bots
                                <div className="levelGrade">
                                  <p>Level <span>1</span></p>
                                  <p>Level <span>9-12</span></p>
                                </div>
                              </Card.Title>

                              <Card.Text>
                                <ul className="sdetail">
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>12 Hours</strong> over 6 Session</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                </ul>
                                <div className="d-flex justify-content-between ">
                                  <span className="amt">₹ 9999 <strike>12000</strike></span>
                                  <span><img src={OffIcon} alt="OffICon"/></span>
                                </div>
                              </Card.Text>
                              <Button className="learnMore" variant="link">Learn More</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col expand="xl">
                        <Card style={{ width: '' }}>
                            <Card.Img variant="top" src={HolderImg} />
                            <Card.Body>
                              <Card.Title>
                                AI & Machine  Learning : <br/> Code Intelligent Bots
                                <div className="levelGrade">
                                  <p>Level <span>1</span></p>
                                  <p>Level <span>9-12</span></p>
                                </div>
                              </Card.Title>

                              <Card.Text>
                                <ul className="sdetail">
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>12 Hours</strong> over 6 Session</span></li>
                                  <li><span><img src={TimeIcon} alt="TimeIcon" /></span><span class="text-detail"><strong>5.6k</strong> Happy Student</span></li>
                                </ul>
                                <div className="d-flex justify-content-between ">
                                  <span className="amt">₹ 9999 <strike>12000</strike></span>
                                  <span><img src={OffIcon} alt="OffICon"/></span>
                                </div>
                              </Card.Text>
                              <Button className="learnMore" variant="link">Learn More</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </RCardWrap>
                </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
           </TabContainer>

        </TabsWrapper>
    );
}

export default TabsComponent;

