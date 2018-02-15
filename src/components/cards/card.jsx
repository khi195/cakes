import React, {Component} from 'react';
import { Card,  CardTitle, CardText, Col, CardImg, Input } from 'reactstrap';
import map from 'lodash/map';
import './cards.css';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class SingleCard extends Component{
state = {cakes: []}

componentWillReceiveProps(nextProps){
   nextProps.cakes.then((response)=>{
        this.setState({cakes: response})
   })
}
render(){
    return(
        map(this.state.cakes, cake =>
                    <Col sm="2" className="cardCol">
                      <Card>
                      <CardImg top width="100%" src={cake.imageUrl} alt="Card image cap" />
                        <CardTitle>{cake.name}</CardTitle>
                        <CardText>{cake.comment}</CardText>
                        <CardText>Yum factor: {cake.yumFactor}</CardText>
                      </Card>
                    </Col>
              )
    )
}
  
}

const mapStateToProps = state => {
    return { cakes: state.data}
}

export default connect(mapStateToProps, actions)(SingleCard);