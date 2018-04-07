import React, { Component } from 'react';

class Forum extends Component {
    render() {
        return (
            <div className="forum-context">
                <div className="forum-title">
                    <h2>{ this.props.title }</h2>
                </div>
                <div className="forum-description">
                    <h3>{ this.props.description }</h3>
                </div>
            </div>
        );
    }
}

export default Forum;