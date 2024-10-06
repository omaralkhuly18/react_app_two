import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/liked';
import Pagination from './common/Pagination';
import { paginate } from '../utils/paginate';
import SidPar from './common/sidPar';
import { getGenres } from '../services/fakeGenreService';

class ComponentMovies extends Component {
  state = {
    movies: getMovies(),
    itemsFun: getGenres(),
    pageSize: 3,
    currentPage: 1,
    selectedItems: null // عنصر التصنيف المحدد
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
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

  handelItemSidPar = (itemSid) => {
    this.setState({ selectedItems: itemSid });
  };

  render() {
    const { length: countMovies } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    if (countMovies === 0) {
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
      <div className="row">
        <div className="col-3">
          <SidPar
            itemSidPar={this.state.itemsFun}
            onItemSidPar={this.handelItemSidPar}
            selectedItems={this.state.selectedItems}
          />
        </div>

        <div className="col">
          <h4 className="mg_container">Showing {countMovies} movies in the DataBase</h4>
          <div className="table-responsive">
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
                {movies.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-danger btn-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            itemCount={countMovies}
            pageSize={pageSize}
            currentPage={currentPage}
            onChangePage={this.handleChangePage}
          />
        </div>
      </div>
    );
  }
}

export default ComponentMovies;