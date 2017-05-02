import React from 'react';

class Widget extends React.Component {
    constructor(props) {
        super(props);

        props.refresh();
    }

    render() {
        return (
            <div style={{border: '1px solid black', width: '150px', margin: '4px'}}>
                <h3 style={{margin: 0}}>{this.props.title}</h3>
                <div>value: {this.props.value || '-'}</div>
                <input type='button' value='Refresh' onClick={() => this.props.refresh()}/>
            </div>
        );
    }
}

export default Widget;
