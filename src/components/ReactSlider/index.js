import React from "react";
import Slider from "react-slick";
import { Card } from 'react-bootstrap'

import GroupIcon from '../../Assets/group-14.svg';
import MRIcon from '../../Assets/mr-icon.svg';
import Icon from '../../Assets/icon.svg';
import Group3Icon from '../../Assets/group-3.svg';
import VrIcon from '../../Assets/vr.svg';
import { CardWrap } from '../../Assets/style'

const ReactSlick = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className="container">
        <Slider {...settings}>
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
        </Slider>
      </div>
    )
}

export default ReactSlick;