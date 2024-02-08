import React from "react";
// import "./RightSide.css";
import Navbar from "./Navbar";

import GetAlbums from "../GetAlbums/GetAlbums";

function RightSide() {
  return (
    // M A I N - D I V
    <div className="bg-121212 m-[14px] rounded-[8px] w-71 ">
      {/* N A V - B A R */}
      <Navbar />

      <div className="playlist_btn_div flex justify-start items-center gap-1 my-[10px]">
        <button className=" bg-custom-dark px-3 py-1 w-10 rounded-2xl ml-[5px] ">
          All
        </button>
        <button className="bg-custom-dark px-3 py-1 w-[70px] rounded-2xl ml-[5px] ">
          Music
        </button>
        <button className="bg-custom-dark px-3 py-1 w-[84px] rounded-2xl ml-[5px] ">
          Podcasts
        </button>
      </div>

      <div className="Albums">
        <GetAlbums />
      </div>
    </div>
  );
}

export default RightSide;

// rounded-l-[]
//
