import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 700px;
    position: relative;
    display: flex;
    border-radius: 10px;
`;

export const Title = styled.h1`
    align-content: center;
    text-align: center;
`;

export const Control = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    position: relative;
`;

export const Button = styled.button`
    display: inline-block;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
    cursor: pointer;
`;