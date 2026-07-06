import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import  Sidebar  from "../../components/Sidebar.jsx";

const Search = ({menu}) => {
  const [category , setCategory] = useState(0)
  const {categoryId} = useParams()
  const [result, setResult] = useState([]);
  const { query } = useParams();

  const fetchSearchResult = async () => {
    const result_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${API_KEY}`;

    const response = await fetch(result_url);
    const data = await response.json();

    setResult(data.items || []);
  };

  useEffect(() => {
    if (query) {
      fetchSearchResult();
    }
  }, [query]);

  return (
    <div className="p-1 w-full flex gap-3">
      <div className="hidden md:block md:fixed left-3 top-14 h-full">
        <Sidebar menu={menu} category={category} setCategory={setCategory} />
      </div>
      <div className={`flex flex-col gap-3 mt-12 md:mt-14 md:${menu ? "ml-50" : "ml-20"}  w-full`}>
        {result.map((item) => (
          <Link
            key={item.id.videoId}
            to={`/video/${item.id.videoId}`}
            className="flex flex-col md:flex-row gap-3 hover:bg-slate-200 p-2 rounded-md"
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              className="w-[450px] h-[230px] rounded-md"
              alt=""
            />

            <div>
              <h4 className="font-semibold line-clamp-2">
                {item.snippet.title}
              </h4>

              <p className="text-sm text-gray-600">
                {item.snippet.channelTitle}
              </p>

              <p className="text-xs text-gray-500">
                {moment(item.snippet.publishedAt).fromNow()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;