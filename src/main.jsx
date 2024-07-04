import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import PopularArtists from "./components/Popular Artists/PopularArtists.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import Home from "./components/Home.jsx";
import PopularAlbums from "./components/Popular Albums/PopularAlbums.jsx";
import PopularRadios from "./components/Popular Radios/PopularRadios.jsx";
import FeaturedCharts from "./components/Featured Charts/FeaturedChart.jsx";
import Zzzzzzz from "./components/Zzzzzzz/Zzzzzzz.jsx";
import TrendingEpisodes from "./components/Trending Episodes/TrendingEpisodes.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="popular-artists" element={<PopularArtists />} />
        <Route path="popular-albums" element={<PopularAlbums />} />
        <Route path="popular-radios" element={<PopularRadios />} />
        <Route path="featured-charts" element={<FeaturedCharts />} />
        <Route path="Zzzzzzz" element={<Zzzzzzz />} />
        <Route path="trending-episodes" element={<TrendingEpisodes />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
