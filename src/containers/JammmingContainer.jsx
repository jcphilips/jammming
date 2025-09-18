import React, { useEffect } from "react";
import { useState } from "react";
import SearchComponent from '../components/SearchComponent.jsx'
const ENDPOINT = 'https://api.spotify.com'

export default function JammmingContainer() {

  const [input, setInput] = useState('');
  const [accessToken, setAccessToken] = useState({});


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
    if (event.target.length !== 0) {

    }
  }

  // Retreive results from Spotify search
  const retrieveResults = async (input) => {
    const songResults = [];
    try {
      const response = await fetch(`${SEARCH_ENDPOINT}?q=${input}&type=track`);
      const resultsJSON = await response.json();
      for (let item in resultsJSON.tracks.items) {
        console.log(item);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <SearchComponent input={input} handleInput={onInputHandler} handleSubmit={onSubmitHandler} />
    </>
  )
}
