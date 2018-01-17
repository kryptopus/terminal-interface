/* @flow */
import {SET_EXCHANGES} from "../action/exchange/setExchanges"

/**
 * Reducer of the exchanges
 *
 * @param   {Array<any>}    state   Exchanges
 * @param   {any}           action  Action
 * @return  {Array<any>}            New state
 */
export default (state:Array<any> = [], action:any) => {
    switch (action.type) {
        case SET_EXCHANGES:
            return setExchanges(state, action);

    }

    return state;
}

/**
 * Set exchanges
 *
 * @param   {Array<any>}    previousState   Previous state
 * @param   {any}           action          Action
 * @return  {Array<any>}                    New state
 */
const setExchanges = (previousState:Array<any>, action:any) => {
    let newState = [];

    for (let exchange of action.exchanges) {
        newState.push(exchange);
    }

    return newState;
}

