var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var Error = require('Error');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var self = this;
    this.setState({
      isLoading: true,
      location: undefined,
      temp: undefined,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
        self.setState({
          location: location,
          temp: temp,
          isLoading:false
        });
      }, function (errorMessage){
        self.setState({
          isLoading:false,
          temp:null,
          location:null,
          errorMessage:errorMessage.message
        });

      }
    );

  },
  componentDidMount: function () {
    var location = this.props.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = "#/";
    }
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = "#/";
    }
  },
  render: function() {

    var {temp, location, isLoading, errorMessage} = this.state;

    function renderError () {
      if(typeof errorMessage === 'string') {
        return (
            <Error message={errorMessage}/>
        );
      }
    }

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
