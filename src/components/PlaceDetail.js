import React from 'react'

export default function PlaceDetail(props) {
  return (
    <div className="place-container__div">
      <h4>{props.name}</h4>
      <p className="address">Address: {props.address}</p>
      <p>Type: {props.category}</p>
    </div>
  )
}
