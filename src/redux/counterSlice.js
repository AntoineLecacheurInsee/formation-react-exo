import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            // Grâce à Redux Toolkit, on peut écrire de la logique "mutative" dans les reducers.
            // Dans les faits, la bibliothèque Immer est utilisée et gère ces changements pour produire
            // un nouvel état immuable à partir de ces modifications demandées.
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        reset: state => { state.value = initialState.value }
    }
})

// Les créateurs d'action sont générés à partir de chaque reducer déclaré pour la Slice
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer