import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import EditForm from './components/EditForm'
import CreateContactPage from './page/CreateContactPage'
import Header from './components/Header'

import Signup from './components/Signup'

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Route path='/' exact component={CreateContactPage}></Route>
        <Route path='/edit/:_id' component={EditForm}></Route>
        <Route path='/signup' component={Signup}></Route>
      </Router>
    </div>
  )
}

export default App
