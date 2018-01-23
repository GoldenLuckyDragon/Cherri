// import React, { Component } from 'react'
// import Checkout from './Checkout'
// import { Table } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
//
// export default function Invoice ({
//   _id,
//   factoryName,
//   address,
//   hkid,
//   incorporationCertificate,
//   paymentMethod,
//   invoices,
//   profile,
//   invoice
// }) {
//   // Display all invoices for admin to see - order by those pending (in chronological order) at the top, followed by those that have been approved (in chronological order), followed by those that have expired, followed by those that have been declined.
//
//   // const henry = profile.find((p) => p._id === _id)
//   // const barry = henry.invoices
//   return (
//     <div>
//       <Table responsive>
//         <thead>
//           <tr>
//             <th>Item No.</th>
//             <th>Factory</th>
//             <th>Due Date</th>
//             <th>Invoice No.</th>
//             <th>End Customer</th>
//             <th>Amount</th>
//             <th>Status</th>
//             <th />
//           </tr>
//         </thead>
//         <tbody>
//           {
//           // barry ? (
//           //   barry.map((invoice, index) => {
//               return (
//                 <tr>
//                   {/* If there are pending invoices */}
//                   <td>{index + 1}</td>
//                   {/* Bring in factory name and link to profile page of factory */}
//                   <td>{invoice.dueDate}</td>
//                   <td>{invoice.invoiceNumber}</td>
//                   <td>{invoice.customerCompanyName}</td>
//                   <td>{invoice.amount}</td>
//                   <td>{invoice.status}</td>
//                   <td>
//                     <Link to={`/invoice/${invoice._id}`}>
//                     View
//                     </Link>
//                   </td>
//                 </tr>
//                 // Repeat the above for approved, expired and declined.
//               )
//             })) : ('You have no submitted invoices available.')
//           }
//         </tbody>
//       </Table>
//     </div>
//   )
// }
