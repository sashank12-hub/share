import React, { Component } from 'react'
import  ReactPaginate from 'react-paginate';
import axios from 'axios';
import Header from "./Header";
import _ from 'lodash';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
export class First extends Component {

constructor(props) {
    super(props)

    this.state = {
        check1:true, check2:true,  check3:true, check4:true,check5:true,
        offset:0,
        tabledata:[],
        orgtabledata:[],
        sortdata:[],
        perpage:10,
        currentpage:0,
        sort:"bookID",
        ord:""
         
    }
    this.handleChange=this.handleChange.bind(this);
    this.check1click=this.check1click.bind(this);
     this.check2click=this.check2click.bind(this);
     this.check3click=this.check3click.bind(this);
     this.check4click=this.check4click.bind(this);
    this.handlepageclick=this.handlepageclick.bind(this);
}
    handleChange=(e)=>{//desc
        console.log(e.target.value)
        var order=e.target.value;
        this.setState({sort: e.target.value},()=>{
            (console.log(this.state.sort))

            //
        
        
          { if(order=="price") {
              this.setState({sort:"price"})
          var w1= ( _.orderBy(this.state.orgtabledata,['price'],['desc'] ))
          console.log(w1)
          this.setState({orgtabledata:w1},()=>{
            const data = this.state.orgtabledata;
            
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perpage)
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perpage),
                tabledata:slice

          })
          
        })
            
        }}

            
            { if(order=="bookID" ){
            var w1= ( _.orderBy(this.state.orgtabledata,['bookID'],['asc'] ))
            console.log(w1)  
            this.setState({orgtabledata:w1},()=>{
                const data = this.state.orgtabledata;
                
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perpage)
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perpage),
                    tabledata:slice
    
              })
              
            })}
            
            
        }
            { if(order=="average_rating" ){
                this.setState({sort:"average_rating"})
                var w1= ( _.orderBy(this.state.orgtabledata,['average_rating'],['desc'] ))
                console.log(w1)
                this.setState({orgtabledata:w1},()=>{
                    const data = this.state.orgtabledata;
                    
                    const slice = data.slice(this.state.offset, this.state.offset + this.state.perpage)
                    this.setState({
                        pageCount: Math.ceil(data.length / this.state.perpage),
                        tabledata:slice
        
                  })
                  
                })
            }
         
        }
           
           
        })
        // 
    }
check1click=(e)=>{
    this.setState({
        check1:!this.state.check1
    })
    
}
check2click=(e)=>{ 
    this.setState({
        check2:!this.state.check2
    })
    
}
check3click=(e)=>{
    this.setState({
        check3:!this.state.check3
    })
    
}
check4click=(e)=>{
    this.setState({
        check4:!this.state.check4
    })
    
}
check5click=(e)=>{
    this.setState({
        check5:!this.state.check5
    })
    
}
handlepageclick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perpage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.loadMoreData()
    });

};

loadMoreData() {
    const data = this.state.orgtabledata;
    
    const slice = data.slice(this.state.offset, this.state.offset + this.state.perpage)
    this.setState({
        pageCount: Math.ceil(data.length / this.state.perpage),
        tabledata:slice
    })

}
componentDidMount(){
    this.getdata();
}


getdata(){

    axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json").then(

res=>{console.log(res);
    var data=res.data;
    var slice=data.slice(this.state.offset,this.state.offset+this.state.perpage)
    this.setState({
        pageCount:Math.ceil(data.length/this.state.perpage),
        orgtabledata:res.data,
        // tabledata:res.data
        tabledata:slice

    })



}
)

}


    render() {
        return (
            <div>
           <Header/>
                    <div className="row">
                    <div className="col1">  <h3>Display column</h3> 
                   
                    <label className="options" for="BOOKID" > <input type="checkbox" checked={this.state.check1}  value="BOOKID" name="BOOKID" id="BOOKID" onClick={this.check1click}/> BOOKID</label>
                  
                    <label className="options" for="BOOKID1" >  <input type="checkbox" checked={this.state.check2}  value="BOOKID1" name="BOOKID1"id="BOOKID1"  onClick={this.check2click}/>  AUTHORS</label>
                    
                    <label className="options" for="BOOKID2" ><input type="checkbox" checked={this.state.check3}  value="BOOKID2" name="BOOKID2"id="BOOKID2"  onClick={this.check3click}/> PRICE</label>
                   
                    <label className="options" for="BOOKID3" >  <input type="checkbox" checked={this.state.check4}  value="BOOKID3" name="BOOKID3"id="BOOKID3"  onClick={this.check4click}/>TITLE</label>
                   
                    <label className="options" for="BOOKID4" >  <input type="checkbox" checked={this.state.check5}  value="BOOKID4" name="BOOKID4"id="BOOKID4"  onClick={this.check5click}/>RATING</label>
                    
                    
                    <div>
                    <label for="sort">SORT BY
                    
                    <select id="sort"
                    defaultValue={this.state.sort} 
                    onChange={this.handleChange} 
                    >
                       <option value="bookID">BOOKID</option>
                       <option value="price">PRICE</option>
                       <option value="average_rating">Rating</option>
                     </select>
                    </label>
                   
                    
                    </div>
                    
                    </div>
                    <div className="col2">

         <table className="table1">
         <thead>
  <tr>
  
  <th className= {this.state.check1 ? null:"true"}>BookID</th>
  <th className= {this.state.check2 ? null:"true"}>authors</th>
  <th>INFO</th>
  <th className= {this.state.check3 ? null:"true"} >Price</th>
  <th className= {this.state.check4 ? null:"true"}>Title</th>
<th className= {this.state.check5 ? null:"true"}>rating</th>
  </tr>
  </thead>
  
  <tbody>

{
    this.state.tabledata.map((item,i)=>{ return(
     
        //className= {this.state.check1 ? null:"true"}
            <tr className="TableRow">
            <td className={"SecondaryText"+(this.state.check1 ? null:" true")}>{item.bookID}</td> <td className={"PrimaryText"+(this.state.check2 ? null:" true")}>{(item.authors).slice(0,20)}</td>
            
            <td> <Link to ={{
                pathname: `/ecs/details/:${item.bookID}`,
                id:item}}>CLICK HERE</Link>
            </td>
              
               <td className={"SecondaryText"+(this.state.check3 ? null:" true")}>{item.price}</td>
               <td className={"PrimaryText"+(this.state.check4 ? null:" true")}>{(item.title)}</td>
               <td className={"SecondaryText"+(this.state.check5 ? null:" true")}>{item.average_rating} </td>
            
            
            </tr>)

    })
}


</tbody>
         
         </table></div></div>
    <ReactPaginate
    previousLabel={"pre"}
    nextLabel={"nex"}
    breakLabel={"..."}
    breakClassName={"break-me"}
    pageCount={this.state.pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={this.handlepageclick}// =(e)=>this.handleclick(e) then no need of binding
    containerClassName={"pagination"}
    subContainerClassName={"pages pagination"}
    activeClassName={"active"}
   
    />

            </div>
        )
    }
}

export default First;

