/* @flow */
export const SET_EXCHANGES = "SET_EXCHANGES";

export default (exchanges:Array<any>) => {
    return {
        type: SET_EXCHANGES,
        exchanges: exchanges
    }
};
