import { createStore } from 'redux';

/* const add = (data) => {
  return data.a + data.b
} */

/* const add = ({ a, b }, c) => {
  return a + b + c
}
console.log(add({ a: 1, b: 12 }, 100));
 */





//payload = {} -> needed to define an object
const incrementCount = (payload = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});




const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1

      return {
        count: state.count + incrementBy
      };

    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ?
        action.decrementBy : 1
      return {
        count: state.count - decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }

    case 'RESET':
      return {
        count: 0
      }


    default:
      return state;
  }



});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());

});

/* store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
}); */

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }))


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