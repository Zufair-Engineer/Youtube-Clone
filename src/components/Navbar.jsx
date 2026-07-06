import React, { useState } from "react";
import menu from "../assets/menu.png";
import logo from "../assets/logo.png";
import search_Icon from "../assets/search.png";
import voice_Icon from "../assets/voice-search.png";
import notification from "../assets/notification.png";
import profile from "../assets/jack.png";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const Navbar = ({setMenu , setSideBar}) => {
  const [search , setSearch] = useState("")
  const navigate = useNavigate()

  const handleSearch = ()=>{
    if(search.trim()){
      navigate(`/search/${search}`)
    }
  }

  return (
    <nav className="w-full px-5 py-1 flex justify-between items-center fixed bg-white bg-linear-150">

      {/* nav left section start */}
      <div className="flex gap-1 md:gap-4 items-center">
        <button onClick={()=> {
          setSideBar(prev => !prev)
          setMenu(prev => !prev)
        }}  className="text-xl hover:bg-slate-300 p-1 rounded-full cursor-pointer duration-300">
          &#9776;
        </button>
        <Link to={'/'}>
        <img src={logo} className="h-6" />
        </Link>
      </div>
      {/* nav left section end */}

      {/* nav middle section start */}
      <div className="flex items-center gap-3">
        <div className="flex items-center  md:w-[500px] border border-slate-300 rounded-full pl-3">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            onKeyDown={(e)=>{
              if(e.key === "Enter"){
                handleSearch()
              }
            }}
            className=" w-[50px] md:w-full outline-none py-1"
          />
          <div onClick={handleSearch} className="w-[60px] flex justify-center bg-slate-100 items-center p-1 rounded-r-full cursor-pointer">
            <img src={search_Icon} className="h-5" />
          </div>
        </div>
        <div className="w-8 h-8 rounded-full p-1 bg-slate-100 hidden md:flex justify-center items-center cursor-pointer">
          <img src={voice_Icon} className="h-6 hidden md:flex" />
        </div>
      </div>
      {/* nav middle section end */}

      {/* nav right section start */}
      <div className="flex gap-4 justify-between items-center">
        <div className="hidden md:flex gap-2 items-center bg-slate-100 px-3 py-0.5 rounded-full cursor-pointer hover:bg-slate-200">
          <h1 className="text-xl">+</h1>
          <p>Create</p>
        </div>
        <div className="hidden md:flex items-center cursor-pointer">
          <img src={notification} className="h-7 hidden md:flex" />
        </div>
        <div className="w-7 h-7 rounded-full">
          <img src={profile} className="rounded-full" />
        </div>
      </div>
      {/* nav right section end */}
    </nav>
  );
};

export default Navbar;
