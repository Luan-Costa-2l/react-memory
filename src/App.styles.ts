import styled from "styled-components";

export const  Container = styled.div`
    max-width: 750px;
    padding: 50px 0;
    display: flex;
    margin: auto;
`;

export const Info = styled.div`
    flex: 1;
    max-width: 200px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const LogoLink = styled.a`
    display: block;
`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;
`;

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;