import axios from 'axios'
import { ActionType } from '../action-types/index'
import { Action } from '../actions/index'

// type definition for the dispatch function
import { Dispatch } from 'redux'


export const searchRepositories = (term: string)=>{
    return async (dispatch: Dispatch<Action>) =>{
        try{
            dispatch({ type: ActionType.search_repositories })
        
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params:{
                    text: term
                }
            });

            // just the name
            const names = data.objects.map((res: any)=>{
              return res.package.name;
            });
        dispatch({
              type: ActionType.search_repositories_success,
              payload: names
             });

        }catch (error){
         dispatch({
             type: ActionType.search_repositories_error,
             payload: error.response && error.response.data.message ? error.response.data.message : error.message
         })
        }
    };
};