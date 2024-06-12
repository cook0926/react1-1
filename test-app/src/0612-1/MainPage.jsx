import React from "react";
import styled from "styled-componects";

const Button = styled.button`
color: ${props => props.dark ? "white" : "dark"};
background: ${props => props.dark ? "balck": "white"};
`;

function Sample(props){
    return(
        <div>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
        </div>
    )
}
