/* @flow */
import type Container from "solfegejs-dependency-injection/src/ServiceContainer/Container"
import type {CommandInterface} from "solfegejs-cli/interface"
import React from "react"
import blessed from "blessed"
import {render} from "react-blessed"
import App from "../../domain/App"

/**
 * Start terminal interface
 */
export default class StartCommand implements CommandInterface
{
    /**
     * Command description
     */
    description:string;

    /**
     * Service container
     */
    container:Container;

    /**
     * Constructor
     *
     * @param   {Container}     container   Service container
     */
    constructor(container:Container)
    {
        this.container = container;
    }

    /**
     * Get command name
     *
     * @return  {string}    Command name
     */
    getName():string
    {
        return "kryptopus:terminal-interface:start";
    }

    /**
     * Get command description
     *
     * @return  {string}    Command description
     */
    getDescription():string
    {
        return this.description;
    }

    /**
     * Configure the command
     */
    async configure()
    {
        this.description = "Start terminal interface";
    }

    /**
     * Execute the command
     *
     * @param   {Array}     parameters  Command parameters
     */
    execute(parameters:Array<string>)
    {
        // Creating our screen
        const screen = blessed.screen({
            autoPadding: true,
            smartCSR: true,
            title: "Kryptopus"
        });

        const component = render(<App screen={screen} container={this.container}/>, screen);
    }
}
