function Song(props) {
  return (
    <>
      <a href={props.url} target="_blank">
        <div className="py-4 px-6 shadow m-3 rounded">
          <h4 className="text-xl">{props.name}</h4>
          <p>Play Count: {props.playcount}</p>
          <p>Listeners: {props.listeners}</p>
        </div>
      </a>
    </>
  );
}

export default Song;
