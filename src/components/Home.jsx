import React from "react";
import {
  artits,
  assets,
  episodeData,
  featuredCharts,
  popularAlbums,
  popularRadios,
  sleepImages,
} from "../assets/assets";
import Artist from "./Popular Artists/Artist";
import { Link } from "react-router-dom";
import Album from "./Popular Albums/Album";
import Radio from "./Popular Radios/Radio";
import Chart from "./Featured Charts/Chart";
import Item from "./Zzzzzzz/Item";
import Episode from "./Trending Episodes/Episode";

const Home = () => {
  const artistdata = artits.slice(0, 6);
  const albumsData = popularAlbums.slice(0, 6);
  const radiosData = popularRadios.slice(0, 6);
  const chartsData = featuredCharts.slice(0, 6);
  const sleepImgData = sleepImages.slice(0, 6);
  const trendingEpisodes = episodeData.slice(0, 6);
  return (
    <div className="flex flex-col w-full pt-4 bg-gradient-to-b from-[#1f1f1f] via-black to-[#121212] ">
      <div className="flex flex-col mt-20 ">
        <div className="mb-11">
          <div className="flex justify-between mb-1 items-center pl-5 pr-3">
            <h1 className="text-[22px] font-semibold text-white hover:underline cursor-pointer">
              <Link to="/popular-artists">Popular artists</Link>
            </h1>
            <p className="text-white/65 hover:underline cursor-pointer text-sm">
              <Link to="/popular-artists">Show all</Link>
            </p>
          </div>
          <div className="flex mx-2 items-center">
            {artistdata.map(({ img, name, id }) => (
              <div key={id} className="">
                <Artist
                  img={img}
                  name={name}
                  className="w-[9.7rem] h-[9.7rem] "
                  nameSize="text-[15px] leading-6 tracking-wide"
                  textSize="text-[13px]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-11">
          <div className="flex justify-between mb-1  items-center pl-5 pr-3">
            <h1 className="text-[22px] font-semibold text-white hover:underline cursor-pointer">
              <Link to="/popular-artists">Popular albums</Link>
            </h1>
            <p className="text-white/65 hover:underline cursor-pointer text-sm">
              <Link to="/popular-albums">Show all</Link>
            </p>
          </div>
          <div className="flex mx-2 items-center flex-wrap mb-11 ">
            {albumsData.map(({ img, movie, singerList }, index) => (
              <div key={index} className=" size-44">
                <Album img={img} movie={movie} singerList={singerList} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-11">
          <div className="flex justify-between mb-1  items-center pl-5 pr-3 ">
            <h1 className="text-[22px] font-semibold text-white hover:underline cursor-pointer">
              <Link to="/popular-radios">Popular radio</Link>
            </h1>
            <p className="text-white/65 hover:underline cursor-pointer text-sm">
              <Link to="/popular-radios">Show all</Link>
            </p>
          </div>
          <div className="flex mx-2 items-center flex-wrap mb-11 ">
            {radiosData.map(({ img, radioName, singers }, index) => (
              <div key={index} className=" size-44">
                <Radio img={img} radioName={radioName} singers={singers} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-11">
          <div className=" mb-1   pl-5 pr-3 ">
            <h1 className="text-[22px] font-semibold text-white ">
              Featured Charts
            </h1>
          </div>
          <div className="flex mx-2 items-center flex-wrap mb-11 ">
            {chartsData.map(({ img, name, text }, index) => (
              <div key={index} className=" size-44">
                <Chart img={img} name={name} text={text} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-11">
          <div className="flex justify-between mb-1  items-center pl-5 pr-3 ">
            <h1 className="text-[22px] font-semibold text-white hover:underline">
              <Link to="/Zzzzzzz">Zzzzzzz</Link>
            </h1>
            <p className="text-white/65 hover:underline cursor-pointer text-sm">
              <Link to="/Zzzzzzz">Show all</Link>
            </p>
          </div>
          <div className="flex mx-2 items-center flex-wrap mb-11 ">
            {sleepImgData.map(({ img, name, text }, index) => (
              <div key={index} className=" size-44">
                <Item img={img} name={name} text={text} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-11">
          <div className="flex justify-between mb-1  items-center pl-5 pr-3 ">
            <h1 className="text-[22px] font-semibold text-white hover:underline">
              <Link to="/trending-episodes">Trending Episodes</Link>
            </h1>
            <p className="text-white/65 hover:underline cursor-pointer text-sm">
              <Link to="/trending-episodes">Show all</Link>
            </p>
          </div>
          <div className="flex mx-2 items-center flex-wrap mb-11 ">
            {trendingEpisodes.map(({ img, name, text }, index) => (
              <div key={index} className=" size-44">
                <Episode img={img} name={name} text={text} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
