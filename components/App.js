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

  render() {
    return(
      <div>
        <Nav />
        <FestivalList festivals={this.state.festivals} />
      </div>
    )
  }
}

ReactDOM.render(
  <App festivals={festivalData} />,
  document.getElementById('app')
);