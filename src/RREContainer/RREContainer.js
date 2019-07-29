import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './RREContainer.css'
import RREItem from '../RREItem/RREItem'

export default function RREContainer(props) {
console.log("rre container props", props.jobs)

  const displayJobItems = props.jobs.map(job => {
    return <RREItem key={job.id} job={job}/>
  })



    return(
      <React.Fragment>
      <h4>hello</h4>
      </React.Fragment>

  )
    }
