/* @flow */
import {bind} from "decko"
import colors from "colors"
import blessed from "blessed"

/**
 * Main menu
 */
export default class Menu
{
    /**
     * Box
     */
    box:any;

    buttonExchanges:any;

    buttonBots:any;

    /**
     * Constructor
     */
    constructor()
    {
    }

    @bind
    initialize(options:any)
    {
        let boxOptions = Object.assign({}, {
            label: "Menu"
        }, options);
        this.box = blessed.box(boxOptions);

        this.buttonExchanges = blessed.button({
            label: colors.bgBlue.yellow("E")+"xchanges",
            top: 0,
            left: 0,
            width: "shrink",
            height: "shrink",
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 1
            }
        });
        this.box.append(this.buttonExchanges);

        this.buttonBots = blessed.button({
            label: colors.bgBlue.yellow("B")+"ots",
            top: 0,
            left: 12,
            width: "shrink",
            height: "shrink",
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 1
            }
        });
        this.box.append(this.buttonBots);
    }

    @bind
    getElement()
    {
        return this.box;
    }
}
