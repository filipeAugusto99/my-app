//bibliotecas
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


//componentes
import TemplateDefault from './templates/Default'
import Customers from './pages/Customers'
import Home from './pages/Home'

const App = () => {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  )
}

export default App
