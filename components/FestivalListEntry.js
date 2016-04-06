const FestivalListEntry = ({festival}) => (
  <div className="container">
    <div className="festival-list-entry">
      <span className="festival-details">{festival.name} </span>  
      <a href={festival.website}>| {festival.website}</a>  
      <br/>
      <span className="month">{festival.month} -- </span> 
      <span>   </span>
      <span className="location">{festival.city}, {festival.state}</span>
      <hr/>
    </div>
  </div>
);

window.FestivalListEntry = FestivalListEntry;