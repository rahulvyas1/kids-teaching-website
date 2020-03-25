import styled from 'styled-components';
import HeaderImg from '../Assets/header-background.png';
import shapeLeft from '../Assets/shapeLeft.svg';
import shapeRight from '../Assets/shapeRight.svg';
import AngleDown from '../Assets/angleDown.svg'
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
    @media screen and (max-width: 800px) {
        text-align:left;
        display: flex;
        flex-direction: column;
        img {
            margin-bottom:10px;
        }
    }
`;

export const BannerWrapper = styled.div`
    background-image: url(${HeaderImg});
    min-height: 680px;
    position: relative;
    background-size: cover;
&.inner {
    min-height:499px !important;
}
&.inner:before {
    display:none;
    
}
    @media (min-width: 980px){
        .order2 {
            order:2;
        }
    }
    &:before {
        content: '';
        background-image: linear-gradient(to top,#eef9ff -10%,#ade1ff);
        position: absolute;
        height: 146px;
        width: 100%;
        left: 0;
        right: 0;
        bottom: 0px;
        clip-path: ellipse(53% 58% at 50% 103%);
    }
   
`;

export const PaddingWrapper = styled.div`
    padding: 145px 0;
    @media screen and (max-width: 767px) {
        padding: 145px 0; 
    }
    h1 {
        color:#fff;
        text-align:left;
        font-size:52px;
        font-weight: 500;
        @media screen and (max-width: 800px) {
            font-size:37px;
        }
    }
    h2 {
        color:#ffffff;
        font-size:40px;
        font-weight:600;
        margin-bottom:30px;
        @media screen and (max-width: 767px) {
            text-align: center !important;
        }
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
        @media screen and (max-width: 768px){
            flex-direction: column;
            justify-content: center;
            .col {

            }
        }
    }
`;
export const Sqwrapper = styled.div`
    background-image: linear-gradient(to bottom, #eef9ff -10%, #ade1ff);
    position:relative;
    top:0;
    padding-bottom:55px;
    @media screen and (max-width: 800px){
    .card {
        margin-bottom:30px;
    }
}
    

    h3 {
        font-size:32px;
        margin-bottom: 10px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .upcoming-head {
        color:#777b8c;
        font-size:17px;
        font-weight:500;
        margin-bottom: 50px;
        @media screen and (max-width: 800px) {
            width: 70%;
            margin: 25px auto;
        }
    }
        
    }
    .live {
        width: 87px;
        height: 34px;
        background-color: #de9dff;
        color: #ffffff;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:5px;
        margin-left:21px;
        transition:300ms;
        &:hover {
            background:#b777d8;
        }
    }
    .oval {
        width: 8px;
        height: 8px;
        background-color: #ffffff;
        display:block;
        border-radius: 50%;
        margin-right: 5px;
      }
    
    .card-title {
        font-size:17px;
        color: #1f2a55;
        text-align:left;
        border-bottom: solid 2px #e2ebef;
        padding-bottom: 20px;
        font-weight: 700;
        line-height: 24px;
    }
    .card-body {
        text-align:left;
        min-height:430px;
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
        .tagList {
            display:flex;
            list-style:none;
            padding:0;
            margin-bottom: 8px;
            padding-top: 16px;
            li {
                margin-right:8px;
                .tagGreen {
                    background:#dffef8;
                    font-size:12px;
                    border-radius:3px;
                    min-height:24px;
                    display:block;
                    color:#0bc29f;
                    padding: 5px 8px;
                }
            }
        }
        .champList {
            display:flex;
            list-style:none;
            padding:0;
            li {
                margin-right:2px;
                .tagOrange {
                    background:#fff4d6;
                    font-size:12px;
                    border-radius:3px;
                    min-height:24px;
                    display:block;
                    color:#f5bc1c;
                    padding: 5px 8px;
                }
                img {
                    width: 25px;
                    margin-left: -3px;
                }
            }
        }
        .scheduleList {
            line-height:30px;
            padding-left:0;
            border-bottom: solid 2px #e2ebef;
            padding-bottom:15px;
            li {
                font-size:14px;
                font-weight:300;
                color:#1f2a55;
                display: flex;
                align-items: center;
                span {
                    display: flex;
                    margin-right: 21px;
                    width: 21px;
                    justify-content: center;
                    margin-right: 18px;
                }
            }
        }
        .Enroll {
            color:#076fec;
            font-size:14px;
            font-weight: 600;
            letter-spacing:2px;
            display: flex;
            text-align: center;
            height: 30px;
            justify-content: center;
            align-items: center;
            width: 140px;
            transition:300ms;
            &:hover {
                text-decoration:none;
                background:#dffef8;
            }
        }
        .amt {
            font-size:14px;
            color:#1f2a55;
            font-weight: 600;

        }
    }

`;
export const FeatureWrap = styled.div`
    position:relative;
    .featureTag {
        position: absolute;
        left: 15px;
        top: 15px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.38);
        letter-spacing: 2px;
        color: #ffffff;
        font-weight: 100;
        padding: 4px 16px;
        border-radius: 5px;
        text-align: center;
        text-transform:uppercase;
        transition:300ms;
        &:hover {
            background:rgba(0, 0, 0, 0.91);
        }
    }
    img {
        height: 232px;
        object-fit: cover;
    }
`;
export const Footer = styled.div`
    
`;
export const CardWrap = styled.div`
    width: 208px;
    height: 228px;
   
    
    .SampleText {
        width: 160px;
        height: 56px;
        font-family: Montserrat;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.4;
        letter-spacing: 0.2px;
        text-align: center;
        color: #1f2a55;
    }
    .Group-14 {
        width: 108px;
        height: 108px;
        object-fit: contain;
    }
`;
export const SliderWrap = styled.div`
    position:relative;
    margin-bottom: 0px;
    .card {
        border:none;
        background:transparent;
    }
    .card-body {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.02);
        min-height: 227px;
    }
    .slick-slider {
        z-index:2;
        top: -120px;
    }
    .slick-slide {
        width:244px !important;
        background:#ffffff;
        img {
            margin: 0 auto;
            width:90px;
        }
    }
    .slick-track{
        display: flex !important;
        justify-content: space-around;
    }
    .slick-prev:before{
        background-image: url(${shapeLeft});
        content: '' !important;
        display: flex;
        background-size: 25px;
        background-repeat: no-repeat;
        background-color: #fff;
        width: 38px;
        height: 38px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
        border: solid 1px #ebebeb;
        align-items: center;
        justify-content: center;
        background-position: center;
    }
    .slick-next:before {
        background-image: url(${shapeRight});
        content: '' !important;
        display: flex;
        background-size: 25px;
        background-repeat: no-repeat;
        background-color: #fff;
        width: 38px;
        height: 38px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
        border: solid 1px #ebebeb;
        align-items: center;
        justify-content: center;
        background-position: center;
    }
`;

export const BannerCard = styled.div`
    text-align:left;
    h3 {
        color:#ffffff;
        font-size:18px;
        font-weight:600;
    }
    p, a {
        font-size:14px;
        color:#fff;
        font-weight: 100;
    }
    a {
        text-decoration:underline;
        margin-left:5px;
    }
    img {
        margin-bottom: 16px;
    }
    @media screen and (max-width: 768px){
        text-align:center;
    }
`;
export const TabsWrapper = styled.div`
    background:#fff;
    min-height:250px;
    width:90%;
    border-radius: 4px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
    margin:auto;
    .nav-pills {
        position: relative;
        top: -19px;
    }
    .tab-pane {
        padding:50px;
    }
    .fliterDrop {
    &.show {
        .dropdown-toggle {
            color: #1f2a55 !important;
        }
        
    }
        button {
            border-radius: 4px;
            border: solid 1px #d8e4eb;
            background-color: #ffffff !important;
            color: #1f2a55;
            font-size:12px;
            min-width:238px;
            text-align:left;
            height: 40px;
         
        }
        .dropdown-item {
            border:none;
            border-bottom: solid 1px #d8e4eb;
            &:last-child {
                border:none;
            }
        }
        
        .dropdown-toggle::after {
            position:absolute;
            right:11px;
            top:17px;
            border:none;
            background-image: url(${AngleDown});
            width: 13px;
            height: 8px;
            background-size: 10px;
            background-repeat: no-repeat;
        }
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;


export const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    .nav-item {
        border-radius: 4px 0 0 4px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
        border: solid 1px #d8e4eb;
        background-color: #ffffff;
        .nav-link  {
            padding: 10px 30px;
        }
        &:nth-child(2) {
            border-radius:0;
        }
        &:nth-child(3) {
            border-radius:0 4px 4px 0;
        }
    }
  
`;
export const FilterWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:45px;
    p {
        margin-bottom:0;
    }
`;
export const RCardWrap = styled.div`
@media screen and (max-width: 767px){
    .row {
        flex-direction:column;

    }
}
    .levelGrade {
        display:flex;
        p {
            font-size:12px;
            color:#aaafbf;
            font-weight:500;
            text-transform:uppercase;
            margin-right: 25px;
            margin-bottom: 0;
            margin-top: 10px;
            span {
                color:#353f66;
                margin-left:5px;
            }
        }
    }
    .sdetail {
        padding-left:0;
        list-style:none;
        .text-detail {
            vertical-align: middle;
            font-size:14px;
        }
        li {
            img {
                margin-right:14px;
            }
        }
    }
    .d-flex {
        img {
            width:75px;
        }
        .amt {
            color:#1f2a55;
            font-size:18px;
        }
        strike {
            color:#7c829b;
            font-size:14px;
        }
    }
    .learnMore {
        letter-spacing:2px;
        margin: auto;
        text-align: center;
        display: block;
    }
    .card-text {
        border-bottom:2px solid #ddd;
        padding-bottom:22px;
    }
    .card-body {
        min-height:auto;
    }
`;