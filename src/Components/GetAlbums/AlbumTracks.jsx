import React from "react";
import LeftSide from "../LeftComponent/LeftSide";
// import RightSide from "../RightComponent/RightSide";
import Navbar from "../RightComponent/Navbar";

function AlbumTracks() {
  return (
    <div className="flex bg-black">
      <LeftSide />
      <div className="flex flex-col bg-121212 m-[14px] rounded-[8px] w-full ">
        <Navbar />

        <div className=" h-12rem w-98% border-2 border-green p-3 flex ">
          <div className=" h-[164px] w-[164px] bg-green">
            <img className=" h-full w-full bg-green" src="" alt="" />
          </div>
          <div>
            <p className="text-white">Playlist</p>
            <h1 className="text-white">No Jacket Required</h1>
            <p className="text-white">phil collins</p>
          </div>
        </div>

        <div className="h-20 w-full border-2 border-green"></div>
      </div>
    </div>
  );
}

export default AlbumTracks;
