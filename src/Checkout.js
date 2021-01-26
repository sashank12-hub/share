import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkoutcard from './checkoutcard';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Header from './Header';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { let{count,checkproducts,total}=this.props;
        return ( 
            
            <>
            <Header/>
            
            {count==0 && <div className="checkout1">
               
               
            <h1>ADD MORE PRODUCTS</h1>
            </div>
           
        } 
        
        {
        count!==0 &&  (
            <div className="checkout">
            {
                checkproducts?.map(item=>{console.log(item)
                return <Checkoutcard  item={item}/> })} </div>
        )
        
                }
            
            </>
            
             );
    }
}
 
const mapStatetoProps = (store) => ({
    count:store?.cart.length,
    checkproducts:store?.cart,
  total:  store?.cart?.reduce((amount,item)=>item.price+amount,0)
    
    
})


export default connect(mapStatetoProps,null)(Checkout)

