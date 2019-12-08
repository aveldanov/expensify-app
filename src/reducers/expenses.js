
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

export default expensesReducer;

