import React from "react";

export default function Search(props) {

  const { input, handleInput, handleSubmit } = props;

  return (
   <form onSubmit={ handleSubmit }>
      <input type="text" id="search" name="search" value={input} onChange={handleInput} />
      <input type="submit" name="submit" value="Search" />
   </form>
  )
}
