import React, {Component} from "react"
import blessed from "blessed"
import colors from "colors"

/**
 * Main header
 */
export default class Header extends Component {
    /**
     * Render the component
     */
    render() {
        const quitLabel = colors.bgBlue.yellow("Q") + "uit";
        const exchangeLabel = colors.bgBlue.yellow("E") + "xchanges";
        const botLabel = colors.bgBlue.yellow("B") + "ots";

        return (
            <box>
                <layout width="100%" height={1}>
                    <button label={quitLabel}/>
                    <button label={exchangeLabel}/>
                    <button label={botLabel}/>
                </layout>
                <line orientation="horizontal" type="line" top={1} width="100%"/>
            </box>
        );
    }
}
