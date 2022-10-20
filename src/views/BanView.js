import React from 'react'
import { useParams } from 'react-router-dom'
import Ban from '../components/Ban'

export default function BanView() {
    const userEmail = useParams().userEmail;
  return (
    <Ban userEmail={userEmail}></Ban>
  )
}
