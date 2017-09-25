import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import reducer from './reducers/joke-list-reducer';
import App from './components/App';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('react-app-root')
);
//
// render(App);
//
// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     render(App)
//   });
// }
