import React from 'react';

import Widget from './../containers/Widget';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.widgets = [
            {id: 1, title: 'Count'},
            {id: 2, title: 'Duration'}
        ]
    }

    render() {
        return (
            <div>
                {this.widgets.map((widget) => <Widget title={widget.title} id={widget.id}/>)}
            </div>
        );
    }
}

export default Dashboard;
