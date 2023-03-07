import styled from "styled-components";


export const HeaderContainer = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    object-fit: cover;

    ::before {
        content: '';
        position: absolute;
        height: 60vh;
        width: 100%;
        background: rgb(0,17,65);
        background: linear-gradient(-280deg, rgba(0, 0, 0, 0.712) 0%, rgba(1, 65, 168, 1) 51%, transparent 100%);
    }

    img {
        background: red;
        width: 100%;
        background-size: cover;
        object-fit: cover;
    }
`;

export const ContentInfo = styled.div`
    position: absolute;
    margin: 0 7rem;
    height: 60vh;

    :last-child div {
        font-size: 24px;
        font-weight: 600;
        color: rgba(1, 65, 168, 1);
        background: #fff;
        width: min-content;
        padding: 2px 10px;
        border-radius: 7px;
        margin-bottom: 2.5rem;
    }

    span {
        color: rgb(230, 230, 230);
        line-height: 2rem;
    }
`;

export const Name = styled.h2`
    margin-bottom: 5rem;
    position: relative;
    font-weight: 400;
    color: #fff;
`;

export const Social = styled.h2`
    margin-bottom: 5rem;
    position: relative;
    font-weight: 400;
    color: #fff;
    display: flex;
`;