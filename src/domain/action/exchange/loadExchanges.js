import setExchanges from "./setExchanges"

export const LOAD_EXCHANGES = "LOAD_EXCHANGES";

export default (container) => {
    return async (dispatch) => {
        const exchangeFinder = await container.get("kryptopus_exchange_finder");
        const exchanges = await exchangeFinder.getAll();
        dispatch(setExchanges(exchanges));
        return true;
    }
};
