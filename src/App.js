import React from 'react'
import './style.css'
import Die from './Die'
import { nanoid } from "nanoid"

export default function App() {

    // state

    const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }

    function handleRoll() {
        setDice(allNewDice())
        console.log(dice)
    }

    const diceElements = dice.map((die) => {
        return <Die key={die.id} value={die.value} />
    })

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={handleRoll}>Roll</button>
        </main>
    )
}