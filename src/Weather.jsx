function WeatherDay(props) {
  return (
    <div>
      <p>{props.day.date}: {props.day.description}</p>
    </div>
  );
}

function Weather(props) {
  return (
    <div className="card p-3 mt-3">
      <h2>Weather Forecast</h2>

      {props.weather.map((day, index) => (
        <WeatherDay
          key={index}
          day={day}
        />
      ))}
    </div>
  );
}

export default Weather;