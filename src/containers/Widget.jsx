import {connect} from 'react-redux';

import Widget from '../components/Widget';
import { sendMessageAction } from '../actions/websocket';
import { clearWidgetData, saveWidgetData } from '../actions/widgets';


const mapStateToProps = (state, props) => {
    let data = state.widgets[props.id];
    return {
        value: data ? data.value : null
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        refresh: () => {
            dispatch(clearWidgetData(props.id));
            let requestMessage = {data: 'query () {}'};
            console.log('request', requestMessage);
            let promise = dispatch(sendMessageAction(requestMessage));
            promise.then((replyMessage) => {
                console.log('result', replyMessage);
                dispatch(saveWidgetData(replyMessage.data, props.id));
            });
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Widget);
