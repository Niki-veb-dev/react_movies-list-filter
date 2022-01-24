/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    query: '',
  };

  handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const key = name as keyof State;

    this.setState({ [key]: value });
  };

  render() {
    const { query } = this.state;
    const visibleMovies: Movie[] = [...moviesFromServer].filter(movie => (
      movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      || movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    ));

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  name="query"
                  placeholder="Type search word"
                  value={query}
                  onChange={this.handleOnChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}