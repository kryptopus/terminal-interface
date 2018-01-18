/* @flow */
import type Container from "solfegejs-dependency-injection/src/ServiceContainer/Container"
import setBody from "./setBody"

export const CHANGE_BODY = "CHANGE_BODY";

export default (container:Container, id:string, parameters:any) => {
    return async (dispatch:Function) => {
        const registry = await container.get("kryptopus_terminal_interface_body_registry");
        const body = registry.getBodyById(id);

        dispatch(setBody(id, body, parameters));
        return true;
    }
};
