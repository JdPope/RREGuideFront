import React from 'react'
import RRERole from '../RRERole/RRERole'
export default function RREItem (props){

console.log("what i want", props.job.rre.roles)
  const displayRoleItems = props.job.rre.roles.map((role) => {
    return <RRERole key={role.role_id} role={role}/>
  })

  return (
    <React.Fragment>
      <h1>RRE: {props.job.name}</h1>
          {displayRoleItems}
    </React.Fragment>
  )
}
