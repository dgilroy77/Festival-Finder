class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationState: '',
      month: '',
      musicGenre: ''
    };
  }

  handleStateInputChange(e) {
    this.setState({
      value: e.target.locationState
    });
  }
  handleMonthInputChange(e) {
    console.log(e.target.value)
    this.setState({
      value: e.target.month
    });
  }

  handleGenreInputChange(e) {
    this.setState({
      value: e.target.musicGenre
    });
  }

  render() {
    return (
      <nav className="navbar">
        <form className="findFestival">
          State: <input type="text" value={this.state.value} onChange={this.handleStateInputChange.bind(this)} name="us-state"></input>
          <span>     </span>
          Month: <input type="text" value={this.state.value} onChange={this.handleMonthInputChange.bind(this)} name="month"></input>
          <span>     </span>
          Genre: <input type="text" value={this.state.value} onChange={this.handleGenreInputChange.bind(this)} name="music-genre"></input>
        </form>
      </nav>
    );
  }
}

window.Nav = Nav;

