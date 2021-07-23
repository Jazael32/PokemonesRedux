import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import pokeReducer from './pokesDucks';
import usuarioReducer, {leerUsuarioActivoAction} from './usuarioDucks';


const rootReducer = combineReducers({
    pokemones: pokeReducer,
    usuario: usuarioReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    leerUsuarioActivoAction()(store.dispatch);
    return store;
}