import React from "react";
import Slider from "react-slick";
import { Card } from 'react-bootstrap'

import GroupIcon from '../../Assets/group-14.svg';
import MRIcon from '../../Assets/mr-icon.svg';
import Icon from '../../Assets/icon.svg';
import Group3Icon from '../../Assets/group-3.svg';
import VrIcon from '../../Assets/vr.svg';
import { CardWrap, SlideInner } from '../../Assets/style'

const ReactSlick = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    className: "",
    centerMode: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 766,
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
                    <SlideInner>
                        <img className='Group-14' src={GroupIcon} alt="GroupIcon" />
                        <Card.Text className='text-center'>
                            Web <br/> development
                        </Card.Text>
                    </SlideInner>
                </Card.Body>
                </Card>
          </CardWrap>
        <CardWrap>
            <Card className="text-center">
                <Card.Body>
                    <SlideInner>
                        <img className='Group-14' src={Icon} alt="Icon" />
                        <Card.Text className='text-center'>
                            Mobile App <br/> Development
                        </Card.Text>
                    </SlideInner>
                </Card.Body>
                </Card>
          </CardWrap>
          <CardWrap>
            <Card className="text-center">
                <Card.Body>
                    <SlideInner>
                        <img className='Group-14' src={VrIcon} alt="Icon" />
                        <Card.Text className='text-center'>
                            Mixed Reality <br/> (AR/VR)
                        </Card.Text>
                    </SlideInner>
                </Card.Body>
                </Card>
          </CardWrap>
          <CardWrap>
            <Card className="text-center">
                <Card.Body>
                    <SlideInner>
                        <img className='Group-14' src={Group3Icon} alt="MRIcon" />
                        <Card.Text className='text-center'>
                            Machine <br/> Learning (AI)
                        </Card.Text>
                    </SlideInner>
                </Card.Body>
                </Card>
          </CardWrap>
          <CardWrap>
            <Card className="text-center">
                <Card.Body>
                    <SlideInner>
                        <img className='Group-14' src={Group3Icon} alt="MRIcon" />
                        <Card.Text className='text-center'>
                            Machine <br/> Learning (AI)
                        </Card.Text>
                    </SlideInner>
                </Card.Body>
                </Card>
          </CardWrap>
        </Slider>
      </div>
    )
}

export default ReactSlick;