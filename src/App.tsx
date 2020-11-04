import * as React from 'react'

const App = (): JSX.Element => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Count is: {count}</h2>
      <button type="button" onClick={() => setCount(old => old + 1)}>
        Increase
      </button>
      <button type="button" onClick={() => setCount(old => old - 1)}>
        Decrease
      </button>
    </div>
  )
}

export default App
