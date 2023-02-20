import styled from "styled-components";

export const  Container = styled.div`
    max-width: 750px;
    padding: 50px 0;
    display: flex;
    margin: auto;

    @media(max-width: 760px) {
        flex-direction: column;
        padding: 50px 20px;
    }
`;

export const Info = styled.div`
    max-width: 200px;
    font-family: Arial, Helvetica, sans-serif;

    @media (max-width: 760px) {
        width: 100%;
        max-width: 430px;
        text-align: center;
        margin: auto;
    }
`;

export const LogoLink = styled.a`
    display: block;
`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;

    @media(max-width: 760px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    
    @media(max-width:760px) {
        width: 100%;
        margin-top: 50px;
        justify-content: center;
    }
`;

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media(max-width: 760px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;