import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    color: #fff;

    background: linear-gradient(180deg, rgba(1, 147, 86, 1), 20%, rgba(10, 201, 122, 1) 100%);
    
    @media screen and (max-width: 786px) {
        padding: 100px 0;
    }
`
export const FormTitle = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
    padding: 20px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const FormWrap = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 50px 0;
    justify-content: center;
    
    @media screen and (max-width: 400px){
        height: 80%;
    }
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`
export const Form = styled.form`
    background: #010101;
    max-width: 450px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 20px 22px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`
export const FormInput = styled.input`
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px
`

export const TextArea = styled.textarea`
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px
`

export const FormButtom = styled.button`
    margin: 10px auto;
    width: 80%;
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background: teal;
        color: goldenrod;
        font-weight: bold;
        transition: 0.8s all ease;
    }
`

export const Text = styled.span`
    text-align: center;
    margin-top: 20px;
    color: #fff;
    font-size: 14px;
`