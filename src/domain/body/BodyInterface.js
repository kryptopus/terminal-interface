/* @flow */
import type {Component} from "react"

/**
 * Body
 */
export interface BodyInterface
{
    /**
     * Get component class
     *
     * @return  {Component}     Component class
     */
    getComponentClass():Component<*, void>;
}
