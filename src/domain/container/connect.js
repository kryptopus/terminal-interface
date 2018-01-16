import { connect } from "react-redux"

/**
 * Map state to properties
 *
 * @param   {object}    state       The state of redux store
 * @param   {object}    ownProps    The component properties
 * @return  {object}                New properties to merge into the component
 */
const mapStateToProps = (store, ownProps) => {
    return store;
}

/**
 * Map callbacks to properties
 *
 * @param   {function}  dispatch    Redux dispatch function
 * @param   {object}    ownProps    The component properties
 * @return  {object}                New callbacks to merge into the component
 */
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch
    };
}

/**
 * Merge properties
 *
 * @param   {object}    stateProps      State properties
 * @param   {object}    dispatchProps   Dispatch properties
 * @param   {object}    ownProps        The component properties
 * @return  {object}                    New properties
 */
const mergeProps = (stateProps, dispatchProps, ownProps) => {
}

/**
 * Connect a component to Redux store
 *
 * @param   {Function}  callback    Callback function to customize component properties
 * @return  {Function}              Factory function to enhance the component
 */
export default (callback) => {
    return connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => {
        let newProps = callback(stateProps, dispatchProps.dispatch, ownProps);
        return Object.assign({}, ownProps, newProps);
    });
}
