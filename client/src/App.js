import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EditForm from './components/Contacts/EditForm'
import CreateContactPage from './components/Contacts/CreateContactPage'
import Header from './components/Header'

import Signup from './components/User/Signup'
import { AuthProvider } from './contexts/AuthContext.js'
import Login from './components/User/Login'
import Logout from './components/User/Logout'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Header></Header>
          <Switch>
            <PrivateRoute
              path='/'
              exact
              component={CreateContactPage}
            ></PrivateRoute>
            <PrivateRoute path='/edit/:_id' component={EditForm}></PrivateRoute>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup}></Route>
            <Route path='/logout' component={Logout}></Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
