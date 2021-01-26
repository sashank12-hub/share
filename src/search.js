import axios from 'axios';
import React, { Component,useEffect,useState } from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Header from './Header'


function Search() {
const [data,setdata]=useState([])
const [load,setload]=useState(true);
const [search,setsearch]=useState("");
    useEffect(() => {
        axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json").then(
            res=>{
                setdata(res.data);
                setload(false);
                
            }
        )
        
    }, [])
    return ( <>
        <Header/>
        <input className="input" type="text" placeholder="...search by Title" onKeyPress={(e)=>{
           if( e.key === 'Enter'){
           setsearch(e.target.value.toUpperCase());
            console.log(e.target.value.toUpperCase())}
        }}
        
        />
       { load ? <h1>...Loading</h1>:
           
           <table className="table1">
        <thead>
        <tr>
        
        <th >BookID</th>
        <th >authors</th>
        <th>INFO</th>
        <th  >Price</th>
        <th >Title</th>
      <th >rating</th>
        </tr>
        </thead>
        <tbody>
        {   
            data.filter((item)=>{
                
                  if(search==="") {
                      return item
                    }
                 
                  else if (item.title.toString().toUpperCase().includes(search))
                 
                //   else if((item.title).indexOf(search) > -1)
                  {
                      return item;
                    
                  }
             }



             )
            .map((item,i)=>{ console.log(item.title);
                return(
             
              
                    <tr className="TableRow">
                    <td className={"SecondaryText"}>{item.bookID}</td> <td className={"PrimaryText"}>{(item.authors).slice(0,20)}</td>
                    
                    <td><Link to ={{
                        pathname: `/ecs/details/:${item.bookID}`,
                        id:item}}>CLICK HERE</Link></td>
                      
                       <td className={"SecondaryText"}>{item.price}</td>
                       <td className={"PrimaryText"}>{(item.title)}</td>
                       <td className={"SecondaryText"}>{item.average_rating}</td>
                    
                    
                    </tr>)
        
            })
        }
        
        </tbody>
      </table>}


        </>

     );
}
 
export default Search;