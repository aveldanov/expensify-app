import { createStore } from 'redux';


//payload = {} -> needed to define an object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count: count
});



const resetCount = () => ({
  type: 'RESET'
});

//Reducers
// 1. Reducers are pure functions (do not take/change items outside of the function scope)
// 2. Never change state or action


const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };

    case 'SET':
      return {
        count: action.count
      };

    case 'RESET':
      return {
        count: 0
      }


    default:
      return state;
  }
};


const store = createStore(countReducer);



const unsubscribe = store.subscribe(() => {
  console.log(store.getState());

});



store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }))


store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 5 }));


store.dispatch(setCount({ count: 201 }));

store.dispatch(resetCount());

//unsubscribe();
/* 
store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'RESET'
})

store.dispatch({
  type: 'DECREMENT'
});
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'SET',
  count: 101
}) */