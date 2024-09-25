import { useEffect, useState } from "react";


const Author = () => {
      const [customersData,setCustomersData]=useState([])

      useEffect(()=>{
        fetch('http://localhost:5000/hussain')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setCustomersData(data)})
      },[])


    return (
        <div>
            <h1>the length of data : {customersData.length}</h1>
            {
                customersData.map(customerData=><div key={customerData._id}>
                    <h1>the price of product : {customerData.price}</h1>
                    <h1>the quantity of product : {customerData.quantity}</h1>
                </div>)
            }
        </div>
    );
};

export default Author;