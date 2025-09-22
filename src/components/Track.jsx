export default function Track(props) {
  const { trackTitle, artist, album, albumArt, duration } = props;

  return (
    <div className="track">
      <img src={ albumArt } alt={ album } />
      <span className="songtitle">{ trackTitle }</span>
      <span className="artist">{ artist }</span>
      <span className="album">{ album }</span>
      <span className="duration">{ duration }</span>
    </div>
  )
}
