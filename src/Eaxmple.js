import React from "react";

export default class Eaxmple extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          text: "당신은 어떤 과일을 좋아하시나요?",
        };

        
      }
      changeText1 = () => {
        this.setState({
          text: "당신은 어떤 과일을 좋아하시나요? 사과",
        });
      };

      changeText2 = () => {
        this.setState({
          text: "당신은 어떤 과일을 좋아하시나요? 오렌지",
        });
      };

      changeText3 = () => {
        this.setState({
          text: "당신은 어떤 과일을 좋아하시나요? 바나나",
        });
      };
      render() {
        return (
          <div>
            <h1>{this.state.text}</h1>
            <button onClick={this.changeText1}>사과</button> <nbsp></nbsp>
            <button onClick={this.changeText2}>오렌지</button>  <nbsp></nbsp>
            <button onClick={this.changeText3}>바나나</button> 
          </div>
          
        );
      }

      
      
}