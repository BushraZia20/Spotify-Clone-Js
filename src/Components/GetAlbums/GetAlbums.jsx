import React, { useEffect, useState } from "react";
import AlbumTracks from "./AlbumTracks";
import { Link } from "react-router-dom";

function GetAlbums() {
  const [albums, setAlbums] = useState([]);

  const fetchData = async () => {
    const url =
      "https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=100&numberOfTopResults=50";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "386b5550f1msh5f9333da9683b9cp125a70jsna2e656067c5b",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setAlbums(result.albums.items || []);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="albums h-66vh m-[14px] shadow-lg w-97% p-4 overflow-scroll ">
      <div className="grid grid-cols-4 gap-3 p-3 ">
        {albums.map((album, index) => (
          <Link
            to="/tracks"
            key={index}
            className="albums_card h-[250px] w-[175px] bg-181818 p-3 overflow-hidden"
          >
            <div className="h-[130px] w-[147px]">
              <img
                className="h-full w-full "
                src={album.data.coverArt.sources[0].url}
                alt=""
              />
            </div>
            <h3 className="pb-2 text-white font-semibold">{album.data.name}</h3>
            <p className=" text-white ">
              {album.data.artists.items[0].profile.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GetAlbums;
