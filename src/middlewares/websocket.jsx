import { ACTIONS, receiveMessageAction } from '../actions/websocket';


export const isWebSocketAction = (action) => {
    return Boolean(action) && [
            ACTIONS.SEND_WEBSOCKET_DATA,
            ACTIONS.RECEIVE_WEBSOCKET_DATA
        ].indexOf(action.type) >= 0
};

function Deferred () {
    var self = this;
    this.promise = new Promise((resolve, reject) => {
        self.resolve = resolve;
        self.reject = reject;
    })
}

export const createWebsocketMiddleware = (options = {}) => {
    const messages = {};
    let connection,
        messageId = 1;

    return (store) => {
        return (next) => {
            return (action) => {
                if (!isWebSocketAction(action)) {
                    return next(action)
                }

                connection = connection || connect(options.endpoint);

                let result;
                if (action.type == ACTIONS.SEND_WEBSOCKET_DATA) {
                    let message = action.payload,
                        deferred = new Deferred();
                    message.id = messageId++;
                    messages[message.id] = deferred;

                    // Simulate send (connection.socket.send) and delayed receive (see connection.socket.onmessage)
                    // TODO: can be deleted when server will be ready to provide responses
                    console.log('send', connection, message); // connection.socket.send(message);
                    setTimeout(() => {
                        store.dispatch(receiveMessageAction({id: message.id, data: {value: Math.floor(Math.random() * 100)}}))
                    }, 200);
                    // End of simulation block

                    result = deferred.promise;
                } else if (action.type == ACTIONS.RECEIVE_WEBSOCKET_DATA) {
                    let message = action.payload,
                        deferred = messages[message.id];
                    delete messages[message.id];
                    if (deferred) {
                        deferred.resolve(message);
                    }
                }

                let actionResult = next(action);
                return result || actionResult;
            }
        };

        function connect(endpoint) {
            const connection = {
                endpoint: endpoint,
                socket: new WebSocket(endpoint)
            };
            connection.socket.onmessage = (data) => {
                store.dispatch(receiveMessageAction(data))
            };
            return connection
        }
    }
};
