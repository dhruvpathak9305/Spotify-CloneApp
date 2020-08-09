import React, { useEffect, useState } from 'react';
import Login from './Login'
import Player from './Player'
import './App.css';
import { getTokenFromUrl } from "./spotify"
// spotify-web-api-js is a wrapper over the spotify API that 
// lets us use the spotify API in easy way.
import SpotifyWebApi from "spotify-web-api-js";

import { DataLayerValue, useDataLayerValue } from "./DataLayer"

const spotify = new SpotifyWebApi();

function App() {

  // const [token, setToken] = useState(null);

  // To grab any value from data layer & dispatch to set any value to the datalayer.
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {

    //Grabs the token from the spotify login
    const hash = getTokenFromUrl();

    // To remove from screen for securuty reasons.
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      // setToken(_token);

      // Give the accesss token to spotify Api
      spotify.setAccessToken(_token);

      //Get the user account gives back promise
      spotify.getMe().then(user => {
        // console.log(user);
        dispatch({
          type: "SET_USER",
          user: user
        })
      })
      //Get the data from Spotify to Show Playlists
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXcISBsNJEHPfl').then(response=>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly:response
        })
      );

    }
    // console.log("I HAVE A TOKEN >>>>", token);


  }, []);

  console.log(user);
  console.log(token);

  return (
    //BEM
    <div className="app">
      {token ?
        <Player spotify={spotify} /> : <Login />
      }

    </div>
  );
}

export default App;
