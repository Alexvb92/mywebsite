import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const state = {
    sections: [
        {id: 1, name: 'about', isSelected: true},
        {id: 2, name: 'portfolio', isSelected: false},
        {id: 3, name: 'contact', isSelected: false}
    ]
}


ReactDOM.render(<App data-sections={state.sections} />, document.getElementById('root'));
registerServiceWorker();
