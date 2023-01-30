// import { legacy_createStore as createStore } from 'redux' 
import { createSlice ,configureStore} from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) { 
            state.counter++;
        },
        decrement(state) {
            state.counter--;
         },
        increase(state, action) {
            state.counter = state.counter + action.payload;
         },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1, 
//             showCounter : state.showCounter
//         }   
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.value, 
//             showCounter : state.showCounter
//         }   
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter : state.showCounter
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter:!state.showCounter
//         }
//     }
    
//     return state;
// }

// const store = createStore(counterReducer)
const store = configureStore({
    reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;


export default store;