import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//ADD_EXPENSE
// default items and action item
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}) =>
  ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  });


//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
})

//SET_TEXT_FILTER
const setTextFilter = (
  text = ''
) =>
  ({
    type: 'SET_TEXT_FILTER',
    text: text

  });

//SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});


//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate: startDate
});

//SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate: endDate
});

//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      //console.log(action.id);
      // console.log(expenseOne.expense.id)
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':

      return state.map((expense) => {
        //console.log(expense.description, expense.id);
        //  console.log("action ID:", action.id);
        if (expense.id === action.id) {

          return {

            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });



    default:
      return state;
  }
};






//Filters Reducer
const filetersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filetersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };

    default:
      return state;
  }
}
//Store Creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  }
  ));

//Tracks changes
store.subscribe(() => {
  console.log(store.getState());
});

/* const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));
const expenseThree = store.dispatch(addExpense({ description: 'Bread', amount: 200 }));
 */
/* store.dispatch(removeExpense({ id: expenseOne.expense.id }))

//console.log(expenseOne)


store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate()); */

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [{
    id: 'test',
    description: 'January Rent',
    note: 'This is a final payment for the address',
    amount: 54500, // $545.00
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};




/* const user = {
  name: "Anton",
  age: 23
};
console.log({
  age: 27,
  ...user,
  location: 'Philly'
}); */
