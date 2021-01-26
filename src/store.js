import {createStore} from 'redux';
import {productreducer} from './productreducer';

export const configstore=()=>{
    const store=createStore(productreducer);
    return store;
}


 