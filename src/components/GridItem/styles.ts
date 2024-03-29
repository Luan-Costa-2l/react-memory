import styled from "styled-components";

type ContainerProps = {
    shownBackground: boolean;
}

type IconProps = {
    opacity?: number;
}

export const Container = styled.div<ContainerProps>`
    height: 100px;
    background-color: ${props => props.shownBackground ? '#1550FF' : '#E2E3E3'};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Icon = styled.img<IconProps>`
    width: 40px;
    height: 40px;
    opacity: ${props => props.opacity ?? 1};
`;