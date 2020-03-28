import React from "react";
import Slider from "react-slick";
import { Card } from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import GroupIcon from '../../Assets/group-14.svg';
import MRIcon from '../../Assets/mr-icon.svg';
import Icon from '../../Assets/icon.svg';
import Group3Icon from '../../Assets/group-3.svg';
import VrIcon from '../../Assets/vr.svg';
import { CardWrap } from '../../Assets/style'

const ReactSlick = () => {
    return (
        <div className="container">
        {/* <Carousel>
        <CardWrap>
            <Card className="text-center">
                <Card.Body>
                    <img className='Group-14' src={GroupIcon} alt="GroupIcon" />
                    <Card.Text className='text-center'>
                        Web <br/> development
                    </Card.Text>
                </Card.Body>
                </Card>
          </CardWrap>
        <CardWrap>
            <Card className="text-center">
                <Card.Body>
                    <img className='Group-14' src={Icon} alt="Icon" />
                    <Card.Text className='text-center'>
                        Mobile App <br/> Development
                    </Card.Text>
                </Card.Body>
                </Card>
          </CardWrap>
          <CardWrap>
            <Card className="text-center">
                <Card.Body>
                    <img className='Group-14' src={VrIcon} alt="Icon" />
                    <Card.Text className='text-center'>
                        Mixed Reality <br/> (AR/VR)
                    </Card.Text>
                </Card.Body>
                </Card>
          </CardWrap>
          <CardWrap>
            <Card className="text-center">
                <Card.Body>
                    <img className='Group-14' src={Group3Icon} alt="MRIcon" />
                    <Card.Text className='text-center'>
                        Machine <br/> Learning (AI)
                    </Card.Text>
                </Card.Body>
                </Card>
          </CardWrap>
          <CardWrap>
            <Card className="text-center">
                <Card.Body>
                    <img className='Group-14' src={Group3Icon} alt="MRIcon" />
                    <Card.Text className='text-center'>
                        Machine <br/> Learning (AI)
                    </Card.Text>
                </Card.Body>
                </Card>
          </CardWrap>
        </Carousel> */}
         <Carousel>
                <div>
                    <img src={Group3Icon} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={MRIcon} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                   <div>PRAVIN</div>
                </div>
            </Carousel>
      </div>
    )
}

export default ReactSlick;