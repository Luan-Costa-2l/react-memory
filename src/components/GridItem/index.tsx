import * as C from './styles';
import { GridItemType } from '../../types/GridItemType';
import { items } from '../../data/items';
import b7svg from '../../svgs/b7.svg';

type Props = {
    item: GridItemType;
    onClick: () => void;
}

export const GridItem = ({ item, onClick }: Props) => {
    return (
        <C.Container shownBackground={item.permanentShown || item.shown} onClick={onClick}>
            {item.item !== null && (item.permanentShown || item.shown) &&
                <C.Icon src={items[item.item].icon} alt={items[item.item].name} />
            }
            {!item.permanentShown && !item.shown &&
                <C.Icon src={b7svg} opacity={0.1} />
            }
        </C.Container>
    );
}