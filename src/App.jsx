import { useState } from 'react'
import { carPanels } from './data/data'
import './App.css'

const Panel = ({ type, description, color}) => {
  return (
    <div className='panel' style={{backgroundColor: color}}>
      <div className='content'>
        <img src={`./images/icon-${type}.svg`} alt="" className='icon'/>
        <h1 className='title'>{type.toUpperCase()}</h1>
        <p className='desc'>{description}</p>
      </div>

      <button type='button' className='learn'
              style={{color}}>
                Learn More
      </button>
    </div>
  )
}

function App() {

  return (
    <div className='App'>
      {carPanels.map((item) => (
        <Panel {...item} key={item.type} />
      ))}
    </div>
  )
}

export default App
