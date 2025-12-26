import React from "react";
import {Movies} from "../components/Movies.jsx";
import {Preloader} from "../components/Preloader.jsx";
import {Search} from "../components/Search.jsx";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        this.searchMovies("matrix", "all");
    }

    searchMovies = (search, type = "all") => {
        this.setState({loading: true});

        const query = (search || "").trim();

        if (!query) {
            this.setState({movies: [], loading: false});
            return;
        }

        let url = `${API_URL}&s=${encodeURIComponent(query)}`;

        if (type && type !== "all") {
            url += `&type=${encodeURIComponent(type)}`; // movie | series
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    movies: data.Search || [],
                    loading: false,
                });
            })
            .catch(() => {
                this.setState({movies: [], loading: false});
            });
    };


    render() {
        const {movies, loading} = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>

                {loading ? <Preloader/> : <Movies movies={movies}/>}
            </main>
        );
    }
}
