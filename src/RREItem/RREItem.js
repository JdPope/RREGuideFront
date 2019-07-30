import React from 'react'
import RRERole from '../RRERole/RRERole'
export default function RREItem (props){


  const displayRoleItems = props.job.rre.role.map((role) => {
    return <RRERole key={role.id} role={role}/>
  })

  return (
    <React.Fragment>
      <h1>{props.job.name}</h1>
          {displayRoleItems}
    </React.Fragment>
  )
}
