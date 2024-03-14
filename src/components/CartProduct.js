import { useContext } from "react"
import { storeContext } from "../Context and Reduce/StoreContext"

const CartProduct = ({item}) => {
    const {removeFromBasket}=useContext(storeContext);
    const handleRemove=()=>{
        removeFromBasket(item)
    }
  return (
    <div  className="flex flex-row items-center gap-8 px-10">
        <img src={item.img} alt={item.title} className="w-40 border-solid border-2 border-black-500 py-3 rounded my-2" />
        <div className="w-1/2 px-10">
        <p className="text-xl font-medium pt-3">{item.title}</p>
        <p className="text-lg">{item.price.toFixed(2)}</p>
        </div>
        <button className="btn btn-secondary my-1 px-3 py-2 hover:bg-red-500" onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default CartProduct