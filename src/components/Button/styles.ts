import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 50px;
    color: #FFF;
    background-color: #1550FF;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 1;
    transition: all .3s ease;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 760px) {
        margin: auto;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, .2);
`;

export const Icon = styled.img`
    height: 20px;
`;

export const Label = styled.div`
    height: inherit;
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;