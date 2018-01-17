/* @flow */
import type Container from "solfegejs-dependency-injection/src/ServiceContainer/Container"

export const CHANGE_BODY = "CHANGE_BODY";

export default (container:Container, type:string, parameters:any) => {
    return async (dispatch:Function) => {
        return true;
    }
};
