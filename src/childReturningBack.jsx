import React from 'react';

class ChildReturningBack extends React.Component{
    sendData=()=>{
        setInterval(()=>{
            const time=Date();
            this.props.callbackFunc(time)
        },
        1000)
    }
    componentDidMount(){
        this.sendData();
    }
    render(){
        return(
            <div></div>
        )
    }
}

export default ChildReturningBack;
