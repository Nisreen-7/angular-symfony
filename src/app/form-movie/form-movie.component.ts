import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from '../entities';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent {

  constructor(private service: MovieService) { }

  movie: Movie = { title: '', resume: '', released: '', duration: 0 };


  @Output()
  added = new EventEmitter<Movie>();

  handleSubmit() {
    // console.log(this.movie);
    // this.service.add(this.movie)
    //   .subscribe(data => this.added.emit(data));

    // modifier le code pour appler le servise par le parent
    this.added.emit(this.movie);
  }

}
