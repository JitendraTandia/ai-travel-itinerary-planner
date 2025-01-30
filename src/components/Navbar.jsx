import React from "react";
import { ImagePath } from "../routes/ImagePath";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function Navbar() {

  let userData = JSON.parse(sessionStorage.getItem("userDetail"))
  console.log("useeeee",userData)

  let token = Cookies.get("Logtk")

  return (
    <div>
      <div className="w-full p-4 px-24 fixed z-[999] flex items-center backdrop-blur-md justify-between">
        <Link to={"/"}>
        <img  src={ImagePath.logo} alt="logoImg" />
        </Link>
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-semibold">Dashboard</h1>
          <h1>FAQ</h1>
        </div>


        
       { userData && token && <div className="relative flex items-center gap-2 justify-between">
          <img className="w-10 h-10 rounded-full" src={userData?.profilePicture} alt="avatarImg" />
          <h4 className="font-semibold">Welcome {userData?.username}!</h4>
          <div id="profile-menu" className="absolute bg-white top-14 min-h-24 w-full border-2 border-black">
            <button onClick={()=>{Cookies.remove("Logtk");window.location.reload()}} className="px-5 py-2 border-2 bg-red-300 rounded-lg" >Log Out</button>
          </div>
        </div>}

        { !userData && <div>
          <Link to={"/login"}>
          <button className="px-5 py-2 bg-blue-500 rounded-lg text-white border font-semibold" >Log In</button>
          </Link>
        </div>}
      </div>

    </div>
  );
}

export default Navbar;
