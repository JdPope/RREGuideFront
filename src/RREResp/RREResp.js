import React from 'react'
import RREExp from '../RREExp/RREExp'
import './RREResp.css'

export default function RREResp (props){
  console.log("props of resp", props)
  const displayExpItems = props.resp.expectations.map((exp) => {
      return <RREExp key={exp.expectation_id} exp={exp}/>
    })

  return (
    <React.Fragment>
      <h2 className="resp">Responsibility: {props.resp.resp_name}</h2>
      <h3 className="exp">Expectations:</h3>
        {displayExpItems}
    </React.Fragment>
  )
}
