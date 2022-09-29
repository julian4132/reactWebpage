import React from 'react'
import FadeIn from './FadeIn.jsx'
import "../styles/accessButton.css"

export default function AccessButton(props) {
  return (
    <div className="flex-container">
        <div className="flex-item left-item" align='left'>
            <FadeIn direction="left">
            <div className="feature-title">
                <h1><b>{props.title}</b></h1>
            </div>
            </FadeIn>
            <FadeIn direction="left">
            <div className="feature-text">
                <p style={{textAlign: 'left'}}>{props.text}</p>
            </div>
            </FadeIn>
            <div className="feature-text">
                <a href="#"><button style={{fontWeight: 600}}>{props.buttonText}</button></a>
            </div>
        </div>
        <div style={{marginLeft: "auto"}} className="flex-item right-item">
            <img src={props.imgsrc} style={{float: "right"}}/>
        </div>
    </div>
  )
}
