export const ACTIONS = {
    SEND_WEBSOCKET_DATA: 'SEND_WEBSOCKET_DATA',
    RECEIVE_WEBSOCKET_DATA: 'RECEIVE_WEBSOCKET_DATA'
};

export function sendMessageAction(data) {
    return {
        type: ACTIONS.SEND_WEBSOCKET_DATA,
        payload: data,
    }
}

export function receiveMessageAction(data) {
    return {
        type: ACTIONS.RECEIVE_WEBSOCKET_DATA,
        payload: data,
    }
}
