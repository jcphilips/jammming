import styles from './Track.module.css';

export default function Track(props) {
  const { trackTitle, artist, album, albumArt, duration, isRemoval, onAddOrRemove} = props;

  return (
    <div className={styles.track}>
      <img src={albumArt} alt={album} className={styles.albumArt} />
      <div className={styles.trackDetails}>
        <span className={styles.songTitle}>{trackTitle}</span>
        <span className={styles.artist}>{artist}</span>
        <span className={styles.album}>{album}</span>
        <span className="duration">{duration}</span>
      </div>
      <button className={styles.playlistButton} onClick={onAddOrRemove}>{isRemoval ? '-' : '+'}</button>
    </div>
  )
}
