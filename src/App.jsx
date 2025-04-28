import './App.css'
import HomePage from './components/HomePage'
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import EmployeeList from './components/EmployeeList'
import EmployeePage from './components/EmployeePage'


function App() {

  return (
    <>
      <HomePage/>
      <Header/>
      <SearchBar/>
      <EmployeeList/>
      <EmployeePage/>
    </>
  )
}

export default App
