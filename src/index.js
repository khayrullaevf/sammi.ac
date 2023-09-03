import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/App/App';
// import Learn from './Learn';
import ClassComp from './States';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ClassComp
      firstName="Samar"
      secondName="Badriddinov"
      link="https://www.instagram.com/fazliddinkhayrullaev/"
    />
  </React.StrictMode>
);
