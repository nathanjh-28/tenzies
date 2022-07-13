import React from 'react'
import './style.css'
import Die from './Die'
import { nanoid } from "nanoid"

export default function App() {

    // state

    const [dice, setDice] = React.useState(allNewDice())

    const [tenzies, setTenzies] = React.useState(false);

    React.useEffect(() => {
        let count = 0;
        for (let i = 0; i < dice.length; i++) {
            if (dice[i].isHeld && dice[i].value === dice[0].value) {
                count++
            }
        }
        if (count === 10) {
            setTenzies(true)
            console.log('tenzies!!!!');
        }
    }, [dice])

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
        setDice(prevDice => prevDice.map(die => {
            return die.isHeld ? { ...die } :
                {
                    value: Math.ceil(Math.random() * 6),
                    isHeld: false,
                    id: nanoid()
                }
        }))
    }

    function holdDice(thisId) {
        setDice(prevDice => prevDice.map(die => {
            return die.id === thisId ?
                { ...die, isHeld: !die.isHeld } :
                die
        })
        )
    }

    const diceElements = dice.map((die) => {
        return <Die key={die.id}
            value={die.value}
            held={die.isHeld}
            handleClick={() => holdDice(die.id)
            } id={die.id} />
    })

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={handleRoll}>Roll</button>
        </main>
    )
}