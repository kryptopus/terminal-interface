/* @flow */
import type {BodyInterface} from "./BodyInterface"
import type {Component} from "react"
import Empty from "../component/Empty"

/**
 * Empty body
 */
export default class EmptyBody implements BodyInterface
{
    /**
     * Get component class
     *
     * @return  {Component}     Component class
     */
    getComponentClass():Component<*, void>
    {
        return Empty;
    }
}
