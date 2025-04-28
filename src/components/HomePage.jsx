import React from 'react'
import Header from "./Header"
import SearchBar from "./SearchBar"
import EmployeeList from './EmployeeList'

export default function HomePage() {
  return (
    <div id='home-page'>
      <Header content={"Employee Directory"}/>
      <SearchBar/>
      <EmployeeList/>
    </div>
  )
}
