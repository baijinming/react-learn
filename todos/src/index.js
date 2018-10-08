import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./todos--redux/store/index"

import TodoMVC from "./todos--redux/containers/TodoMVC"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <TodoMVC />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
