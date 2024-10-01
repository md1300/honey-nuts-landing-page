
import { forwardRef, useState } from 'react';
import honeyBottle from '../../assets/honeyBottle.jpg'
import Swal from 'sweetalert2';


const OrderForm =forwardRef((props,ref) => {
const [price,setPrice]=useState(1000)
const [quantity,setQuantity]=useState(1)

 

const handleOrderForm =e=>{
    e.preventDefault()
    const form =e.target ; 
    const name=form.name.value;
    const phoneNumber=form.phoneNumber.value
    const address=form.address.value;
    const location=form.address.value;
    const email=form.email.value;
    const authorEmail='jabirislam243@gmail.com'
    
    const customerData={name,phoneNumber,address,location,email,price,quantity,authorEmail}
   

Swal.fire({
  title: "Do you want to confirm order ? ",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "confirm",
  denyButtonText: `Don't confirm`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    // -------------------------------
    fetch('http://localhost:5000/hussain',{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(customerData)
     })
     .then(res=>res.json)
     .then(data=>console.log(data))
    // --------------------------------
    Swal.fire("confirmed!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("you do not confirm order", "", "info");
  }
});
// -----------------------------


}



const handlePluseButton=()=>{
    const newQuantity=quantity+1 ;
    const newPrice=price+1000 ;
    setQuantity(newQuantity)
    setPrice(newPrice)
    console.log({newQuantity,newPrice})
}

const handleMinusButton=()=>{
    if(quantity>1){
        const newQuantity=quantity-1 ;
        const newPrice=price-1000 ;
        setQuantity(newQuantity)        
        setPrice(newPrice)
    }
    
    
}


    return (
      
     
<div  className="border-4 border-black rounded-lg ">
       <form ref={ref} onSubmit={handleOrderForm} className="bg-base-200">
            <h1 className="text-center">অর্ডার করতে নিচের ফর্মটি পূরণ করুন</h1>
            <div className="grid md:grid-cols-2 gap-4">
                {/* -------------------form section ------------------ */}
                <div>
                <div className="form-control">
               <label className="label">
                 <span className="label-text">আপনার নাম লিখুন</span>
              </label>
              <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
            </div>
            {/* ----------------------------- */}
                <div className="form-control">
               <label className="label">
                 <span className="label-text">আপনার ফোন নাম্বারটি লিখুন</span>
              </label>
              <input type="text" name='phoneNumber' placeholder="Your phone number" className="input input-bordered" required />
            </div>
            {/* --------------------------- */}
                <div className="form-control">
               <label className="label">
                 <span className="label-text">ঠিকানা লিখুন </span>
              </label>
              <input type="text" name='address' placeholder="Your Address" className="input input-bordered" required />
            </div>
            {/* --------------------------- */}
                <div className="form-control">
               <label className="label">
                 <span className="label-text">শহর/পুলিশ স্টেশনঃ </span>
              </label>
              <input type="text" name='location' placeholder="Your city/police Station" className="input input-bordered" required />
            </div>
            {/* --------------------------- */}
                <div className="form-control">
               <label className="label">
                 <span className="label-text">ইমেইল</span>
              </label>
              <input type="email" name='email' placeholder="Your email" className="input input-bordered" />
            </div>
            {/* --------------------------- */}
               
       
                </div>
                {/* ------------------Product section--------------------- */}
                <div>
                       <h1 className="text-2xl text-center">Your Products</h1>
                       <div className="border border-b-orange-700 grid grid-cols-3 p-4">
                            <h1>product</h1>
                            <h1>quantity</h1>
                            <h3>price</h3>                        
                       </div>
                       <div className='grid grid-cols-3 gap-3'>
                         
                            <div className='flex'>
                                <img className='w-12' src={honeyBottle} alt="" />
                                <p>প্রিমিয়াম হানিনাট 900 গ্রাম প্যাক</p>
                            </div>
                            <div>
                                <p><span onClick={handleMinusButton} className='btn text-2xl'>-</span>{quantity}<span  onClick={handlePluseButton} className='btn text-2xl'>+</span></p>
                            </div>
                        
                         <div>
                            <h1>{price}<span className='text-3xl'>৳</span></h1>
                         </div>
                       </div>

                       {/* -----------------------your order section ------------- */}
                       {/* ---------------------order section ------------------- */}
                       <div className='mt-16'>
                          <h1 className='text-2xl'>Your Order :</h1>
                          <div className='border border-b-orange-700 p-4 grid grid-cols-2'>
                            <h3>Products</h3>
                            <p>subtotal</p>
                          </div>
                          <div className='border border-b-orange-700 p-4 grid grid-cols-2 '>
                            <div>
                              <img className='w-20' src={honeyBottle}  />
                              <p>প্রিমিয়াম হানিনাট 900 গ্রাম প্যাক</p>
                            </div>
                            <div>
                                <p>{price}<span className='text-3xl'>৳</span> </p>
                            </div>
                          </div>
                          <div className='grid grid-cols-2'>
                            <p>subtotal</p>
                            <p><span>{price}</span> <span className='text-3xl'>৳</span> </p>
                          </div>
                          <div className='grid grid-cols-2'>
                            <p>total</p>
                            <p><span>{price}</span> <span className='text-3xl'>৳</span> </p>
                          </div>

                       </div> 
                </div>

                
            </div>

            <div className='bg-[#bfdbfe] my-5 text-center'>
                    <p className=''>Cash on delivery</p>
                    <p className=''>Pay with cash upon delivery.</p>
                </div>
            <button className="btn btn-block text-center bg-[#4ade80]" >অর্ডার কনফার্ম করুন</button>
     </form>   

    

</div>



    );
});

OrderForm.displayName='OrderForm' ;

export default OrderForm ;




 

