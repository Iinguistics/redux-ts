import { ActionType } from '../action-types/index'
import { Action } from '../actions/index'


interface RepositoriesState{
    loading: boolean;
    error: string | null;
    // data, string[] means array of strings
    data: string[];
}


const initialState = {
    loading: false,
    error: null,
    data: []
}



// :RepositoriesState outside the arg's tells typescript that anything we return from our reducer must match up with that interface
const repositoriesReducer = (state: RepositoriesState = initialState, action: Action ): RepositoriesState =>{
  switch(action.type){
    case ActionType.search_repositories:
        return { loading: true, error: null, data: [] }

    case ActionType.search_repositories_success:
        return { loading: false, data: action.payload, error: null }

    case ActionType.search_repositories_error:
        return { loading: false, error: action.payload, data: [] }

    default:
        return state;
  }
};

export default repositoriesReducer;