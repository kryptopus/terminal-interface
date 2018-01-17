import React, {Component} from "react"
import blessed from "blessed"
import colors from "colors"

/**
 *
 */
export default class Header extends Component {
    render() {
        let exchangeLabel = colors.bgBlue.yellow("E") + "xchanges";
        let botLabel = colors.bgBlue.yellow("B") + "ots";

        return (
            <box>
                <layout width="100%" height={1}>
                    <button label={exchangeLabel}/>
                    <button label={botLabel}/>
                </layout>
                <line orientation="horizontal" type="line" top={1} width="100%"/>
            </box>
        );
    }
}
