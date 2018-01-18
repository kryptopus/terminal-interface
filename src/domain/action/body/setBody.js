/* @flow */
import type {BodyInterface} from "../../body/BodyInterface"

export const SET_BODY = "SET_BODY";

export default (id:string, body:BodyInterface, parameters:any) => {
    return {
        type: SET_BODY,
        id: id,
        service: body,
        parameters: parameters
    }
};
