import React from 'react'
import './style.css'
import Die from './Die'

export default function App() {

    function randomDie() {

        const num = Math.floor(Math.random() * 6)
        return num > 0 ? num : randomDie()
    }

    return (
        <main>
            <div className="die-container">

                <Die value={randomDie()} />
                <Die value={randomDie()} />
                <Die value={randomDie()} />
                <Die value={randomDie()} />
                <Die value={randomDie()} />
                <Die value={randomDie()} />
                <Die value={randomDie()} />
                <Die value={randomDie()} />
                <Die value={randomDie()} />
                <Die value={randomDie()} />
            </div>

        </main>
    )
}