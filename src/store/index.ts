import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { answersReducer } from './answersReducer';
import { questionsReducer } from './questionsReducer';

const rootReducer = combineReducers({
  answers: answersReducer,
  questions: questionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
