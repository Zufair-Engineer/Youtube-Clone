import React from "react";
import home_Icone from "../assets/home.png";
import short_Icon from "../assets/music.png";
import show_more from "../assets/show-more.png";
import entertainment_Icon from "../assets/entertainment.png";
import game_Icon from "../assets/game_icon.png";
import sport_Icon from "../assets/sports.png";
import tech_Icon from "../assets/tech.png";
import blog_Icon from "../assets/blogs.png";
import music_Icon from "../assets/music.png";
import news_Icon from "../assets/news.png";
import automobile_Icon from "../assets/automobiles.png";
import cameron_Icon from "../assets/cameron.png";
import jack_Icon from "../assets/jack.png";
import megan_Icon from "../assets/megan.png";

const Sidebar = ({ menu, category, setCategory , sideBar }) => {
  const hidden = menu ? "block" : "hidden";
  return (
    <div
      className={`
    fixed
    top-16
    md:left-4
    sm:z-50
    duration-300
    ${menu ? "w-0 md:w-40" : `w-40  md:w-10`}
    h-[calc(100vh-64px)]
    bg-white
    overflow-y-auto
    scrollbar-thin
  `}
    >
      <div
        className="flex items-center gap-4 w-full hover:bg-slate-200 px-2 py-1 cursor-pointer duration-300 rounded-md"
        onClick={() => setCategory(0)}
      >
        <img src={home_Icone} className="h-5 rounded-full " />
        <p className={`text-sm font-semibold  md:${hidden}`}>Home</p>
      </div>
      <div
        className="flex items-center gap-4 w-full hover:bg-slate-200 px-2 py-1 cursor-pointer duration-300 rounded-md"
        onClick={() => setCategory(20)}
      >
        <img src={game_Icon} className="h-5 rounded-full " />
        <p className={`text-sm font-semibold  md:${hidden}`}>Gaming</p>
      </div>
      <div
        className="flex items-center gap-4 w-full hover:bg-slate-200 px-2 py-1 cursor-pointer duration-300 rounded-md"
        onClick={() => setCategory(2)}
      >
        <img src={automobile_Icon} className="h-5 rounded-full " />
        <p className={`text-sm font-semibold  md:${hidden}`}>Automobiles</p>
      </div>
      <div
        className="flex items-center gap-4 w-full hover:bg-slate-200 px-2 py-1 cursor-pointer duration-300 rounded-md"
        onClick={() => setCategory(17)}
      >
        <img src={sport_Icon} className="h-5 rounded-full " />
        <p className={`text-sm font-semibold  md:${hidden}`}>Sports</p>
      </div>
      <div
        className="flex items-center gap-4 w-full hover:bg-slate-200 px-2 py-1 cursor-pointer duration-300 rounded-md"
        onClick={() => setCategory(24)}
      >
        <img src={entertainment_Icon} className="h-5 rounded-full " />
        <p className={`text-sm font-semibold  md:${hidden}`}>Entertainment</p>
      </div>
      <div
        className="flex items-center gap-4 w-full hover:bg-slate-200 px-2 py-1 cursor-pointer duration-300 rounded-md"
        onClick={() => setCategory(28)}
      >
        <img src={tech_Icon} className="h-5 rounded-full " />
        <p className={`text-sm font-semibold  md:${hidden}`}>Technology</p>
      </div>
      <div
        className="flex items-center gap-4 w-full hover:bg-slate-200 px-2 py-1 cursor-pointer duration-300 rounded-md"
        onClick={() => setCategory(10)}
      >
        <img src={music_Icon} className="h-5 rounded-full " />
        <p className={`text-sm font-semibold  md:${hidden}`}>Music</p>
      </div>
      <div
        className="flex items-center gap-4 w-full hover:bg-slate-200 px-2 py-1 cursor-pointer duration-300 rounded-md"
        onClick={() => setCategory(22)}
      >
        <img src={blog_Icon} className="h-5 rounded-full " />
        <p className={`text-sm font-semibold  md:${hidden}`}>Blogs</p>
      </div>
      <div
        className="flex items-center gap-4 w-full hover:bg-slate-200 px-2 py-1 cursor-pointer duration-300 rounded-md"
        onClick={() => setCategory(25)}
      >
        <img src={news_Icon} className="h-5 rounded-full " />
        <p className={`text-sm font-semibold  md:${hidden}`}>News</p>
      </div>
      <hr
        className={`w-full h-1 text-slate-400 mt-2 ${menu ? "w-[20%]" : "w-[5%]"}`}
      />
      <h1 className={`font-bold text-sm px-2 md:${hidden}`}>Subscription</h1>
      <div className="flex items-center gap-4 w-full hover:bg-slate-200 px-2 py-1 cursor-pointer duration-300 rounded-md">
        <img src={cameron_Icon} className="h-5 rounded-full " />
        <p className={`text-sm font-semibold  md:${hidden}`}>cameron</p>
      </div>
      <div className="flex items-center gap-4 w-full hover:bg-slate-200 px-2 py-1 cursor-pointer duration-300 rounded-md">
        <img src={jack_Icon} className="h-5 rounded-full " />
        <p className={`text-sm font-semibold  md:${hidden}`}>Jack</p>
      </div>
      <div className="flex items-center gap-4 w-full hover:bg-slate-200 px-2 py-1 cursor-pointer duration-300 rounded-md">
        <img src={megan_Icon} className="h-5 rounded-full " />
        <p className={`text-sm font-semibold  md:${hidden}`}>Megan</p>
      </div>
    </div>
  );
};

export default Sidebar;
