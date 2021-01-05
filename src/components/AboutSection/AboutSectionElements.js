import styled from 'styled-components';

export const AboutContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 786px) {
        padding: 80px 40px;
    }
`;

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 600px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 910px){
        height: 700px;
    }

    @media screen and (max-width: 790px){
        height: 1000px;
    }
    
    @media screen and (max-width: 540px){
        height: 1100px;
    }
    
    @media screen and (max-width: 490px){
        height: 1200px;
    }
    
    @media screen and (max-width: 390px){
        height: 1800px;
    }
`;

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    ${'' /* align-items: center; */}
    grid-template-areas: ${({ imgStart }) =>
        imgStart ? `'col2 col1'` : `'col1 col2'`};
    
    @media screen and (max-width: 786px) {
        grid-template-areas: ${({ imgStart }) =>
        imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    ${'' /* padding-bottom: 60px; */}
`;

export const AboutTitle = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    padding: 20px;
    color: ${({ darkText }) => darkText ? '#010606' : '#fff'};
    text-decoration: underline;


    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const TopLine = styled.h1`
    color: #01bf71;
    font-weight: 700px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-size: 48px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    
    line-height: 1.1;
    font-weight: 600px;
    color: ${({ lightText }) => lightText ? '#f7f8fa' : '#010606'};
    
    @media screen and (max-width: 480px){
        font-size: 32px;
        text-align: center;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => darkText ? '#010606' : '#fff'};

    @media screen and (max-width: 786px) {
        font-size: 16px;
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    
    @media screen and (max-width: 786px) {
        width: 100%;
        ${'' /* margin-right: 50px; */}
    } 
`;

export const Highlights = styled.h1`
    margin-bottom: 24px;

    line-height: 1.1;
    font-weight: 600px;
    color: goldenrod;
    
    @media screen and (max-width: 480px){
        font-size: 32px;
`

export const HighlightPointsWrapper = styled.div`
    padding-top: 0;
`

export const HighlightPoints = styled.li`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => darkText ? '#010606' : '#fff'};

    @media screen and (max-width: 786px) {
        font-size: 16px;
    }
`