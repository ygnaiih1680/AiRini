import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Main from './component/Main'
import reportWebVitals from './reportWebVitals'
import {createStore} from "redux"
import {Provider} from "react-redux"
import rootReducer from "./store/rootStore"

ReactDOM.render(
  <React.StrictMode>
      <Provider store={createStore(rootReducer)}>
          <Main />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.debug)
