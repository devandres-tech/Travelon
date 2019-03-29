import React from 'react'

export default function AirPortDetail(props) {
  return (
    <div className="airport-detail">
      <h4>Name: {props.name}</h4>
      <p>City: {props.city}</p>
    </div>
  )
}
