import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Slices/CartSlice'
import { Link } from 'react-router-dom';

const Cart = () => {
    const Products = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        setTotalAmount(Products.reduce((acc, curr) => acc + curr.price, 0));
    }, [Products]);

    let trimString = function (string, len) {
        return string?.length > len ?
            string.substring(0, len - 1) + '...' : string;
    };

    const removeToCart = (id) => {
        //dispatch the remove action
        dispatch(remove(id))
    }
    return (
        <>
            {
                (Products.length > 0) ? (
                    <div className='section my-5 row p-2'>
                        <div className='container col-7 ms-4'>
                            {
                                Products.map((product) => (
                                    <div key={product.id} className="my-5 col-md-12 mx-4 d-flex gap-5">
                                        <div className="card cartproducts p-2 d-flex px-2 flex-row " style={{ width: '35rem', height: '11rem' }}>
                                            <div className='border border-tertiary'>
                                                <img src={product.image} className="card-img" style={{ height: '130px', width: '130px' }} />
                                            </div>
                                            <div className="card-body mx-5">
                                                <h5 className="card-title" >{trimString(product.title, 25)}</h5>
                                                <div className="d-flex align-items-center justify-content-between" >
                                                    <p className="mb-0">Rs {product.price}</p>
                                                </div>
                                                <button type='btn' className='btn delete px-5 my-2' onClick={() => removeToCart(product.id)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='row col-5 border cartsummary  my-5 p-3'>
                            <div><h3>Cart Summary</h3>
                            <hr />
                                <p>Total Items: {Products.length}</p>
                                <p>Total amount: Rs {totalAmount}</p>
                                <button type='btn' className='btn checkout my-2' style={{width:'200px'}}>Check Out now</button>
                            </div>
                        </div>
                    </div >
                ) :
                    <div className='d-flex justify-content-center align-items-center text-center' style={{ height: "80vh" }}>
                        <div>
                            <h3 className='text mt-2'>Cart Is Empty 😌<span className='bi bi-emoji-frown'></span></h3>
                            <Link to='/'><button type='btn' className='btn checkout mx-4 px-5 text-white my-2' >Shop Now</button></Link>
                        </div>
                    </div>
            }
        </>
    )
}

export default Cart