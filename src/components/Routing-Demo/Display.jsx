import React from 'react'
import { useParams } from 'react-router-dom'

export default function Display() {
    let params  = useParams();
  return (
    <div>Display : <h1>{params.topic}</h1></div>
  )
}
