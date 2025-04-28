import React from 'react'
import EmployeeListItem from './EmployeeListItem'

const arr = [0,0,0,0,0,0]

export default function EmployeeList() {
  return (
    <div>
      {arr.map(item => <EmployeeListItem/>)}
    </div>
  )
}