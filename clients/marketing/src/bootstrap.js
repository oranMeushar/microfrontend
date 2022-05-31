import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const mount = (el) =>{
    ReactDom.render(<App/>, el)
}


//*We are running this file in development in isolation
if (process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#root-marketing');
    el && mount(el);
} 

//*We are running this file in development or production through the main app.
export default mount;
    

    
    