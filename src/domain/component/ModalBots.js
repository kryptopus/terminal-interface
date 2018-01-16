/* @flow */
import {bind} from "decko"
import EventEmitter from "events"
import blessedContrib from "blessed-contrib"

/**
 * Modal bot list
 */
export default class ModalBots extends EventEmitter
{
    /**
     * Element
     */
    element:any;

    botInfos:any;

    /**
     * Constructor
     */
    constructor(botInfos:any)
    {
        super();
        this.botInfos = botInfos;
    }

    @bind
    initialize(options:any)
    {
        let elementOptions = Object.assign({}, {
            keys: true,
            label: "Bots",
            width: "70%",
            height: "50%",
            top: "center",
            left: "center",
            columnWidth: [10, 10],
            border: {
                type: "line"
            },
            interactive: true
        }, options);
        this.element = blessedContrib.table(elementOptions);
        this.element.rows.key("escape", this.onEscape);
        this.element.rows.on("select", this.onSelect);

        let rows = [];
        for (let id in this.botInfos) {
            rows.push([id, this.botInfos[id].name]);
        }
        this.element.setData({
            headers: ["ID", "Name"],
            data: rows
        });
    }

    @bind
    getElement()
    {
        return this.element;
    }

    @bind
    hide()
    {
        this.element.hide();
    }

    @bind
    show()
    {
        this.element.show();
        this.element.focus();
    }

    @bind
    onEscape(ch:string, key:string)
    {
        this.element.hide();
    }

    @bind
    onSelect(item:any, index:number)
    {
        this.emit("select", index);
    }
}
