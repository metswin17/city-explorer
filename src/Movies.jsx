function Movie(props) {
  return (
    <div>
      <h3>{props.movie.title}</h3>

      <p>{props.movie.overview}</p>

      {props.movie.image_url && (
        <img
          className="img-fluid rounded"
          src={props.movie.image_url}
          alt={props.movie.title}
        />
      )}
    </div>
  );
}

function Movies(props) {
  return (
    <div className="card p-3 mt-3">
      <h2>Movies</h2>

      {props.movies.map((movie) => (
        <Movie
          key={movie.title}
          movie={movie}
        />
      ))}
    </div>
  );
}

export default Movies;