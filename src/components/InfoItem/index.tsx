import * as C from './styles';

type Props = {
    label: string;
    value: string;
}

export const InfoItem = ({ label, value }: Props) => {
    return (
        <C.Container>
            <C.Label></C.Label>
            <C.Value></C.Value>
        </C.Container>
    )
}