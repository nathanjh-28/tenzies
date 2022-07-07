import React from 'react'
import './style.css'
import Die from './Die'

export default function App() {

    // state

    const [dieArr, setDieArr] = React.useState(makeNumArr)

    function randomDie() {

        const num = Math.floor(Math.random() * 6)
        return num > 0 ? num : randomDie()
    }

    function makeNumArr() {
        const arr = [];
        for (let i = 1; i < 11; i++) {
            arr.push(randomDie())
        }
        return arr;
    }


    const numArrEls = dieArr.map((num, idx) => {
        return <Die key={idx} value={num} />
    })

    return (
        <main>
            <div className="die-container">
                {numArrEls}
            </div>

        </main>
    )
}