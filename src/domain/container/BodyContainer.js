/* @flow */
import connect from "./connect"
import BodyContainer, {Props} from "../component/BodyContainer"

/**
 * Enhance Style component
 * Connect the component to Redux store
 */
export default connect((store, dispatch, ownProps):Props => {

    let props = {};

    if (store.body) {
        if (store.body.service) {
            props.id = store.body.id;
            props.service = store.body.service;
            props.ComponentClass = store.body.service.getComponentClass();
        }
        if (store.body.parameters) {
            props.parameters = store.body.parameters;
        }
    }

    return props;
})(BodyContainer);
