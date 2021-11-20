import React from 'react'

interface AppProps {}

const { SNOWPACK_PUBLIC_GREET } = __SNOWPACK_ENV__

function App({}: AppProps) {
  return <div className="App">{SNOWPACK_PUBLIC_GREET}</div>
}

export default App
import.meta.env
