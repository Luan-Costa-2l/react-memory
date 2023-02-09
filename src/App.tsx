import * as C from './App.styles';
import { useState, useEffect } from 'react';

import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';

import { GridItemType } from './types/GridItemType';
import { items } from './data/items';

const App = () => {
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  const resetAndCreateGrid = () => {
    // passo 1 - resetar o jogo
    setShownCount(0);
    setMoveCount(0);
    setTimeElapsed(0);

    // passo 2 - criar o grid e começar o jogo
    // 2.1 criar grid vazio
    let newGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) newGrid.push({
      item: null, permanentShown: false, shown: false
    });

    // 2.3 - preencher o grid
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || gridItems[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2))
        }
        newGrid[pos].item = i;
      }
    }

    // 2.3 - jogar no state
    setGridItems(newGrid);

    // passo 3 começar o jgo
    setPlaying(true);
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink>
          <img src={logoImage} width="200" alt="" />
        </C.LogoLink>
        <C.InfoArea>
          <InfoItem label='Tempo' value='00:55' />
          <InfoItem label='Movimentos' value='2' />
        </C.InfoArea>
        <Button label='Restart' icon={RestartIcon} />
      </C.Info>
      <C.GridArea>
        ...
      </C.GridArea>
    </C.Container>
  )
}

export default App;