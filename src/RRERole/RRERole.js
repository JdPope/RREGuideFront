import React from 'react'
import RREResp from '../RREResp/RREResp'

export default function RRERole (props){
  console.log(props.role)

  const displayRespItems = props.role.responsibilities.map((resp) => {
      return <RREResp key={resp.resp_id} resp={resp}/>
    })

  return (
    <React.Fragment>
      <h3>Role: {props.role.role_name} {props.role.role_percentage}</h3>
        {displayRespItems}
    </React.Fragment>
  )
}
