import React from 'react'

export const DetailsUtility = (props) => {
    return (
      <div className="m-y-4">
        <p>this is details utility..</p>
        <input type="text" className="input" onChange={props.change} value={props.value}/>
        <p>{props.children}</p>
      </div>
    )
}
