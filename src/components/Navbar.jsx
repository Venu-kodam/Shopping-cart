import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const [expand, setExpand] = useState(false)
    const handleToggle = () => {
        setExpand(!expand)
    }

    //to get the cartproducts length
    const cartItems = useSelector(state => state.cart)

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black fixed-top">
                <div className="container text-white">
                    <NavLink className="nav-link fs-1" href="#" to='/'>Redux Cart</NavLink>
                    <button className="navbar-toggler text-white" onClick={handleToggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className={`collapse navbar-collapse justify-content-end ${expand && 'show'}`} id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 fs-5 text-center">
                            <li className="nav-item">
                                <NavLink className="nav-link me-4 text-white" to='/' href="#">Home</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink className="text-white fs-5 me-4 position-relative" to="/cart" ><i className="fa-solid fa-cart-shopping " style={{ cursor: 'pointer' }}></i><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartItems.length}
                        <span className="visually-hidden">unread messages</span>
                    </span> </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar