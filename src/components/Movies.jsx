import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from "./common/liked";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate"; 

class ComponentMovies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    };

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };

    handleReloadPage = () => {
        window.location.reload();
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };

    handleChangePage = (page) => {
        this.setState({ currentPage: page });
    };

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;

        if (count === 0) {
            return (
                <div className="react_active">
                    <h4 className="mg_empty">No Movies in DataBase</h4>
                    <button className="btn btn-danger btn-md" onClick={this.handleReloadPage}>
                        Restart
                    </button>
                </div>
            );
        }

        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <React.Fragment>
                <div className="table-responsive">
                    <h4 className="mg_container">Showing {count} movies in the DataBase</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(movie => (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)} /></td>
                                    <td>
                                        <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-md">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination
                    itemCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onChangePage={this.handleChangePage}
                />
            </React.Fragment>
        );
    }
}

export default ComponentMovies;
