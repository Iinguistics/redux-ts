import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducers'

const reducers = combineReducers({
   repositories: repositoriesReducer

});

export default reducers;

// defining rootstate so typescript knows what to expect from the state so when useSelector hook is used it knows what type state is
export type RootState = ReturnType<typeof reducers>;