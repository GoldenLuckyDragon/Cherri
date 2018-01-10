import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// mount our app on root
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
