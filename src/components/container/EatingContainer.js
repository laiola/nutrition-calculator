import React, { Component } from 'react';

import './EatingContainer.css';

class EatingContainer extends Component {
    onClear = () => {
        // todo
    };

    onRemove = title => () => {
        this.props.onRemove(title);
    };

    render() {
        return (
            <div className="eating">
                <div className="eating-title">{this.props.title}</div>
                <div className="eating-buttons">
                    <button className="btn btn-warning clear-eating" 
                        onClick={this.onClear}>clear</button>
                    <button className="btn btn-danger delete-eating"
                        onClick={this.onRemove(this.props.title)}>delete</button> 
                </div>
            </div>
        ) 
    }
}

export default EatingContainer;
