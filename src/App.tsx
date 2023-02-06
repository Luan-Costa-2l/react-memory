import * as C from './App.styles';

import logoImage from './assets/devmemory_logo.png';

const App = () => {

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink>
          <img src={logoImage} width="200" alt="" />
        </C.LogoLink>
        <C.InfoArea>
          ...
        </C.InfoArea>
      </C.Info>
      <C.GridArea>
        ...
      </C.GridArea>
    </C.Container>
  )
}

export default App;