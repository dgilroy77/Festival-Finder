class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      festivals: this.props.festivals
    }
  };

  getFestivals(query) {
    var options = {
      query: query
    };
  }

  handleFestivalSubmit(festState, festMonth, festGenre) {
    var festivals = this.state.festivals.slice();
    var output = [];
    console.log(festState);
    console.log(festivals[1].state);
    for(var i = 0; i < festivals.length; i++) {
      if(festivals[i].state === festState || festivals[i].month === festMonth) {
        output.push(festivals[i]);
      }
    }
    this.setState({
      festivals: output
    });
  }

  render() {
    return(
      <div>
        <Nav handleFestivalSubmit={this.handleFestivalSubmit.bind(this)}/>
        <br/>
        <FestivalList festivals={this.state.festivals} />
      </div>
    )
  }
}

ReactDOM.render(
  <App festivals={festivalData} />,
  document.getElementById('app')
);