import React from "react";
import Boox from "./Boox";

export default function Library(props){
    return(
        <div>
            <Boox name="처음 만난 파이썬" numofPage={300}/>
            <Boox name="처음 만난 AWS" numofPage={400}/>
            <Boox name="처음 만난 리액트" numofPage={500}/>
        </div>
    );
}