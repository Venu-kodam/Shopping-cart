import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../Slices/CartSlice";
import { toast } from 'react-toastify'
const Products = ({ product }) => {
    const { cart } = useSelector(state => state);
    const dispatch = useDispatch()
    const addToCart = (product) => {  //product is payload--product is whole card component
        //dispatch add action
        dispatch(add(product))
        toast.success('Product added to cart successfully', {
            // className: 'toast', 
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true
        })
    }
    const removeFromCart=()=>{
        // dispatch(deleteitem(product))
        dispatch(remove(product.id))
        toast.error('Product removed from cart successfully', {
            // className: 'toast',
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true
        });
    }
    let trimString = function (string, len) {
        return string?.length > len ?
            string.substring(0, len - 1) + '...' : string;
    };
    return (
        <div className="my-2 col-md-3">
            <div className="card products p-2 border " style={{ width: '19rem', height: '22rem' }}>
                <img src={product.image} className="card-img-top d-block mx-auto" style={{ height: '180px', width: '140px' }} />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: '70px' }}>{trimString(product.title, 25)}</h5>
                    <div className="d-flex align-items-center justify-content-between" >
                    {cart.some((p) => p.id === product.id)?(
                        (<a href="#" className="btn removefromcart p-2" onClick={() => removeFromCart()}>Remove From Cart</a>)
                    ):(<a href="#" className="btn addtocart p-2" onClick={() => addToCart(product)}>Add To Cart</a>)}
                        <p className="mb-0">Rs {product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products