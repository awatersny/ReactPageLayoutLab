import React from 'react'

export default function EmployeeListItem(props) {
  return (
    <div class="employee-list-item">
      <h4>{props.name}</h4>
      <h5>{props.title}</h5>
    </div>
  )
}
