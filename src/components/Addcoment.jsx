import React, { useState } from "react";
import { jack_Icon } from "./picture";

const Addcoment = ({ commentData, setcommentData }) => {
  const [showbtn, setShowBtn] = useState(false);
  const [com, setCom] = useState(" ");
  const handleButton = (e) => {
    if (e.target.value != "") {
      setCom(e.target.value);
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };
  const handleComment = () => {
    setcommentData((prev) => [
      {
        img: jack_Icon,
        comment: com,
        commentTime: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
        }),
        nameHandler: "@jackcover",
        like: 0,
      },
      ...prev,
    ]);

    setShowBtn(false);
    setCom("");
  };

  return (
    <div className="flex items-center mt-3 ml-2 gap-2">
      <img src={jack_Icon} className="h-8 rounded-full" />
      <div className="w-full">
        <input
          type="text"
          placeholder="Write Your Comment"
          value={com}
          onChange={handleButton}
          className="w-full outline-none border-b-1 text-sm"
        />
        <div
          className={`${showbtn ? "block" : "hidden"} flex justify-end mt-2 gap-7`}
        >
          <button className="hover:bg-gray-200 px-3 py-1 rounded-lg duration-200 font-medium cursor-pointer">
            Canlce
          </button>
          <button
            className="bg-black hover:bg-gray-800 cursor-pointer duration-200  text-white px-3 py-1 rounded-lg "
            onClick={handleComment}
          >
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addcoment;
