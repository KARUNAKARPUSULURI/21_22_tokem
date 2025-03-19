import React, { useEffect, useState } from 'react'
import { getProductsData } from '../ServiceLayer/api'

const Home = () => {
    const [data, setData] = useState([])
    
    useEffect(()=>{
        const getToken = localStorage.getItem("token")
        if(getToken){
            getProductsData().then(data => {
                setData(data)
            })
        }else{
            console.log("nno token")
        }
    })
  return (
    <div>
        <h1>Home Page</h1>
        <div>
            {data && data.map((item, index)=>{
                return (
                    <>
                    <div key={index}>
                        <div>
                            <img src={item.image} height={200} width={200}/>
                        </div>
                        <div>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>View Details</button>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default Home