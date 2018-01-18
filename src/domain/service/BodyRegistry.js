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
    bodies:Map<string, BodyInterface>;

    /**
     * Constructor
     */
    constructor()
    {
        this.bodies = new Map();
    }

    /**
     * Add body instance
     *
     * @param   {string}            id      Body identifier
     * @param   {BodyInterface}     body    Body instance
     * @param   {any}               options Body options
     */
    addBody(id:string, body:BodyInterface, options:any = {}):void
    {
        this.bodies.set(id, body);
    }

    /**
     * Get body by its ID
     *
     * @param   {string}            id  Body identifier
     * @return  {BodyInterface}         Body
     */
    getBodyById(id:string):BodyInterface | void
    {
        if (this.bodies.has(id)) {
            return this.bodies.get(id);
        }

        throw new Error(`Body "${id}" not found`);
    }
}
