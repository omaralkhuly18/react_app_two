import _ from 'lodash';
export function paginate(itemMovies, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(itemMovies).slice(startIndex).take(pageSize).value();
}
