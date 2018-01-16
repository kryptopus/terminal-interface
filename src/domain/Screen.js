/* @flow */
import {bind} from "decko"
import blessed from "blessed"
import type Menu from "./component/Menu"
import type ModalBots from "./component/ModalBots"

/**
 * Screen
 */
export default class Screen
{
    /**
     * Blessed screen
     */
    blessedScreen:any;

    /**
     * Menu line
     */
    menuLine:any;

    /**
     * Menu component
     */
    menu:Menu;

    modalBots:ModalBots

    /**
     * Constructor
     *
     * @param   {Menu}  menu    Menu component
     */
    constructor(menu:Menu, modalBots:ModalBots)
    {
        this.menu = menu;
        this.modalBots = modalBots;
    }

    @bind
    initialize()
    {
        this.blessedScreen = blessed.screen({
            smartCSR: true
        });
        this.blessedScreen.key(["q", "C-c"], this.quit);

        // Add main menu
        this.menu.initialize({
            top: 0,
            left: 0,
            width: "100%"
        });
        this.blessedScreen.append(this.menu.getElement());

        // Draw menu line
        this.menuLine = blessed.line({
            orientation: "horizontal",
            type: "line",
            top: 1,
            width: "100%",
            style: {
                fg: "white"
            }
        });
        this.blessedScreen.append(this.menuLine);

        // Add modals
        this.modalBots.initialize();
        this.modalBots.hide();
        this.modalBots.on("select", this.onSelectBot);
        this.blessedScreen.append(this.modalBots.getElement());
        this.blessedScreen.key(["b"], this.openModalBots);

        // Escape
        //this.blessedScreen.key(["escape"], this.onEscape);

        setInterval(this.render, 200);
    }

    @bind
    render()
    {
        this.blessedScreen.render();
    }

    @bind
    openModalBots()
    {
        this.modalBots.show();
    }

    @bind
    onSelectBot(index:number)
    {
        console.log(index);
    }

    @bind
    quit()
    {
        process.exit(0);
    }
}
