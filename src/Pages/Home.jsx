import {useState,useEffect} from 'react'
import axios from 'axios'
import Products from '../components/Products'
const Home = () => {
    const[data,setData] = useState([])
    useState(()=>{
        const getUser = async ()=>{
            try {
              const response = await axios.get('https://fakestoreapi.com/products');
              console.log(response.data);
              setData(response.data)
            } catch (error) {
              console.error(error);
            }
          }
          getUser()
    },[])
  return (
    <div className='container  w-100 my-5 py-5  d-flex align-items-center flex-wrap'>
        {data.map((products,index)=>(
            <Products key={index} product={products}/>
        ))}
    </div>
  )
}

export default Home