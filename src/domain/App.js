/* @flow */
import type Container from "solfegejs-dependency-injection/src/ServiceContainer/Container"
import {bind} from "decko"
import React, {Component} from "react"
import type {screen as Screen} from "blessed"
import {Provider} from "react-redux"
import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import asyncAwaitMiddleware from "redux-async-await"
import thunkMiddleware from "redux-thunk"
import {createLogger} from "redux-logger"

// Components
import Header from "./container/Header"
import ModalExchanges from "./container/ModalExchanges"

// Reducers
import openedModalsReducer from "./reducer/openedModals"
import exchangesReducer from "./reducer/exchanges"
import bodyReducer from "./reducer/body"

// Actions
import openModalExchanges from "./action/modal/openModalExchanges"

export interface AppProps {
    screen:Screen;
    container:Container;
}

/**
 * Terminal application
 */
export default class App extends Component<AppProps, void>
{
    store:any;

    constructor(props:AppProps)
    {
        super(props);

        let loggerMiddleware = createLogger({
            logger: {
                log: (message) => {
                }
            }
        });
        this.store = createStore(
            combineReducers({
                screen:         () => { return props.screen; },
                container:      () => { return props.container },
                openedModals:   openedModalsReducer,
                exchanges:      exchangesReducer,
                body:           bodyReducer,
            }),
            applyMiddleware(asyncAwaitMiddleware, thunkMiddleware, loggerMiddleware)
        );

        props.screen.key(["q", "C-c"], this.quit);
        props.screen.key(["e"], this.openModalExchanges);
    }

    render()
    {

        return (
            <Provider store={this.store}>
                <element>
                    <Header/>
                    <ModalExchanges/>
                </element>
            </Provider>
        );
    }

    @bind
    quit()
    {
        return process.exit(0);
    }

    @bind
    openModalExchanges()
    {
        this.store.dispatch(openModalExchanges());
    }
}
