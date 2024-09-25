import { useEffect, useState } from "react";
import CustomerDetails from "./CustomerDetails";


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
            <h1 className="text-3xl text-center">the length of order : {customersData.length}</h1>
            <div className="grid  lg:grid-cols-3 gap-2">
            {
                customersData.map(customerData=><CustomerDetails 
                    key={customerData._id}
                    customerData={customerData}
                ></CustomerDetails>)
            }
            </div>
        </div>
    );
};

export default Author;