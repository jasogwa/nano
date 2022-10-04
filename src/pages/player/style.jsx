import styled from "styled-components";

export const Container = styled.div`
    width: 60%;
    margin: auto;
`;

export const Title = styled.h1`
    align-content: center;
    text-align: center;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Wapper1 = styled.div`
    flex: 1;
`;

export const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
    &:hover{
      background-color: #fccbcb;
    }
`;