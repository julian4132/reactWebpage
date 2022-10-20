import React from 'react'

export default function Ban(props) {
    console.log(props);
    const userEmail = props.userEmail;
  return (
    <div>Ban: {userEmail}</div>
  )
}
