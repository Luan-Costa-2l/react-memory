import * as C from './App.styles';
import { useState, useEffect } from 'react';

import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';

import { GridItemType } from './types/GridItemType';
import { items } from './data/items';
import { GridItem } from './components/GridItem';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';

const App = () => {
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => {
    resetAndCreateGrid();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTimeElapsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter(item => item.shown === true);
      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          let newGrid = [...gridItems];
          for (let i in newGrid) {
            if (newGrid[i].shown) {
              newGrid[i].permanentShown = true;
              newGrid[i].shown = false;
            }
          }
          setGridItems(newGrid);
          setShownCount(0);
        } else {
          let newGrid = [...gridItems];
          setTimeout(() => {
            for (let i in newGrid) {
              newGrid[i].shown = false;
            }
            setGridItems(newGrid);
            setShownCount(0);
          }, 300);
        }
        setMoveCount(moveCount + 1);
      }
    }
  }, [shownCount, gridItems]);

  useEffect(() => {
    if (moveCount > 0 && gridItems.every(value => value.permanentShown)) {
      setPlaying(false);
    }
  }, [moveCount]);

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
        while (pos < 0 || newGrid[pos].item !== null) {
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

  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let newList = [...gridItems];
      if (newList[index].permanentShown === false && newList[index].shown === false) {
        newList[index].shown = true;
        setShownCount(shownCount + 1);
      }
      setGridItems(newList);
    }
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink>
          <img src={logoImage} width="200" alt="" />
        </C.LogoLink>
        <C.InfoArea>
          <InfoItem label='Tempo' value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label='Movimentos' value={moveCount.toString()} />
        </C.InfoArea>
        <div className='buttonContainer'>
          <Button label='Restart' icon={RestartIcon} onClick={resetAndCreateGrid} />
        </div>
      </C.Info>
      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
            <GridItem key={index} item={item} onClick={() => handleItemClick(index)} />
          ))}
        </C.Grid>
      </C.GridArea>
      <div className="buttonContainer">
        <Button label='Restart' icon={RestartIcon} onClick={resetAndCreateGrid} />
      </div>
    </C.Container>
  )
}

export default App;