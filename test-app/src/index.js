import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from './Welcome';
import CommentList from './Comment/CommentList';
import Counter from './(04.17)/Counter';
import FocusButton from './(04.17)/FocusButton';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
    <App/>
    <Welcome name="인제" />

        <div>
            <Welcome name="Mike"/>
            <Welcome name="Steve"/>
            <Welcome name="Jane"/>
            <Counter/>
            <FocusButton/>
            
        </div>
        
        
        <CommentList></CommentList>
</React.StrictMode>
);
 



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
