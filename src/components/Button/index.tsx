import * as C from './styles';

type Props = {
    label: string;
    icon?: string;
}

export const Button = ({ label, icon }: Props) => {
    return (
        <C.Container>
            {icon &&
                <C.IconArea>
                    <C.Icon src={icon} />
                </C.IconArea>
            }
            <C.Label>{label}</C.Label>
        </C.Container>
    )
}