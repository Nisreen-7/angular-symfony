import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { FormMovieComponent } from './form-movie/form-movie.component';
import { FormsModule } from '@angular/forms';
import { ParametrizedExampleComponent } from './parametrized-example/parametrized-example.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieItemComponent,
    FormMovieComponent,
    ParametrizedExampleComponent,
    SingleMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
