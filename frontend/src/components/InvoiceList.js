import React from 'react'
import Invoice from './Invoice'
// import decodeJWT from 'jwt-decode'
// const token = window.localStorage.getItem('token')

export default function InvoiceList ({
  users,
  invoice,
  profile,
  match
}) {
  console.log(users)
  console.dir(users.invoices)
  console.log(users.invoices)
  const id = users.invoices
  console.log(invoice)
  console.log(profile)
  console.dir(profile)
  const barry = []
  // if i can get the array of matching invoices saved to the variable id. then .map will work in return
  // id.forEach((i) => {
  //   return invoice.find(i)
  // }).then((i) => { console.log(i) })

  // invoice.find((i) => { i._id === id.map((i) => { i._id = i }) })
  // console.log(inv)
  // const invoice = inv.find({'_id': `${id[0]}`})
  // console.log(invoice)

  return (
    <div>
      <h2>Invoice List!</h2>
      {
        id.map(invoice => {
          return <Invoice {...invoice} />
        })
      }
    </div>
  )
}

// import React, { Component } from 'react'
// import Checkout from './Checkout'
// import axios from 'axios'
// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'
// import { Jumbotron, Tab, Tabs, Table } from 'react-bootstrap'
// import Invoice from './Invoice'
// import {Link} from 'react-router-dom'

// export default class InvoiceHistory extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     gallery: []
  //   }
  // }
  // componentDidMount () {
  //   // Request for images tagged invoices
  //   axios.get('https://res.cloudinary.com/cherri/image/list/invoice.json')
  //           .then(res => {
  //             console.log(res.data.resources)
  //             this.setState({gallery: res.data.resources})
  //           })
  // }
  // uploadWidget () {
  // }

  // render () {
    // Set variable below to be all invoices associated with the profile
//     const variable = '_inv'
//     return (
//       <div>
//         <Table responsive>
//           <thead>
//             <tr>
//               <th>Item No.</th>
//               <th>Due Date</th>
//               <th>Invoice No.</th>
//               <th>Customer</th>
//               <th>Amount</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//             </tr>
//             <tr>
//               <td>3</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//             </tr>
//           </tbody>
//         </Table>
//         <Image cloudName='cherri' publicId={`invoices/${variable}.png`} height='300' crop='scale' />
//       </div>s
//     )
//   }
// }

// export default function MyInvoices ({ invoices }) {
//   const variable = '_inv'
//   return (
//     <div>
//       {
//       invoices.map(invoice => {
//         return <Invoice {...invoice} />
//       })
//     }
//       {/* invoices ? (
//         invoices.map(invoice => (
//           <Invoice key={invoice._id}>
//             <Table responsive>
//               <thead>
//                 <tr>
//                   <th>Due Date</th>
//                   <th>Invoice No.</th>
//                   <th>Customer</th>
//                   <th>Amount</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <Link to={`/invoices/${_id}`}>
//                     <td>{invoice.dueDate}</td>
//                     <td>{invoice.invoiceNumber}</td>
//                     <td>{invoice.customerCompanyName}}</td>
//                     <td>{invoice.amount}</td>
//                     <td>{invoice.status}</td>
//                   </Link>
//                 </tr>
//               </tbody>
//               <Checkout
//                 name={invoice.customerCompanyName}
//                 description={invoice.invoiceNumber}
//                 amount={invoice.offerAmount}
//               />
//               &nbsp;
//             </Table>
//           </Invoice>
//         ))
//         // If no invoices exist, then show this.
//       ) : ('No invoices have been uploaded.')
//     } */}

//       <Image cloudName='cherri' publicId={`invoices/${variable}.png`} height='300' crop='scale' />
//     </div>
//   )
// }
