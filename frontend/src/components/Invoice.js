import React, { Component } from 'react'
import Checkout from './Checkout'
import axios from 'axios'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'
import { Jumbotron, Tab, Tabs, Table } from 'react-bootstrap'

// invoice,
// invoiceNumber,
// amount,
// currency,
// offerAmount,
// dueDate,
// expiryDate,
// status,
// customerCompanyName,
// customerFirstname,
// customerSurname

export default function Invoice ({
  children
}) {
  console.dir(children)
  return (
    <div>
      <span> { children } </span>
    </div>
  )
}

class InvoiceHistory extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gallery: []
    }
  }
  componentDidMount () {
    // Request for images tagged invoices
    axios.get('https://res.cloudinary.com/cherri/image/list/invoice.json')
            .then(res => {
              console.log(res.data.resources)
              this.setState({gallery: res.data.resources})
            })
  }
  uploadWidget () {
  }

  render () {
    // Set variable below to be all invoices associated with the profile
    const variable = '_inv'
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Item No.</th>
              <th>Due Date</th>
              <th>Invoice No.</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>

        <Image cloudName='cherri' publicId={`invoices/${variable}.png`} height='300' crop='scale' />
      </div>

    )
  }
}
