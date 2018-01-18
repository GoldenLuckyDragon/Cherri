import React from 'react'
import Checkout from './Checkout'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'

export default function Invoice ({ children }) {
  return (
    <div>
      <Navigation />
      <Jumbotron className='jumbotron-blue'>
        <Logo />
        <span> { children } </span>
      </Jumbotron>
    </div>
  )
}
