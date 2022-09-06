import styled from "styled-components";

export const Button = styled.button`

    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    height: 3rem;
    background-color: #7f7f7f;
    border: none;
    padding: 0 1rem;
    box-sizing: border-box;
    border-radius: 0.3rem;
    background-color: #191919;
    color: #7f7f7f;
    border: 1px solid #191919;
    margin-right: 1rem;
    transition: 0.1s all;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        color: #7f7f7f;
        border: 1px solid #7f7f7f;
        background-color: #202020;
    
        cursor: pointer;
    }

`