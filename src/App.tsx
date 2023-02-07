import * as C from './App.styles';
import { useState, useEffect } from 'react';

import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';

import { GridItemType } from './types/GridItemType';

const App = () => {
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

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