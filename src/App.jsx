import Header from "./components/Header";
import Footer from "./components/Footer";
import Song from "./components/Song";
import {
  SpeakerWaveIcon,
  MusicalNoteIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";

function App() {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Fred%20Again&api_key=ea1e74203ea912778b6452f9b7cbf046&format=json"
        );

        const data = await response.json();
        setTopTracks(data.toptracks.track);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header></Header>
      <section className="py-20 text-center flex justify-center flex-wrap">
        <div className="w-full">
          <h2 className="text-5xl font-semibold border-b inline border-b-4 border-[#19b26b]">
            What's on Spotify
          </h2>
        </div>
        <div className="mt-6 py-10 w-4/5 md:w-2/3 px-4 md:grid md:grid-cols-3 md:gap-8">
          <div>
            <SpeakerWaveIcon className="mx-auto h-20"></SpeakerWaveIcon>
            <div className="mt-2">
              <h3 className="text-2xl font-semibold text-[#19b26b]">
                Million of Songs
              </h3>
              <p className="text-lg">There are millions of songs on Spotify</p>
            </div>
          </div>
          <div>
            <MusicalNoteIcon className="mx-auto h-20"></MusicalNoteIcon>
            <div className="mt-2">
              <h3 className="text-2xl font-semibold text-[#19b26b]">
                HD Music
              </h3>
              <p className="text-lg">
                Listen to music as if you were listening live
              </p>
            </div>
          </div>
          <div>
            <DevicePhoneMobileIcon className="mx-auto h-20"></DevicePhoneMobileIcon>
            <div className="mt-2">
              <h3 className="text-2xl font-semibold text-[#19b26b]">
                Stream Everywhere
              </h3>
              <p className="text-lg">
                Stream music on your smarthphone, tablet or computer
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center flex-wrap">
        <div className="mx-4 md:w-2/3 md:grid md:grid-cols-2 md:items-center py-12 px-5 md:px-20 rounded-xl bg-[#19b26b]">
          <div>
            <div className="inline border-b-2 border-b-white pb-2">
              <h3 className="text-4xl text-white inline">
                hi guys - Fred again
              </h3>
              <div className="mt-8">
                <h4 className="text-2xl text-white">Search</h4>
                <p className="text-lg text-slate-100">
                  Know what you want to listen to?
                  <br />
                  Just search and hit play.
                </p>
              </div>
              <div className="mt-4">
                <h4 className="text-2xl text-white">Browse</h4>
                <p className="text-lg text-slate-100">
                  Check out the latest charts,
                  <br /> brand new releases and great <br />
                  playlists for right now.
                </p>
              </div>
              <div className="mt-4">
                <h4 className="text-2xl text-white">Discover</h4>
                <p className="text-lg text-slate-100">
                  Enjoy new music every Monday <br />
                  with your own personal playlist. <br />
                  Or sit back and enjoy Radio.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <img
              className="rounded"
              src="/fred-again.webp"
              alt="Fred again - hi guys"
            />
          </div>
        </div>
      </section>
      <section className="md:w-2/3 mx-auto py-20">
        <h2 className="text-4xl text-center">Fred Again Songs<span className="text-[#19b26b]">.</span></h2>
        <div className="md:grid md:grid-cols-3 mt-8">
        {topTracks.map((track, index) => (
            <Song index={index} name={track.name} url={track.url} playcount={track.playcount} listeners={track.listeners}></Song>
        ))}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
