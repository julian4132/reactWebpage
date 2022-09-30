import React from 'react'
import "../styles/aboutUs.css"
import petImage from "../images/pet.png"
import FadeIn from "./FadeIn.jsx"

export default function AboutUs() {
  return (
    <section className="info-section">
        <FadeIn direction="left">
            <div>
                <h1><b>Quiénes Somos</b></h1>
                <hr/>
                <p>
                Somos una organización sin fines de lucro que apunta a ser una fuente de información de excelencia acerca de la Copa Mundia de Fútbol Qatar 2022. 
                Este proyecto, inicialmente promovido por cuatro estudiantes del Instituto Politécnico Superior, aspira a fomentar las actividades deportivas, lúdicas y sociales, 
                consiguiendo generar un espacio propicio para cultivar y transmitir la pasión por este deporte emblemático, que nos hace tan argentinos.
                Nosotros creemos que, si hay algo que nos define, es el compromiso. El compromiso por garantizar el acceso a información actualizada y verídica, 
                obtenida a partir de fuentes certificadas y presentada de manera simple, clara y concisa.
                </p> 
            </div>
        </FadeIn>
        <div>
            <img src={petImage} alt="la'eeb"/>
        </div>
    </section>
  )
}
