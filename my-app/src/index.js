import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './store'

const render = () => {

const state = store.getState();
ReactDOM.render(<App sections={state.sections} currentSection={state.currentSection} />, document.getElementById('root'));

}

render()

store.subscribe(render)


// setTimeout(() => {

// store.dispatch({type: 'SECTION_ADD', payload: {id: 4, name: 'new view', isSelected: false}})
// }, 1000)

registerServiceWorker();
