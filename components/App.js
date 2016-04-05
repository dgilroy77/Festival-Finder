class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      festivals: this.props.festivals,
      output: this.props.festivals
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
    for(var i = 0; i < festivals.length; i++) {
      if (festState === festivals[i].state) {
        if (festMonth === festivals[i].month) {
          if (festivals[i].genres.indexOf(festGenre) !== -1) {
            output.push(festivals[i]);
          } else if (festGenre === '') {
            output.push(festivals[i]);
          }
        } else if (festMonth === '') {
          if (festivals[i].genres.indexOf(festGenre) !== -1) {
            output.push(festivals[i]);
          } else if (festGenre === '') {
            output.push(festivals[i]);
          }
        }
      } else if (festState === '') {
        if (festMonth === festivals[i].month) {
          if (festivals[i].genres.indexOf(festGenre) !== -1) {
            output.push(festivals[i]);
          } else if (festGenre === '') {
            output.push(festivals[i]);
          }
        } else if (festMonth === '') {
          if (festivals[i].genres.indexOf(festGenre) !== -1) {
            output.push(festivals[i]);
          }
        }
      }
    }

    this.setState({
      output: output
    });
  }

  render() {
    return(
      <div>
        <Nav handleFestivalSubmit={this.handleFestivalSubmit.bind(this)}/>
        <br/>
        <FestivalList festivals={this.state.output} />
      </div>
    )
  }
}

ReactDOM.render(
  <App festivals={festivalData} />,
  document.getElementById('app')
);