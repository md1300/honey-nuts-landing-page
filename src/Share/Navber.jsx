import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navber = () => {
  const {user,logOut}=useContext(AuthContext)
  console.log(user)

  const handleLogOut=()=>{
    logOut()
  }
    return (
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none gap-2">
    {!user && <Link to='/login' className="btn btn-circle">login</Link>}

    {user && <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {user?.email==='tal@tal.com'? <li><Link  to='/hussain' className="btn">all order </Link> </li >:<li><Link  className="btn">my order</Link></li>}
        <li><button className="btn" onClick={handleLogOut}>Logout</button></li>
      </ul>
    </div>  }
    
    
  </div>
</div>
    );
};

export default Navber;