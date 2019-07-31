import React from 'react'
import './RREExp.css'

export default function RREExp (props){


  return (
    <React.Fragment>
      <li className="exp">{props.exp.expectation_name}</li>

    </React.Fragment>
  )
}
