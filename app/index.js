import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
/*
  Component:
    State
    Lifecycle (fetching data, event when component is added)
    UI
*/

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    )
  }
}

// Takes React element and where to render it as arguments
ReactDOM.render(
  <App/>,
  document.getElementById('app')
)