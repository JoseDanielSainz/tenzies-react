import { useState, useRef, useEffect } from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice())
  const [rollCount, setRollCount] = useState(0)
  const buttonRef: any = useRef(null)
  console.log(buttonRef)

  const gameWon = dice.every(die => die.isHeld) &&
    dice.every(die => die.value === dice[0].value)

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus()
    }

  }, [gameWon])

  function generateAllNewDice() {
    return new Array(10)
      .fill({})
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }))
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die =>
      die.isHeld === false ?
        { ...die, value: Math.ceil(Math.random() * 6) } :
        die
    ))
    setRollCount(oldCount => oldCount + 1)
  }

  function newGame() {
    setDice(generateAllNewDice())
    setRollCount(0)
  }

  function hold(id: string) {
    setDice(oldDice => oldDice.map(die =>
      die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    ))
  }

  const diceElements = dice.map(dieObj => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ))

  return (
    <main>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>

        {diceElements}

      </div>

      {gameWon === false
        ? <button onClick={rollDice} className='roll-btn'>Roll</button>
        :
        <div>
          <button ref={buttonRef} onClick={newGame} className="new-game-btn">New Game</button>
          <div className="win-text">You completed the game in {rollCount} rolls!</div>
          <Confetti />
          <div aria-live="polite">
            <p>Congratulations, you won! Press new game to start.</p>
          </div>
        </div>
      }

    </main>
  )
}