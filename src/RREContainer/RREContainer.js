import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './RREContainer.css'
import RREItem from '../RREItem/RREItem'

export default function RREContainer(props) {
console.log("keys.length", Object.keys(props.jobs).length)




  const displayJobItems = props.jobs.map((job) => {
    return <RREItem key={job.id} job={job}/>
  })


    return(
      <React.Fragment>
        {displayJobItems}
      </React.Fragment>

  )
    }
