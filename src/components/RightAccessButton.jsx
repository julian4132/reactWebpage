import React from 'react'
import FadeIn from './FadeIn.jsx'
import "../styles/rightAccessButton.css"

export default function RightAccessButton(props) {
  return (
    <div style={{backgroundColor: "var(--backcolor2)"}} className="flex-container">
        <div className="flex-item left-item" align='left'>
            <img src={props.imgsrc} style={{float: "left"}}/>
        </div>
        <div style={{marginLeft: "auto"}} className="flex-item">
            <FadeIn direction="right">
            <div className="feature-title" style={{textAlign: 'left'}}>
                <h1><b>{props.title}</b></h1>
            </div>
            </FadeIn>
            <FadeIn direction="right">
            <div className="feature-text">
                <p style={{textAlign: 'left'}}>{props.text}</p>
            </div>
            </FadeIn>
            <div className="feature-text" align='left'>
                <a href="#"><button style={{fontWeight: 600}}>{props.buttonText}</button></a>
            </div>
        </div>
    </div>
  )
}
