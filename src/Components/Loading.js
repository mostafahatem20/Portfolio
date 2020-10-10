import React from 'react'
import { Image } from 'react-bootstrap'
import me from '../images/avatar.jpeg'

export default function Loading(props) {
  return (
    <div className="App">
      <Image
        src={me}
        roundedCircle
        style={{
          width: '200px',
        }}
      />
    </div>
  )
}
