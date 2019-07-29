import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './RREContainer.css'
import RREItem from './RREItem/RREItem'

class RREForm extends Component {

  const displayJobItems = props.jobs.map(job => {
      return <RREItem key={job.id} job={job}/>
    })


  render(props){

    return(
      <React.Fragment>
        {displayJobItems}
      </React.Fragment>

  )
    }
}

export default RREForm
