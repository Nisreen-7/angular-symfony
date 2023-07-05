import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../entities';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {


  @Output()
  delete = new EventEmitter<Movie>();


  @Input({ required: true })
  movie: Movie;
  buttonPressed() {
    this.delete.emit(this.movie);
  }

}


