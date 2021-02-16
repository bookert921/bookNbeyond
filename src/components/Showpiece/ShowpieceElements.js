import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const ShowpieceContainer = styled.div`
    background: #0c0c0c;
    ${'' /* background-size: contain; */}
    display: flex;
    justify-content: center;
    align-items: center;
    ${'' /* padding: 0 30px; */}
    height: 750px;
    position: relative;
    z-intex: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const Landing = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    ${'' /* background: #232a34; */}
    background-size: contain;
`

export const LandingContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LandingH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    opacity: ${({ hideShowpieceH1 }) => hideShowpieceH1 ? 1 : 1 - window.scrollY / 200};
    transition: 0.5s;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const LandingP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    opacity: ${({ hideShowpieceP }) => hideShowpieceP ? 1 : 1 - window.scrollY / 250};
    transition: 0.5s;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const AboutBtnContainer = styled.div`
    margin: 2rem auto;
    z-index: 1;
    opacity: ${({ hideShowpieceButton }) => hideShowpieceButton ? 1 : 1 - window.scrollY / 275};
    transition: 0.5s;
    animation: slide 3000ms cubic-bezier(0.42, 0.15, 0.22, 0.96) forwards;
    
    :after {
        content: '';
        width: 0px;
        height: 100%;
        left: 0;
        bottom: 0;
        z-index: -1;
    }
`

export const AboutButton = styled(LinkS)`
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
    padding: 10px;
    color: #fff;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(135deg, #02aab0 0%, #00cdac 100%);
    background: transparent;
    border-image-slice: 1;
    cursor: pointer;
    
    &:hover {
        background: linear-gradient(135deg, #02aab0 0%, #00cdac 100%);
        transition: 0.8s all ease;
    }
`