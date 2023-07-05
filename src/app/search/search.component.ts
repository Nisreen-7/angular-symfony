import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../entities';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service: MovieService) { }

  term: string = '';
  results: Movie[] = [];

  doSearch() {
    if (this.term.length < 2) {
      this.results = [];
    } else {
      this.service.search(this.term)
        .subscribe(data => this.results = data);
    }


  }
}
