import { useState } from 'react'
import Die from './Die'

export default function App() {

  return (
    <main>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='die-container'>
        <Die value={Math.ceil(Math.random() * 6)} />
        <Die value={Math.ceil(Math.random() * 6)} />
        <Die value={Math.ceil(Math.random() * 6)} />
        <Die value={Math.ceil(Math.random() * 6)} />
        <Die value={Math.ceil(Math.random() * 6)} />
        <Die value={Math.ceil(Math.random() * 6)} />
        <Die value={Math.ceil(Math.random() * 6)} />
        <Die value={Math.ceil(Math.random() * 6)} />
        <Die value={Math.ceil(Math.random() * 6)} />
        <Die value={Math.ceil(Math.random() * 6)} />


      </div>
      <button className='roll-btn'>Roll</button>
    </main>
  )
}