//here we render the components that we have created in the components folder
import React from 'react';
import { render }  from 'react-dom';
import App from './components/app';

// single ./ mean get our of this file and go to this file folder
//The App is the object for the components/app
//<App /> is actually rendering that app components

render(<App />, document.getElementById('app'));
