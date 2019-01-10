import React ,{Component} from 'react';
import {Row,Col} from 'react-bootstrap';

export default class EstimatedTotal extends Component{
    render(){
        return(
            <Row>
                <Col md={6}>
                    <h3>Estimated Total </h3>
                </Col>
                <Col md={6}>
                   <h2> {`$${this.props.price}`} </h2>
                </Col>
            </Row>
        );
    }
}