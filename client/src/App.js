import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EditForm from './components/EditForm'
import CreateContactPage from './page/CreateContactPage'
import Header from './components/Header'

import Signup from './components/Signup'
import { AuthProvider } from './contexts/AuthContext.js'
import Login from './components/Login'
import Logout from './components/Logout'

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Header></Header>
          <Switch>
            <Route path='/' exact component={CreateContactPage}></Route>
            <Route path='/edit/:_id' component={EditForm}></Route>
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
