import React from 'react'

const Card = props => {
  console.log(props);
  return (
    <div className="card">
      <img src="img_avatar.png" alt="Avatar" style={{width:'100%'}} />
      <div className="container">
        <h4><b>{props.name}</b></h4> 
        <p>{props.jobTitle}</p>
        <p>{props.children}</p>
      </div>
    </div>
  )
}

export default Card