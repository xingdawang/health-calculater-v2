import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/app';
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer)

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
