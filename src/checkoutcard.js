import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./checkoutcard.css";
import {remove} from "./Actions"
class Checkoutcard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {let{item,removeProductfromoCart}=this.props;

    
        return (<div className="bodyy">
        <h2>Title:{item.title}</h2>
        <p>ID : {item.bookID}</p>
        <p>PRICE : RS.{item.price}</p>
        <p>AUTHOR : {item.authors}</p>
        <p>Reviwers : {item.ratings_count}</p> 
        <p>Rating : {item.average_rating}</p>     
        <div> <button className="btn btn-danger" onClick={()=>removeProductfromoCart(item)
        }>Remove from CART</button>
        </div></div>  );
    }
}
const mapDispatchToProps=(dispatch)=>({
    removeProductfromoCart:(item)=>dispatch(remove(item))
})
export default connect(null,mapDispatchToProps)(Checkoutcard);

