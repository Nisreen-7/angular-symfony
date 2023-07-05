import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './entities';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  fetchAll() {
    return this.http.get<Movie[]>('http://localhost:8000/api/movie')
  }

  add(movie: Movie) {
    return this.http.post<Movie>('http://localhost:8000/api/movie', movie)

  }

  delete(id: number) {
    return this.http.delete<void>('http://localhost:8000/api/movie/' + id)
  }

  fetchOne(id: any) {
    return this.http.get<Movie>('http://localhost:8000/api/movie/' + id)
  }

  update(movie: Movie) {
    return this.http.patch<Movie>('http://localhost:8000/api/movie/' + movie.id, movie)

  }
  search(term: string) {
    return this.http.get<Movie[]>('http://localhost:8000/api/movie/search/' + term)

  }
}
