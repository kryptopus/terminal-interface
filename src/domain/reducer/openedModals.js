/* @flow */
import {OPEN_MODAL_EXCHANGES} from "../action/modal/openModalExchanges"
import {CLOSE_MODAL_EXCHANGES} from "../action/modal/closeModalExchanges"

/**
 * Reducer of the opened modals
 *
 * @param   {Array<any>}    state   Opened modal parameters
 * @param   {any}           action  Action
 * @return  {Array<any>}            New state
 */
export default (state:Array<any> = [], action:any) => {
    switch (action.type) {
        case OPEN_MODAL_EXCHANGES:
            return openModalExchanges(state, action);
        case CLOSE_MODAL_EXCHANGES:
            return closeModalExchanges(state, action);
    }

    return state;
}

/**
 * Open modal exchanges
 *
 * @param   {Array<any>}    previousState   Previous state
 * @param   {any}           action          Action
 * @return  {Array<any>}                    New state
 */
const openModalExchanges = (previousState:Array<any>, action:any) => {
    for (let modal of previousState) {
        if (modal.id === "exchanges") {
            return previousState;
        }
    }

    let newState = previousState.slice();
    newState.push({
        id: "exchanges"
    });

    return newState;
}

/**
 * Close modal exchanges
 *
 * @param   {Array<any>}    previousState   Previous state
 * @param   {any}           action          Action
 * @return  {Array<any>}                    New state
 */
const closeModalExchanges = (previousState:Array<any>, action:any) => {
    let newState = previousState.slice();
    for (let index = 0, total = newState.length; index < total; index++) {
        if (newState[index].id === "exchanges") {
            newState.splice(index, 1);
            break;
        }
    }

    return newState;
}
