//Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
enum ActionType{
    search_repositories = 'search_repositories',
    search_repositories_success = 'search_repositories_success',
    search_repositories_error = 'search_repositories_error'
}

interface RepositoriesState{
    loading: boolean;
    error: string | null;
    // data, string[] means array of strings
    data: string[];
}

interface SearchRepositoriesAction{
    type: ActionType.search_repositories;
}
interface SearchRepositoriesSuccessAction{
    type: ActionType.search_repositories_success;
    payload: string[];
}
interface SearchRepositoriesErrorAction{
    type: ActionType.search_repositories_error;
    payload: string;
}


type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;


// :RepositoriesState outside the arg's tells typescript that anything we return from our reducer must match up with that interface
const reducer = (state: RepositoriesState, action: Action ): RepositoriesState =>{
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

export default reducer;