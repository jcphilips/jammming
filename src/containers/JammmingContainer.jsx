import React from "react";
import { useState } from "react";
import SearchComponent from '../components/SearchComponent.jsx'

const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search'

export default function JammmingContainer() {

  const [ input, setInput ] = useState('');


  const onInputHandler = event => {
    setInput(event.target.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    if (event.target.length !== 0) {

    }
  }

  return (
    <>
      <SearchComponent input={ input } handleInput={ onInputHandler } handleSubmit={ onSubmitHandler } />
    </>
  )
}
