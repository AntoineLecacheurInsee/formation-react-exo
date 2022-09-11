import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../../redux/counterSlice';

export function CounterModernRedux() {
    // Sélecteur pour récupérer la valeur du counter dans le store redux
    const count = useSelector(state => state.counter.value)
    // Fonction permettant de dispatcher des actions redux  
    const dispatch = useDispatch()

    const [amount, setAmount] = useState(0);

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            <div>
                <input type="number" aria-label="Amount to add to counter"
                    value={amount} onChange={e => setAmount(e.target.valueAsNumber)} />
                <button
                    aria-label="Add input value to counter"
                    // Il suffit de passer la payload "amount" en paramètre de l'action
                    onClick={() => dispatch(incrementByAmount(amount))}
                >
                    Add input value to counter
                </button>
            </div>
            <button onClick={() => dispatch(reset())}>
                Reset counter
            </button>
        </div>
    )
}