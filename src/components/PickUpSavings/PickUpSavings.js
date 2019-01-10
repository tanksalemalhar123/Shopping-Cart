import React ,{Component} from  'react';
import {Row,Col,OverlayTrigger } from 'react-bootstrap';

var styles={
    pickUpSavings:{
        textDecoration: 'underline'
    },
    totalSavings:{
            color: 'red',
            fontWeight: 800
    }
};

export default class PickUpSavings extends Component{
   
    constructor(props) {
        super(props);
        this.state = {
          totalSavings: 3.85
        };
      }
    render(){
      

       

        return(
                <Row className="show-grid">
                    <Col md={6}>
                        <OverlayTrigger placement="bottom">
                            <div style={styles.pickUpSavings}>PickUpSavings</div>
                        </OverlayTrigger>
                    </Col>

                    <Col style={styles.totalSavings} md={6}> {`$${this.props.price}`} </Col>
                </Row>
        );
    }
}