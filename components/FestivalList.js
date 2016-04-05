const FestivalList = ({festivals}) => {
  var festivalEntries = festivals.map((festival, i) =>
    <FestivalListEntry
        key={i}
        festival={festival}
    />
  );
  console.log(festivalEntries);
  return (
    <div>
    <div className="festival-list">
        {festivalEntries}
    </div>
    </div>
  );
};

window.FestivalList = FestivalList;