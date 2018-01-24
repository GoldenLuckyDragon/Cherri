import React from 'react'
import '../App.css'
import { Jumbotron } from 'react-bootstrap'
import Navigation from '../components/navbar'
import Logo from '../components/Logo'
// call in the homelanding components
import { Homelanding, HomelandingTwo, HomelandingThree } from '../components/HomeLanding'

export default () => {
  return (
    <div>
      <Navigation />
      <Jumbotron className='jumbotron-blue'>
        <Logo />
        <br />
        <Homelanding />
      </Jumbotron>
      <Jumbotron className='jumbotron-white'>
        <HomelandingTwo />
      </Jumbotron>
      <Jumbotron className='jumbotron-blue'>
        <HomelandingThree />
      </Jumbotron>
    </div>
  )
}
