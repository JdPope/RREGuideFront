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
      <h3 className="resp">{props.resp.resp_name}</h3>
        {displayExpItems}
    </React.Fragment>
  )
}
