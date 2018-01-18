/* @flow */
import {bind} from "decko"
import React, {Component} from "react"
import type {screen as Screen} from "blessed"
import {Table} from "react-blessed-contrib"
import colors from "colors"

export interface Props {
    screen:Screen;
    opened:boolean;
    exchanges:Array<any>;
    onEscape?:Function;
    onSelect?:Function;
}

/**
 * Modal to select exchange
 */
export default class ModalExchanges extends Component<Props, void> {

    @bind
    onRef(table:Table)
    {
        if (!table) {
            return;
        }
        table.widget.rows.key("escape", this.escape);
        table.widget.rows.on("select", this.select);
        table.widget.rows.focus();
    }

    render() {
        if (this.props.opened) {
            return this.renderTable();
        } else {
            return null;
        }
    }

    componentDidMount()
    {
        this.props.screen.key("escape", this.escape);
    }

    @bind
    renderTable()
    {
        let headers = ["ID", "Type"];
        let rows = [];
        let maxIdLength = 0;
        let maxTypeLength = 0;
        for (let exchange of this.props.exchanges) {
            let id = exchange.getId();
            let type = exchange.getType();

            if (id.length > maxIdLength) {
                maxIdLength = id.length;
            }
            if (type.length > maxTypeLength) {
                maxTypeLength = type.length;
            }

            rows.push([id, type]);
        }
        let data = {
            headers: headers,
            data: rows
        };

        return (
            <Table
                ref={this.onRef}
                label="Exchanges"
                width="70%"
                height="60%"
                top="center"
                left="center"
                border={{type: "line"}}
                columnWidth={[maxIdLength, maxTypeLength]}
                keys={true}
                interactive={true}
                data={data}
            >
            </Table>
        );
    }

    @bind
    escape()
    {
        if (typeof this.props.onEscape === "function") {
            this.props.onEscape();
        }
    }

    @bind
    select(item:any, index:number)
    {
        if (typeof this.props.onSelect === "function") {
            if (index < this.props.exchanges.length) {
                this.props.onSelect(this.props.exchanges[index], index);
            }
        }
    }
}
