/* @flow */
import {bind} from "decko"
import React, {Component} from "react"
import type {Element} from "react"
import type {Component as ComponentInterface} from "react"
import type {BodyInterface} from "../body/BodyInterface"

export interface Props {
    id?:string;
    service?:BodyInterface;
    ComponentClass?:Component<*, *> | null;
    parameters?:any;
}

/**
 * Body container
 */
export default class BodyContainer extends Component<Props, *> {

    /**
     * Render the component
     */
    render() {
        const id = this.props.id;
        const service = this.props.service;

        if (!service) {
            return (
                <box top={2}></box>
            );
        }

        let parameters = {};
        if (this.props.parameters) {
            parameters = Object.assign({}, parameters, this.props.parameters);
        }

        // $FlowFixMe
        const ComponentClass = this.props.ComponentClass;
        return (
            <box top={2}>
                <ComponentClass {...parameters}/>
            </box>
        );
    }
}
