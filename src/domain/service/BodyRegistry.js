/* @flow */
import type {BodyInterface} from "../body/BodyInterface"

/**
 * Registry of available bodies
 */
export default class BodyRegistry
{
    /**
     * Available bodies
     */
    bodies:Array<BodyInterface>;

    /**
     * Constructor
     */
    constructor()
    {
        this.bodies = [];
    }

    /**
     * Add body instance
     *
     * @param   {BodyInterface}     body    Body instance
     */
    addBody(body:BodyInterface):void
    {
        this.bodies.push(body);
    }
}
