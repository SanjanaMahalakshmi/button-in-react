import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';



function Welcome() {
  const [count, setCount] = useState(50);
  return (
    <div class="values">
      
      <button onClick={() => setCount(count - 1)}>-</button>{count}<button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

ReactDOM.render(<Welcome />, document.getElementById('root'));


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Header />
//     <Content />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Header from './Components/Header';
// import Content from './Components/Content';