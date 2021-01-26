// import React from 'react'

// const Pagination = ({itemsperpage,totalposts,paginate}) => {
//     const pageNumbers=[]
// var start=1;
// var end=start+9;
// for(let i=start;i<=end;i++){
//     pageNumbers.push(i);
// }


//     // for(let i=1;i<=Math.ceil(totalposts/itemsperpage);i++){
//     //     pageNumbers.push(i);
//     // }
    
    

//     return (
// <div>
//         <nav>
       
        
//         <ul className="pagination">
//         <li className="page-item" onClick={
//             (start,end)=>{start=start-10;
//             end=end-10;}
            
//         } >L</li>
//         {pageNumbers.map(number=>{return(
//             <li key={number} className="page-item">
          
//             <a onClick={
//                 ()=>paginate(number)

//             } href='!#' className='page-Link'>
//             {number}
//             </a>
//             </li>) 
            
//         })}
//         <li className="page-item">
//         <a href="#" className='page-Link' onClick={
//             (start,end)=>{start=start+10;
//                 end=end+10;
//             console.log(start,end)} 
            
//         } >
//         L</a>
//         </li>
//         </ul>
//         </nav></div>
//     )
// }
// export default Pagination;