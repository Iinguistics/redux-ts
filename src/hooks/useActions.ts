import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';
import { bindActionCreators } from 'redux';

export const useActions = ()=>{
    const dispatch = useDispatch();
 
    // bindActionCreators gives back an object that contains all the actionCreators, then when called automatically provided to dispatch
   return bindActionCreators(actionCreators, dispatch);

};