import React from "react";
import {Movie} from "./Movie.jsx";

export function Movies({movies = []}) {
    return (
        <div className="movies">
            {movies.map((movie) => (
                <Movie key={movie.imdbID} movie={movie}/>
            ))}
        </div>
    );
}