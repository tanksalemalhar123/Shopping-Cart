import React,{Component} from 'react';
import {Button , Collapse,Well,Media,Row,Col} from 'react-bootstrap';


export default class ItemDetails extends Component{
    constructor(props){
        super(props);

        this.state={
            open: false
        }
    }

    render(){
        return(
            <div>
                <Button className="item-details-button"
                    bsStyle="link" onClick={()=> this.setState({open: !this.state.open})} >

                    {this.state.open === false ? `See ` : `Hide `} item details 
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Media>
                                <Media.Left>
                                    <img width={100}
                                    height={100}
                                    alt="thumbnail"
                                    src="https://i5.walmartimages.com/asr/1a74672b-ad74-4ca3-8ce8-09a9be847152_1.88860d7e9971975d6558bf341a42c58d.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"/>
                                </Media.Left>
                                <Media.Body>
                                    <p>
                                        Essentials by Xbox 
                                    </p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong>
                                                {`$${this.props.price}`}
                                                <br/>
                                                <strong className="price-strike">
                                                {`$${this.props.price}`}
                                                </strong>
                                            </strong>
                                        </Col>
                                        <Col md={6}>
                                            Quantity: 1
                                        </Col>
                                    </Row>
                                </Media.Body>
                            </Media>
                        </Well>
                    </div>
                </Collapse>
            </div>
          
        );
    }
}