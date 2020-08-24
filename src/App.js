import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
//Spotify web api to connect spotify with react
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();

    //hide token from url for security
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      //Set token to spotify const to login
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("-->", user);
      });
    }
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
