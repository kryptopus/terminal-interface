import React, {Component} from "react"
import blessed from "blessed"
import colors from "colors"

/**
 *
 */
export default class Header extends Component {
    render() {
        let exchangeLabel = colors.bgBlue.white("E") + "xchanges";
        return (
            <box>
                {exchangeLabel}
                <line orientation="horizontal" type="line" top={1} width="100%"/>
            </box>
        );
    }
}
