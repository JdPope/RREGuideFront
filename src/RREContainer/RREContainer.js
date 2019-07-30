import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './RREContainer.css'
import RREJob from '../RREJob/RREJob'

export default function RREContainer(props) {


  const displayJobItems = props.jobs.map((job) => {
    return <RREJob key={job.id} job={job}/>
  })



    return(
      <div className="RRE">
        {displayJobItems}
      </div>

  )
    }
