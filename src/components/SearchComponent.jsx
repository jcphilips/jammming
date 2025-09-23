import styles from "./SearchComponent.module.css"

export default function Search(props) {

  const { input, handleInput, handleSubmit } = props;

  return (
   <form onSubmit={ handleSubmit } className={styles.searchBar}>
      <input type="text" className={styles.searchField} name="search" value={input} onChange={handleInput} />
      <input type="submit" name="submit" value="Search" className={styles.searchButton} />
   </form>
  )
}
