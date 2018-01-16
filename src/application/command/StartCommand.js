/* @flow */
import type {CommandInterface} from "solfegejs-cli/interface"
import React from "react"
import blessed from "blessed"
import {render} from "react-blessed"
import { Provider } from "react-redux"
import { createStore } from "redux"
import App from "../../domain/App"
import reducers from "../../domain/reducer"

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
     * Constructor
     */
    constructor()
    {
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
        screen.key(["q", "C-c"], this.quit);


        let store = createStore(reducers)
        const component = render(
            <Provider store={store}>
                <App />
            </Provider>,
            screen
        );
    }

    /**
     * Quit
     */
    quit()
    {
        return process.exit(0);
    }
}
