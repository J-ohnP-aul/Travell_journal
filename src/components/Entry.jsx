function Entry(props){
  // console.log(props.entry)
  return (
    <div className="entry">
      <img className="entry-img" src={props.image} alt="location" />
      <div className="entry_content">
        <div className="location">
          <p>
            <img className="map-logo" src="https://cdn-icons-png.flaticon.com/128/447/447031.png" alt="" />
            <span className="location-name">{props.name}</span>
            <a href={props.google_maplink} target="_blank">
              view on google maps
            </a>
          </p>
          <h1>{props.site_name}</h1>
        </div>
        <p><span className="date">{props.date}</span></p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Entry
