import {get} from '../api';
import store from '../index'


async function resolvedPromise(prom){
    return await prom;
}
const initPromise = new Promise((resolve, reject) => {
  });
export default (state = initPromise , action) => {
    switch(action.type){
        case 'GET_ALL':
        const d = resolvedPromise(get())
           return d
        case 'ADD_CAKE':
            return state;
        default:
            return state;
    }
}