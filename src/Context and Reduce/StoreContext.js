import { createContext, useReducer } from "react";
import storeReducer, { initialState } from "./reducer";
export const storeContext =createContext();


const StoreProvider = ({children}) => {
    const [state,dispatch]=useReducer(storeReducer,initialState)
    const addToBasket=(product)=>{
        const updatedBasket= state.products.filter((item)=> item.title!==product.title);;
        
        updatedBasket.push(product);
        updatePrice(updatedBasket)
        dispatch({
            type:"add",
            payload:updatedBasket
        })
    }
    const removeFromBasket=(product)=>{
        const updatedBasket=state.products.filter((currentProduct)=>
            currentProduct.title !== product.title
        )
        updatePrice(updatedBasket)
        dispatch({
            type:"remove",
            payload:updatedBasket
        })
    }
    const updatePrice = (products)=>{
        let total=0;
        products.forEach(product => {
            total+=product.price
        });
        dispatch({
            type:"update price",
            payload:total
        })
    }
    
    const value={
        total:state.total,
        products:state.products,
        addToBasket,
        removeFromBasket,
    }
    return <storeContext.Provider value={value}>
        {children}
    </storeContext.Provider>

}

export default StoreProvider