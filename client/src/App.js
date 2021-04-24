import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import EditForm from './components/EditForm'
import CreateContactPage from './page/CreateContactPage'

function App() {
  return (
    <Router>
      <Route path='/' exact component={CreateContactPage}></Route>
      <Route path='/edit/:_id' component={EditForm}></Route>
    </Router>
  )
}

export default App
