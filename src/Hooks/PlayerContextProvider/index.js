import React, { useState } from 'react'

const PlayerContext = React.createContext([{}, () => {}])

const PlayerContextProvider = props => {
  const [state, setState] = useState({})
  return <PlayerContext.Provider value={[state, setState]}>{props.children}</PlayerContext.Provider>
}

export { PlayerContext, PlayerContextProvider }
