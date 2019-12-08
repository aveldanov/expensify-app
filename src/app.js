//Using Third Party component
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/style.scss';
import AppRouter from './routers/AppRouter.js';

import configureStore from './store/configureStore.js';
import { addExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js'


const store = configureStore();


store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // console.log(store.getState());
  console.log(visibleExpenses);
});



store.dispatch(addExpense({ description: 'Water Bill' }));
store.dispatch(addExpense({ description: 'Gas Bill' }));

store.dispatch(setTextFilter('Gas'));

console.log(store.getState());


ReactDOM.render(<AppRouter />, document.getElementById("app"));