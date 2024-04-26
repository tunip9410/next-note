async function Movie({params: {id}}) {
    const movie = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`).then(res => res.json())

    return <h1>Movie {movie.title}</h1>
}

export default Movie
