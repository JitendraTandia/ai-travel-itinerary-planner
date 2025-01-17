import React from "react";
import Logo from "../assets/logo.png";
import Avatar from "../assets/avatar.png";

function Navbar() {
  return (
    <div>
      <div className="w-full p-4 px-24  bg-red-400 flex items-center justify-between">
        <img src={Logo} alt="logoImg" />
        <div className="flex items-center justify-between gap-2">
          <h1 className="font-semibold">Dashboard</h1>
          <h1>FAQ</h1>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <img src={Avatar} alt="avatarImg" />
          <h4 className="font-semibold">Welcome Jay!</h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
