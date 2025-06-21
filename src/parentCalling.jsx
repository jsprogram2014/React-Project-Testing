import React from 'react';
import ChildReturningBack from './childReturningBack';

class ParentCalling extends React.Component {
    state = { message: "" }
    func1 = (time) => {
        this.setState({ message: time })
    }
    render() {
        return (
            <div>
                <ChildReturningBack callbackFunc={this.func1} />
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default ParentCalling;
