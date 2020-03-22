import styled from 'styled-components';
import HeaderImg from '../Assets/header-background.png';


export const NavRight = styled.div`
    button {
        background-color: rgba(255, 255, 255, 0.27);
        width: 124px;
        height: 34px;
        border-radius: 4px;
        font-size:12px;
        margin-right:15px;
        border-color: #61a7f2;
        letter-spacing:2px;
    }
    a {
        margin-right:15px;
    }
`;

export const BannerWrapper = styled.div`
    background-image: url(${HeaderImg});
`;

export const PaddingWrapper = styled.div`
    padding: 145px 0;
    h1 {
        color:#fff;
        text-align:left;
        font-size:52px;
        font-weight: 500;
    }
    .subhead {
        text-align:left;
        color:#fff;
        line-height:34px;
        font-size:22px;
        font-weight: 300;
    }
    .row {
        align-items:center;
    }
`;
export const Sqwrapper = styled.div`
    background-image: linear-gradient(to bottom, #eef9ff -10%, #ade1ff);
    position:relative;
    top: -30px;
&:before {
    content: '';
    background-image: linear-gradient(to top,#eef9ff -10%,#ade1ff);
    position: absolute;
    height: 96px;
    width: 100%;
    left: 0;
    right: 0;
    top: -96px;
    clip-path: ellipse(53% 58% at 50% 103%);
}
    .card-title {
        font-size:17px;
        color: #1f2a55;
        text-align:left;

    }
    .card-body {
        text-align:left;
        .sm-txt {
            font-size:12px;
            color:#777b8c;
            font-weight: 500;
        }
        .standard {
            font-size:14px;
            color:#1f2a55;
            font-weight: 600;
            padding: 0px 17px;
        }
    }
`;