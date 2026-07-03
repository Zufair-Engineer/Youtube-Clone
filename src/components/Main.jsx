import React, { useEffect, useState } from "react";
import thumbnail1 from "../assets/thumbnail1.png";
import profile from "../assets/tom.png";
import { Link } from "react-router-dom";
import { API_KEY } from "../data.js";
import { value_converter } from "../data.js";
import moment from "moment";

const Main = ({ category }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=PK&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url).then((response) =>
      response.json().then((data) => setData(data.items)),
    );
  };
  useEffect(() => {
    fetchData();
  }, [category]);
  

  return (
    <div className="grid grid-cols-3 mt-9 gap-1">
      {data.map((item, index) =>
          <Link key={index} to={`/video/${item.snippet.categoryId}/${item.id}`}>
            <div className="rounded-md  hover:bg-slate-300 cursor-pointer p-2 duration-150">
              <div className=" overflow-hidden p-3">
                <img src={item.snippet.thumbnails.medium.url} className="rounded-lg overflow-hidden" />
              </div>
              <div className="flex gap-2 mt-1">
                <img src={item.snippet.thumbnails.default.url}  className="w-7 h-7 rounded-full" />
                <h2 className="font-bold">{item.snippet.title}</h2>
              </div>
              <p className="ml-9">{item.snippet.channelTitle}</p>
              <p className="ml-9">{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()} ago</p>
            </div>
          </Link>  
      )}
    </div>
  );
};

export default Main;
