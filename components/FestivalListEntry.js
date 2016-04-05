const FestivalListEntry = ({festival}) => (
    <div className="festival-list-entry">
        <span className="festival-details">{festival.name} |</span>  
        <a href='festival.website'> {festival.website}</a>  
        <span></span>
    </div>
);

window.FestivalListEntry = FestivalListEntry;