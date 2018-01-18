/* @flow */
import {SET_BODY} from "../action/body/setBody"
import type {BodyInterface} from "../body/BodyInterface"

/**
 * Body store definition
 */
export interface BodyStore {
    id?:string;
    parameters?:any;
    service?:BodyInterface;
}

/**
 * Reducer of the body
 *
 * @param   {BodyStore}     state   Previous state
 * @param   {any}           action  Action
 * @return  {BodyStore}             New state
 */
export default (state:BodyStore = {}, action:any) => {
    switch (action.type) {
        case SET_BODY:
            return setBody(state, action);
    }

    return state;
}


/**
 * Set body
 *
 * @param   {BodyStore}     previousState   Previous state
 * @param   {any}           action          Action
 * @return  {BodyStore}                     New state
 */
const setBody = (state:BodyStore, action:any) => {
    let newState = Object.assign({}, state, {
        id: action.id,
        service: action.service,
        parameters: action.parameters
    });
    return newState;
};
