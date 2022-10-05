import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 600px;
    background: #ffffff;
    margin: auto;
`;

export const Title = styled.h1`
    margin-top: 5px;
    text-align: center;
    color: #ed7d0e;
`;

export const Video = styled.div``;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const WrapLeft = styled.div`
    flex: 2;
    justify-content: left;
`;

export const WrapRight = styled.div`
    justify-content: right;
`;

export const Button = styled.button`
    color: #ed7d0e;
    font-size: 1em;
    margin-right: 1em;
    margin-top: 3px;
    padding: 0.25em 1em;
    border: 2px solid #ed7d0e;
    border-radius: 3px;
    cursor: pointer;
    &:hover{
      background-color: #ed7d0e;
      color: white;
    }
`;