import React, { Component } from 'react';
import "./moviedetails.css";
import { add } from './Actions';
import { connect } from 'react-redux';
import Header from './Header'
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { let{location,addProductToCart}=this.props;
    console.log(location.id);
       
    return (
        
        <>
        <Header/>
        <div className="details">
    <div className="image1">
    <img src={""}/>
    </div>
    <div className="body">
    <h2>Title:{location.id.title}</h2>
    <p>ID : {location.id.bookID}</p>
    <p>PRICE :Rs.{location.id.price}  </p>
    <p>AUTHOR : {location.id.authors}</p>
    <p>Reviwers : {location.id.ratings_count}</p> 
    <p>Rating : {location.id.average_rating}</p>     
    <div> <button className="btn btn-primary" onClick={()=>
        addProductToCart(location)}>ADD TO CART</button>
    </div>
    
    </div>


    

</div></>
);
    }
}
const mapDispatchToProps=(dispatch)=>({
    addProductToCart:(location)=>dispatch(add(location.id))
})
export default connect(null,mapDispatchToProps) (Details);
