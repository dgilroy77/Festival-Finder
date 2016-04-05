const FestivalList = ({festivals}) => {
  var festivalEntries = festivals.map((festival, i) =>
    <FestivalListEntry
        key={i}
        festival={festival}
    />
  );
  return (
    <div className="container">
    <div className="festival-list">
        {festivalEntries}
    </div>
    </div>
  );
};

window.FestivalList = FestivalList;