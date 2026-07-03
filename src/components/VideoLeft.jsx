import React, { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../data";
import {
  video1,
  user_Profile_Icon,
  like_Icon,
  dislike_Icon,
  jack_Icon,
  save_Icon,
  share_Icon,
} from "./picture";
import Addcoment from "./Addcoment";
import moment from "moment";

const VideoLeft = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData , setChannelData] = useState(null);
  const [commentData , setCommentData] = useState([]);

  
  const fetchChannelData = async ()=>{
    const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channel_url).then(response => response.json()).then(data => setChannelData(data.items[0]))
  
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_url).then(response => response.json()).then(data => setCommentData(data.items || []))
  }

  const fetchvideoData = async ()=>{
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(video_url).then(response => response.json()).then(data => setApiData(data.items[0]))
  }

  useEffect(()=>{
    if(videoId){
      fetchvideoData()
    }
  },[videoId])

  useEffect(()=>{
    if(apiData){
      fetchChannelData()
    }
  },[apiData])

  const [Subscribe, setSubscribe] = useState("Subscribe");
  const [bgcolor, setbgColor] = useState("red");
  const [error, setError] = useState(false);
  const [like, setLike] = useState(125);
  const [unlike, setUnlike] = useState(23);

  const CommentsData = [
    {
      id: 1,
      img: "https://i.pravatar.cc/50?img=1",
      nameHandler: "@johnsmith",
      comment:
        "This tutorial is amazing! I finally understood React Router. Thank you so much!",
      like: "2.4K",
      commentTime: "2 days ago",
    },
    {
      id: 2,
      img: "https://i.pravatar.cc/50?img=2",
      nameHandler: "@sarah_dev",
      comment: "Can you please make a video on authentication with MERN Stack?",
      like: "987",
      commentTime: "1 day ago",
    },
    {
      id: 3,
      img: "https://i.pravatar.cc/50?img=3",
      nameHandler: "@codewithalex",
      comment:
        "One of the best explanations I've seen on YouTube. Keep up the great work!",
      like: "1.8K",
      commentTime: "5 days ago",
    },
    {
      id: 4,
      img: "https://i.pravatar.cc/50?img=4",
      nameHandler: "@frontendmaster",
      comment:
        "The animations and UI are really clean. Learned a lot from this project.",
      like: "543",
      commentTime: "3 weeks ago",
    },
    {
      id: 5,
      img: "https://i.pravatar.cc/50?img=5",
      nameHandler: "@ali_codes",
      comment: "Who's watching this in 2026? 😄",
      like: "3.1K",
      commentTime: "6 months ago",
    },
    {
      id: 6,
      img: "https://i.pravatar.cc/50?img=6",
      nameHandler: "@reactlearner",
      comment:
        "I was stuck for hours, but this video solved my problem in just 10 minutes.",
      like: "764",
      commentTime: "4 days ago",
    },
    {
      id: 7,
      img: "https://i.pravatar.cc/50?img=7",
      nameHandler: "@codinglife",
      comment: "Excellent explanation. Looking forward to the next tutorial!",
      like: "429",
      commentTime: "1 week ago",
    },
    {
      id: 8,
      img: "https://i.pravatar.cc/50?img=8",
      nameHandler: "@techworld",
      comment:
        "Your teaching style is so simple and beginner-friendly. Thanks!",
      like: "1.1K",
      commentTime: "8 hours ago",
    },
    {
      id: 9,
      img: "https://i.pravatar.cc/50?img=9",
      nameHandler: "@maria_dev",
      comment: "Can you upload the source code on GitHub? It would help a lot.",
      like: "358",
      commentTime: "12 hours ago",
    },
    {
      id: 10,
      img: "https://i.pravatar.cc/50?img=10",
      nameHandler: "@devpro",
      comment:
        "Subscribed! This is exactly the type of content I've been looking for.",
      like: "2K",
      commentTime: "3 days ago",
    },
  ];
  // const [comments, setComments] = useState(CommentsData);


  const handlebtn = () => {
    if (Subscribe == "Subscribe") {
      setSubscribe("Unsubscribe");
      setbgColor("black");
    } else {
      setSubscribe("Subscribe");
      setbgColor("red");
    }
  };

  return (
    <div className="w-full p-3 mt-9 ">
      <iframe
        className="w-[700px] h-[400px] rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h2 className="font-bold text-xl mt-3">
        {apiData?apiData.snippet.title: "title here"}
      </h2>

      <div className="flex mt-2 items-center justify-between w-[700px] px-1">
        <div className="flex gap-2">
          <img src={channelData?channelData.snippet.thumbnails.default.url: "Img"} className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <p className="font-bold">{apiData?apiData.snippet.channelTitle: "Channel Name"}</p>
            <span className="text-[12px]">{channelData?value_converter(channelData.statistics.subscriberCount): "1M"} Subscribers</span>
          </div>
          <button
            onClick={handlebtn}
            style={{ background: bgcolor }}
            className={`ml-4 text-white px-4  rounded-xl cursor-pointer hover:bg-slate-950`}
          >
            {Subscribe}
          </button>
        </div>
        <div>
          <div className="flex gap-5">
            <div className="w-[150px] flex  items-center justify-between  rounded-full">
              <span
                className="flex gap-1 hover:bg-slate-400 rounded-full cursor-pointer px-2 py-1 items-center"
                
              >
                <img src={like_Icon} className="h-5" />
                {apiData?value_converter(apiData.statistics.likeCount):155}
              </span>
              <div className="h-5 w-0.5 bg-black"></div>
              <span
                className="flex gap-1 hover:bg-slate-400 rounded-full cursor-pointer px-2 py-1 items-center"
              >
                <img src={dislike_Icon} className="h-5" />
                123
              </span>
            </div>
            <span>
              <img src={share_Icon} className="h-5 cursor-pointer " />
              Share
            </span>
            <span>
              <img src={save_Icon} className="h-5 cursor-pointer" />
              Save
            </span>
          </div>
        </div>
      </div>

      {/* Description section */}
      <div className="w-full p-2 bg-slate-100 mt-3 rounded-md">
        <div className="">
          <h1 className="font-bold text-sm">{apiData?value_converter(apiData.statistics.viewCount): "16k"} views &bull;{apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</h1>
        </div>
        <p>
          {apiData?apiData.snippet.description.slice(0,700):"Description Here"}
        </p>
      </div>
      <h4 className="font-bold">{apiData?value_converter(apiData.statistics.commentCount): "Comments"} Comments</h4>
      {/* add comment */}
      {/* <Addcoment setCommentData={setCommentData} commentData= {commentData}/> */}

      {/* comment section */}
      {commentData.map((item, index) => (
        <div key={index} className="w-full p-2 flex gap-2 items-start">
          <img src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} className="h-8 rounded-full mt-1" />
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-bold">
              {item.snippet.topLevelComment.snippet.authorDisplayName}
              <span className="ml-2 text-[12px] font-light">
                {moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}
              </span>
            </h4>
            <p className="text-sm">{item.snippet.topLevelComment.snippet.textDisplay}</p>
            <div className="flex gap-5 items-center">
              <div className="flex gap-2 items-center">
                <img src={like_Icon} className="h-4 cursor-pointer" />{" "}
                {value_converter(item.snippet.topLevelComment.snippet.likeCount)}{" "}
              </div>
              <img src={dislike_Icon} className="h-4 cursor-pointer" />
              <p className="ml-4 text-sm font-medium">reply</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoLeft;
