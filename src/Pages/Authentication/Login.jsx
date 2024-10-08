import { Link, useNavigate, } from 'react-router-dom';
import honeyBottle from '../../assets/honeyBottle.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'



const Login = () => {
 const {setUser,logedIn ,}=useContext(AuthContext)
   const navigate=useNavigate()

    const handleLogInButton=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
 
         logedIn(email,password)
         .then(result=>{
            setUser(result.user)
             fetch(`${import.meta.env.VITE_API_URL}/jwt`,{
                method:'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body:JSON.stringify({email:result?.user?.email})              
            })
            .then(res=>res.json())
            .then(data=>console.log(data))

            
            Swal.fire({
                title: "Log In successful ",
                text: "now, you can see your order",
                icon: "success"
              });
            navigate('/')
            console.log(result.user)})
         .catch(error=>{
            Swal.fire(error.message);
            form.reset()
         })
    }
    

    return (
        <>
      
               <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
           <img src={honeyBottle} alt=""  />
        </div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome </h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

        <form  onSubmit={handleLogInButton}>
            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" name='email' />
            </div>

            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" name='password' />
            </div>

            <div className="flex items-center justify-between mt-4">
                <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                <button type='submit' className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign In
                </button>
            </div>
        </form>
    </div>

    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">Do not have an account? </span>

        <Link to='/register' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</Link>
    </div>
</div>
</>    
    );
};

export default Login;