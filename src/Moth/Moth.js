import React, { Component } from 'react';
import { ReactComponent as ReactLogo } from './moth.svg'

import Moth from './moth.svg'

const StyledLogo = styled(ReactLogo)


class App extends Component {
  render() {
    return (
      <div>
        <img src={Moth} />
        <StyledLogo />
      </div>

    )
  }
}

export default App