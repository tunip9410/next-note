import Link from "next/link";

async function App() {
    const movie = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies").then((response) => response.json())

    return (
        <div>
            <h1>Next movies</h1>
            {movie.map((e :any, i :number) => (
                <p>
                    <Link href={`/movies/${movie[i].id}`} key={i}>{e.title}</Link>
                </p>
            ))}
        </div>
    )
}

export default App
