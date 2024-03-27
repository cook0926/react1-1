import React from "react";

class Hello extends React.Component{
    render(){
        return <div>Hello {this.props.toWhat}</div>
    }
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Hello toWhat="world"/>);
export default Hello;
