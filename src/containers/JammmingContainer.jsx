import React, { useEffect } from "react";
import { useState } from "react";
import SearchComponent from '../components/SearchComponent.jsx'
import Track from "../components/Track.jsx";
const ENDPOINT = 'https://api.spotify.com'

export default function JammmingContainer() {

  const [input, setInput] = useState('');
  const [accessToken, setAccessToken] = useState({});
  const [songResults, setSongResults] = useState([]);


  useEffect(() => {

    // function to fetch and set access token
    const fetchData = async () => {
      // get access token from spotify api
      // TODO: Research optimal methods for storing and dealing with tokens
      const response = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}&client_secret=${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`
      })

      const token = await response.json();
      setAccessToken(token);
    }

    fetchData();
  }, []);

  const onInputHandler = event => {
    setInput(event.target.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    if (input.length !== 0) {
      const cleaned = input.replaceAll(' ', '+');
      retrieveResults(cleaned);
    }
  }

  // Retreive results from Spotify search
  const retrieveResults = async (input) => {
    try {
      const response = await fetch(`${ENDPOINT}/v1/search?q=${input}&type=track`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken.access_token}`
        }
      });
      const resultsJSON = await response.json();
      const itemResults = resultsJSON.tracks.items;
      const newSongResults = itemResults.map(track => ({
        name: track.name,
        artist: track.artist[0].name,
        album: track.album.name,
        key: track.id,
        albumArt: track.album.images[0].url
      }));

      setSongResults(newSongResults);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <SearchComponent input={input} handleInput={onInputHandler} handleSubmit={onSubmitHandler} />
      {songResults.map(song => <Track key={song.id} trackTitle={song.name} album={song.album} albumArt={song.albumArt} artist={song.artist} />)}
    </>
  )
}
