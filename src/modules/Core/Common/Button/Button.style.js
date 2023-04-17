import styled from "styled-components";

export const ButtonContainer = styled.a`
    color: #222222;
    background:#383838 ;
    font-weight: bold;
    text-decoration: none;
    margin: 0 15px;
    height: 3.5rem;
    border-radius: 8px;
    border: #59c2ff solid 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;

    :hover {
        background: #ffffff;
        color: #292929;
        border: none;
        text-decoration: none;
    }
`;

export const Select = styled.select`
    color: #59c2ff;
    font-weight: bold;
    text-decoration: none;
    margin: 0 15px;
    height: 3.5rem;
    border-radius: 8px;
    border: #59c2ff solid 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    background: transparent;
    cursor: pointer;
    outline: none;
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance: none;
  
    option {
        color: #ffffff;
        background: #282828;
        font-weight: bold;
        text-decoration: none;
        margin: 0 15px;
        height: 3.5rem;
        border-radius: 8px;
        border: #59c2ff solid 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.5rem 0;
    }

    :hover {
        background: #219ae0;
        color: #ffffff;
        border: none;
        text-decoration: none;
    }
`;