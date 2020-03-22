import React from "react";
import Slider from "react-slick";
import { Card } from 'react-bootstrap'

import GroupIcon from '../../Assets/group-14.svg';
import MRIcon from '../../Assets/mr-icon.svg';
import Icon from '../../Assets/icon.svg';
import Group3Icon from '../../Assets/group-3.svg';
import { CardWrap } from '../../Assets/style'

const ReactSlick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <div className="container">
        <Slider {...settings}>
        <CardWrap>
            <Card className="text-center">
                <Card.Body>
                    <img className='Group-14' src={Icon} alt="Icon" />
                    <Card.Text className='SampleText'>
                        Mobile App Development
                    </Card.Text>
                </Card.Body>
                </Card>
          </CardWrap>
          <CardWrap>
            <Card className="text-center">
                <Card.Body>
                    <img className='Group-14' src={GroupIcon} alt="GroupIcon" />
                    <Card.Text className='SampleText'>
                        Web development
                    </Card.Text>
                </Card.Body>
                </Card>
          </CardWrap>
          <CardWrap>
            <Card className="text-center">
                <Card.Body>
                    <img className='Group-14' src={Icon} alt="Icon" />
                    <Card.Text className='SampleText'>
                        Mobile App Development
                    </Card.Text>
                </Card.Body>
                </Card>
          </CardWrap>
          <CardWrap>
            <Card className="text-center">
                <Card.Body>
                    <img className='Group-14' src={MRIcon} alt="MRIcon" />
                    <Card.Text className='SampleText'>
                        Mixed Reality (AR/VR)
                    </Card.Text>
                </Card.Body>
                </Card>
          </CardWrap>
          <CardWrap>
            <Card className="text-center">
                <Card.Body>
                    <img className='Group-14' src={Group3Icon} alt="Group3Icon" />
                    <Card.Text className='SampleText'>
                        Web development
                    </Card.Text>
                </Card.Body>
                </Card>
          </CardWrap>
        </Slider>
      </div>
    )
}

export default ReactSlick;