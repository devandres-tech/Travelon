import React from 'react'

export default function ImageDetail(props) {
  console.log(props.url)
  return (
    <div className="img-div">
      <h4>{props.tags}</h4>
      <img className="img-container" src={props.img} alt="images-tag" />
    </div>
  )
}
