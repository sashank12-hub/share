import * as types from "./type"
///RXREDUCER
const initialState = {

    products:[],
    cart:[],
    tabledata:[],
   

};
export const Total=(cart)=>
cart?.reduce((amount,item)=>item.price+amount,0);

export const  productreducer= (state = initialState, { type, payload }) => {
    switch (type) {

    case types.Add_PRODUCT:
        return { ...state,cart:[...state.cart,payload] }

    case types.REMOVE_PRODUCT:
                if(state.cart.length>0){
                    const DELETE_ITEM=state.cart.findIndex(item=>item.bookID===payload.bookID)
                   
                    var newcart=[]
                    newcart=[...state.cart]
                    newcart.splice(DELETE_ITEM,1)
                }

        return {...state,cart:[...newcart]}

    case types.ADD_DATA:
        return {...state,tabledata:payload}
    default:
        return state
    }
}



