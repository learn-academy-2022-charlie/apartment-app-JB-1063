import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'

export default class ApartmentIndex extends Component {
  render() {
    return (
          <>
            <h3>See the Apartments!</h3>
            <br />
            <br />
            <Col sm="6">
              {this.props.apartments.map((apartment) => {
                return(
                  <Card body key={apartment.id}>
                    <CardTitle>
                      <h4>{apartment.name}</h4>
                    </CardTitle>
                  </Card>
                )
              })}
            </Col>
          </>
    )
  }
}
