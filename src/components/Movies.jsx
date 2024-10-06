import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'; // خدمة جلب الأفلام
import Like from './common/liked'; // مكوّن الإعجاب
import Pagination from './common/Pagination'; // مكوّن التصفح
import { paginate } from '../utils/paginate'; // دالة التقسيم لعرض الأفلام في صفحات
import SidPar from './common/sidpar'; // المكوّن الجانبي لعرض التصنيفات
import { getGenres } from '../services/fakeGenreService'; // خدمة جلب التصنيفات

class ComponentMovies extends Component {
  state = {
    movies: getMovies(), // جلب الأفلام
    itemsFun: [{ name: 'All Movies', _id: '' }, ...getGenres()], // إضافة "All Movies"
    pageSize: 3,
    currentPage: 1,
    selectedItems: null
  };

  // تعيين العنصر الأول كـ "active" عند تحميل الصفحة لأول مرة
  componentDidMount() {
    const firstItem = this.state.itemsFun[0]; // العنصر الأول في التصنيفات
    this.setState({ selectedItems: firstItem });
  }

  // حذف الفيلم
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  // إعادة تحميل الصفحة
  handleReloadPage = () => {
    window.location.reload();
  };

  // التعامل مع الإعجاب
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  // تغيير الصفحة
  handleChangePage = (page) => {
    this.setState({ currentPage: page });
  };

  // اختيار تصنيف
  handelItemSidPar = (itemSid) => {
    this.setState({ selectedItems: itemSid, currentPage: 1 });
  };

  render() {
    const { length: countMovies } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies, selectedItems } = this.state;

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

    // تصفية الأفلام بناءً على التصنيف المختار، أو عرض كل الأفلام إذا تم اختيار "All Movies"
    const filteredMovies = selectedItems && selectedItems._id
      ? allMovies.filter((m) => m.genre._id === selectedItems._id)
      : allMovies;

    // تقسيم الأفلام بناءً على الصفحة الحالية وحجم الصفحة
    const movies = paginate(filteredMovies, currentPage, pageSize);

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
          <h4 className="mg_container">Showing {filteredMovies.length} movies in the DataBase</h4>
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
            itemCount={filteredMovies.length}
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
