import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaPhone} from 'react-icons/fa'

export default function Contact() {
  return (
    <footer className="contact" id="contacto">
        <ul>
            <li><a href="https://youtu.be/dQw4w9WgXcQ" style={{color: "inherit"}}><FaInstagram /> Instagram</a></li>
            <li><a href="https://youtu.be/dQw4w9WgXcQ" style={{color: "inherit"}}><FaTwitter /> Twitter</a></li>
            <li><a href="https://youtu.be/dQw4w9WgXcQ" style={{color: "inherit"}}><FaPhone /> +54 9 341 696-9578</a></li>
        </ul>
    </footer>
  )
}
