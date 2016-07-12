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
      locationState: e.target.value
    });
  }

  handleMonthInputChange(e) {
    this.setState({
      month: e.target.value
    });
  }

  handleGenreInputChange(e) {
    this.setState({
      musicGenre: e.target.value
    });
  }

  festivalSubmit(e) {
    e.preventDefault();
    this.props.handleFestivalSubmit.call(null, this.state.locationState, this.state.month, this.state.musicGenre);
    this.setState({
      locationState: '',
      month: '',
      musicGenre: ''
    });
  }

  render() {
    return (
      <nav className="navbar">
        <form className="findFestival">
          <span className="inputs">State:</span> <input type="text" value={this.state.locationState} onChange={this.handleStateInputChange.bind(this)} name="us-state"></input>
          <span>     </span>
          <span className="inputs">Month:</span> <input type="text" value={this.state.month} onChange={this.handleMonthInputChange.bind(this)} name="month"></input>
          <span>     </span>
          <span className="inputs">Genre:</span> <input type="text" value={this.state.musicGenre} onChange={this.handleGenreInputChange.bind(this)} name="music-genre"></input>
          <input type='submit' value='Search' onClick={this.festivalSubmit.bind(this)}></input>
        </form>
      </nav>
    );
  }
}

window.Nav = Nav;

