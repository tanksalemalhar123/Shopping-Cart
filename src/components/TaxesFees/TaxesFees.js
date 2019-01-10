import React from 'react';
import {Col,Row} from 'react-bootstrap';

class TaxesFees extends  React.Component{
    render(){
        return(
            <Row className="show-grid">
                <Col md={6}>
                    Est. Taxes and fees 
                </Col>
                <Col md={6}>
                    {`$${this.props.taxes}`}
                </Col>
            </Row>
        );
    }
}

export default TaxesFees;