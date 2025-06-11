// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import About from './components/About';
import Header from './components/Header';

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Body />
  },
  {
    path : "/about",
    element : <About />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
<App />
<Header />
<RouterProvider router={appRouter} />
</>
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
