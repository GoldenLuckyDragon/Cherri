import React from 'react'

// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
//
// export default class Navigation extends React.Component {
//   constructor (props) {
//     super(props)
//
//     this.toggleNavbar = this.toggleNavbar.bind(this)
//     this.state = {
//       collapsed: true
//     }
//   }
//
//   toggleNavbar () {
//     this.setState({
//       collapsed: !this.state.collapsed
//     })
//   }
//   render () {
//     return (
//       <div>
//         <Navbar color='faded' light>
//           <NavbarBrand href='/' className='mr-auto'>Logo</NavbarBrand>
//           <NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
//           <Collapse isOpen={!this.state.collapsed} navbar>
//             <Nav navbar>
//               <NavItem>
//                 <NavLink href='/home'>Home</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href='/dashboard'>Dashboard</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href='/account'>Account</NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     )
//   }
// }

import { slide as Menu } from 'react-burger-menu'

export default class Navigation extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }

  render () {
    return (
      <Menu right>
        <a id='home' className='menu-item' href='/'>Home</a>
        <a id='dashboard' className='menu-item' href='/dashboard'>Dashboard</a>
        <a id='account' className='menu-item' href='/account'>Account</a>
      </Menu>
    )
  }
}
