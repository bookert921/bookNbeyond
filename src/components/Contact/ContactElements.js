import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    padding: 100px 15px;
    background: linear-gradient(
        180deg, 
        rgba(1, 147, 86, 1), 20%, 
        rgba(10, 201, 122, 1) 100%
    );
`
export const FormTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 25px;
    color: #fff;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const FormWrap = styled.div`
    margin: 0 auto 3rem;
    padding: 0 15px;
    line-height: 1.5;
`

export const Form = styled.form`
    background: #010101;
    max-width: 450px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 22px;
    border-radius: 7px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.9);
    text-align: left;

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #010101;
`

export const ShortInputContainer = styled.div`
    max-width: 50%;
    width: 100%;
    padding: 0 15px;
    text-align: left;

    @media screen and (max-width: 480px){
        max-width: 100%;
    }
`

export const LongInputContainer = styled.div`
    max-width: 100%;
    width: 100%;
    padding: 0 15px;
    text-align: left;
`

export const FormInput = styled.input`
    width: 100%;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 7px;
    border: 2px solid #33c098;
    margin-bottom: 1.5rem;
    padding: .375rem .75rem;
    min-height: 40px;
    display: block;
    color: #10b1dd !important;
    box-shadow: 0 1px 1px rgba(0,0,0,.075),0 0 8px #2c99e0;
`

export const TextArea = styled.textarea`
    width: 100%;
    height: auto;
    display: block;
    min-height: 1px;
    padding: .375rem .75rem;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 7px;
    border: 2px solid #33c098;
    color: #10b1dd !important;
    box-shadow: 0 1px 1px rgba(0,0,0,.075),0 0 8px #2c99e0;
`

export const FormButtom = styled.button`
    margin: 0 auto;
    max-width: 100%;
    background: #01bf71;
    padding: 0.5rem 2rem;
    padding-left: 3rem;
    padding-right: 3rem;
    border: 2px solid #10b1dd;
    border-radius: 25px;
    color: #fff;
    line-height: 1.5rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background: teal;
        color: goldenrod;
        font-weight: bold;
        transition: 0.8s all ease;
    }
`

export const Icon = styled(Link)`
    margin: 32px 20px 0 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const Text = styled.p`
    text-align: center;
    color: #fff;
    font-size: 14px;
    padding: 0 20px;
    margin-bottom: 1.5rem;
`