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