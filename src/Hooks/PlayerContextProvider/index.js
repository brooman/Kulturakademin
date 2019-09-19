import React, { useState } from 'react'

const PlayerContext = React.createContext([{}, () => {}])

const PlayerContextProvider = props => {
  const [state, setState] = useState({})
  const { children } = props
  return <PlayerContext.Provider value={[state, setState]}>{children}</PlayerContext.Provider>
}

export { PlayerContext, PlayerContextProvider }
