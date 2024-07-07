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
    <div className="flex flex-col w-full  bg-gradient-to-b from-[#1f1f1f] via-black to-[#121212] items-center">
      <div className="flex flex-col mt-8 ">
        <div className="mb-11">
          <div className="flex justify-between mb-1 items-center pl-4 pr-5">
            <h1 className="text-[22px] font-semibold text-white hover:underline cursor-pointer">
              <Link to="/popular-artists">Popular artists</Link>
            </h1>
            <p className="text-white/65 hover:underline cursor-pointer text-sm">
              <Link to="/popular-artists">Show all</Link>
            </p>
          </div>
          {/* <div className="flex items-center flex-wrap"> */}
          <div
            // className={`text-center grid xl:grid-cols-6 lg:grid-cols-5  md:grid-cols-3 max-lg:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-2  ml-3 max-md:grid-cols-2 `}
            className={`ml-3  gap-y-11  grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 `}
          >
            {/* <div
            className="  mx-2 gap-y-11 grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3
            sm:grid-cols-2 max-sm:grid-cols-2"
          > */}
            {/* lg:gap-x-12 xl:gap-x-0 max-lg:gap-x-12 */}
            {artistdata.map(({ img, name, id }) => (
              <div key={id} className="min-h-[250px]">
                <Artist
                  img={img}
                  name={name}
                  className="xl:w-[9.7rem] xl:h-[9.7rem] md:w-[10rem] md:h-[10rem] sm:h-[12rem] sm:w-[12rem] max-sm:w-[12rem] max-sm:h-[12rem] "
                  nameSize="text-[15px] leading-6 tracking-wide"
                  textSize="text-[13px]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-11">
          <div className="flex justify-between mb-1  items-center pl-4 pr-5">
            <h1 className="text-[22px] font-semibold text-white hover:underline cursor-pointer">
              <Link to="/popular-albums">Popular albums</Link>
            </h1>
            <p className="text-white/65 hover:underline cursor-pointer text-sm">
              <Link to="/popular-albums">Show all</Link>
            </p>
          </div>
          {/* <div className="flex mx-2 items-center flex-wrap mb-11 "> */}
          <div className="mx-2 gap-y-11  grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 ">
            {albumsData.map(({ img, movie, singerList }, index) => (
              <div key={index} className="min-h-[250px]">
                <Album
                  img={img}
                  movie={movie}
                  singerList={singerList}
                  className="lg:w-[9.7rem] lg:h-[9.7rem] md:w-[10rem] md:h-[10rem] sm:h-[11rem] sm:w-[11rem] max-sm:w-[11rem] max-sm:h-[11rem] "
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-11">
          <div className="flex justify-between mb-1  items-center pl-4 pr-5 ">
            <h1 className="text-[22px] font-semibold text-white hover:underline cursor-pointer">
              <Link to="/popular-radios">Popular radio</Link>
            </h1>
            <p className="text-white/65 hover:underline cursor-pointer text-sm">
              <Link to="/popular-radios">Show all</Link>
            </p>
          </div>
          {/* <div className="flex mx-2 items-center flex-wrap mb-11 "> */}
          <div className="mx-2 gap-y-11  grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 ">
            {radiosData.map(({ img, radioName, singers }, index) => (
              <div key={index} className="  min-h-[250px]">
                <Radio
                  img={img}
                  radioName={radioName}
                  singers={singers}
                  className="lg:w-[9.7rem] lg:h-[9.7rem] md:w-[10rem] md:h-[10rem] sm:h-[11rem] sm:w-[11rem] max-sm:w-[11rem] max-sm:h-[11rem] "
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-11">
          <div className=" mb-1 pl-4 pr-5 ">
            <h1 className="text-[22px] font-semibold text-white ">
              Featured Charts
            </h1>
          </div>
          {/* <div className="flex mx-2 items-center flex-wrap mb-11 "> */}
          <div className="mx-2 gap-y-11  grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2">
            {chartsData.map(({ img, name, text }, index) => (
              <div key={index} className="min-h-[250px]">
                <Chart
                  img={img}
                  name={name}
                  text={text}
                  className="lg:w-[9.7rem] lg:h-[9.7rem] md:w-[10rem] md:h-[10rem] sm:h-[11rem] sm:w-[11rem] max-sm:w-[11rem] max-sm:h-[11rem] "
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-11">
          <div className="flex justify-between mb-1  items-center pl-4 pr-5 ">
            <h1 className="text-[22px] font-semibold text-white hover:underline">
              <Link to="/Zzzzzzz">Zzzzzzz</Link>
            </h1>
            <p className="text-white/65 hover:underline cursor-pointer text-sm">
              <Link to="/Zzzzzzz">Show all</Link>
            </p>
          </div>
          {/* <div className="flex mx-2 items-center flex-wrap mb-11 "> */}
          <div className="mx-2 gap-y-11  grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2">
            {sleepImgData.map(({ img, name, text }, index) => (
              <div key={index} className="  min-h-[250px]">
                <Item
                  img={img}
                  name={name}
                  text={text}
                  className="lg:w-[9.7rem] lg:h-[9.7rem] md:w-[10rem] md:h-[10rem] sm:h-[11rem] sm:w-[11rem] max-sm:w-[11rem] max-sm:h-[11rem] "
                />
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="flex justify-between mb-1  items-center pl-4 pr-5 ">
            <h1 className="text-[22px] font-semibold text-white hover:underline">
              <Link to="/trending-episodes">Trending Episodes</Link>
            </h1>
            <p className="text-white/65 hover:underline cursor-pointer text-sm">
              <Link to="/trending-episodes">Show all</Link>
            </p>
          </div>
          {/* <div className="flex mx-2 items-center flex-wrap "> */}
          <div className=" mx-2 gap-y-11  grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2">
            {trendingEpisodes.map(({ img, name, text }, index) => (
              <div key={index} className=" min-h-[250px]">
                <Episode
                  img={img}
                  name={name}
                  text={text}
                  className="lg:w-[9.7rem] lg:h-[9.7rem] md:w-[10rem] md:h-[10rem] sm:h-[11rem] sm:w-[11rem] max-sm:w-[11rem] max-sm:h-[11rem] "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

//         <div className="mb-20">
//           <div className="flex justify-between mb-1 items-center pl-4 pr-5">
//             <h1 className="text-[22px] font-semibold text-white hover:underline cursor-pointer">
//               <Link to="/popular-albums">Popular albums</Link>
//             </h1>
//             <p className="text-white/65 hover:underline cursor-pointer text-sm">
//               <Link to="/popular-albums">Show all</Link>
//             </p>
//           </div>
//           <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
//             {albumsData.map(({ img, movie, singerList }, index) => (
//               <Album
//                 key={index}
//                 img={img}
//                 movie={movie}
//                 singerList={singerList}
//                 className="lg:w-[9.7rem] lg:h-[9.7rem] md:w-[11rem] md:h-[11rem] sm:w-[12rem] sm:h-[12rem]"
//               />
//             ))}
//           </div>
//         </div>
//         <div className="mb-20">
//           <div className="flex justify-between mb-1 items-center pl-4 pr-5">
//             <h1 className="text-[22px] font-semibold text-white hover:underline cursor-pointer">
//               <Link to="/popular-radios">Popular radio</Link>
//             </h1>
//             <p className="text-white/65 hover:underline cursor-pointer text-sm">
//               <Link to="/popular-radios">Show all</Link>
//             </p>
//           </div>
//           <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
//             {radiosData.map(({ img, radioName, singers }, index) => (
//               <Radio
//                 key={index}
//                 img={img}
//                 radioName={radioName}
//                 singers={singers}
//                 className="lg:w-[9.7rem] lg:h-[9.7rem] md:w-[11rem] md:h-[11rem] sm:w-[12rem] sm:h-[12rem]"
//               />
//             ))}
//           </div>
//         </div>
//         <div className="mb-20">
//           <div className="mb-1 pl-4 pr-5">
//             <h1 className="text-[22px] font-semibold text-white">
//               Featured Charts
//             </h1>
//           </div>
//           <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
//             {chartsData.map(({ img, name, text }, index) => (
//               <Chart
//                 key={index}
//                 img={img}
//                 name={name}
//                 text={text}
//                 className="lg:w-[9.7rem] lg:h-[9.7rem] md:w-[11rem] md:h-[11rem] sm:w-[12rem] sm:h-[12rem]"
//               />
//             ))}
//           </div>
//         </div>
//         <div className="mb-20">
//           <div className="flex justify-between mb-1 items-center pl-4 pr-5">
//             <h1 className="text-[22px] font-semibold text-white hover:underline cursor-pointer">
//               <Link to="/Zzzzzzz">Zzzzzzz</Link>
//             </h1>
//             <p className="text-white/65 hover:underline cursor-pointer text-sm">
//               <Link to="/Zzzzzzz">Show all</Link>
//             </p>
//           </div>
//           <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
//             {sleepImgData.map(({ img, name, text }, index) => (
//               <Item
//                 key={index}
//                 img={img}
//                 name={name}
//                 text={text}
//                 className="lg:w-[9.7rem] lg:h-[9.7rem] md:w-[11rem] md:h-[11rem] sm:w-[12rem] sm:h-[12rem]"
//               />
//             ))}
//           </div>
//         </div>
//         <div>
//           <div className="flex justify-between mb-1 items-center pl-4 pr-5">
//             <h1 className="text-[22px] font-semibold text-white hover:underline cursor-pointer">
//               <Link to="/trending-episodes">Trending Episodes</Link>
//             </h1>
//             <p className="text-white/65 hover:underline cursor-pointer text-sm">
//               <Link to="/trending-episodes">Show all</Link>
//             </p>
//           </div>
//           <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
//             {trendingEpisodes.map(({ img, name, text }, index) => (
//               <Episode
//                 key={index}
//                 img={img}
//                 name={name}
//                 text={text}
//                 className="lg:w-[9.7rem] lg:h-[9.7rem] md:w-[11rem] md:h-[11rem] sm:w-[12rem] sm:h-[12rem]"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
