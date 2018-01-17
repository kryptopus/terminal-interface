/* @flow */
import connect from "./connect"
import ModalExchanges, {Props} from "../component/ModalExchanges"
import closeModalExchanges from "../action/modal/closeModalExchanges"
import loadExchanges from "../action/exchange/loadExchanges"

/**
 * Enhance Style component
 * Connect the component to Redux store
 */
export default connect((store, dispatch, ownProps):Props => {
    let opened = false;

    const openedModals = store.openedModals;
    for (const modal of openedModals) {
        if (modal.id === "exchanges") {
            opened = true;
            break;
        }
    }

    // Load exchanges if necessary
    const exchanges = store.exchanges;
    if (exchanges.length <= 0) {
        setTimeout(() => {
            dispatch(loadExchanges(store.container, dispatch));
        }, 200);
    }

    return {
        screen: store.screen,
        opened: opened,
        exchanges: exchanges,

        onEscape: () => {
            dispatch(closeModalExchanges());
        }
    };
})(ModalExchanges);
