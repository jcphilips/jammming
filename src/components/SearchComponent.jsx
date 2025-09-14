import React from "react";

export default function Search(props) {

  const { search, handleSearch, handleSubmit } = props;

  return (
   <form onSubmit={ handleSubmit }>
      <input type="text" id="search" name="search" value={search} onChange={handleSearch} />
      <input type="submit" name="submit" value="Search" />
   </form>
  )
}
