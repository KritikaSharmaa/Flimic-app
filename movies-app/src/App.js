import React from "react";
import NavBar from "./Components/NavBar";
import List from "./Components/List";
import Table from "./Components/Table";
import Login from "./Components/Login";
import WatchList from "./Components/WatchList";
import Purchased from "./Components/Purchased";
import "./App.css";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],
    genres: [],
    activeGenre: "All Genres",
  };
  componentDidMount() {
    let f = async () => {
      let resposeMovies = await fetch("/movies");
      let resposeGenre = await fetch("/genre");
      let jsonMoviesData = await resposeMovies.json();
      let jsonGenreData = await resposeGenre.json();
      this.setState({ movies: jsonMoviesData, genres: jsonGenreData });
    };
    f();
  }

  UpdateSelectedList = (val) => {
    this.setState({ activeGenre: val });
  };

  UpdateLikedAndPurchsedMovies = (id, checkProp) => {
    // console.log(index);
    let copiedmoviesArray = this.state.movies;
    let index = copiedmoviesArray.findIndex((el) => el._id === id);
    if (
      copiedmoviesArray[index][checkProp] === undefined ||
      copiedmoviesArray[index][checkProp] === "false"
    )
      copiedmoviesArray[index][checkProp] = "true";
    else copiedmoviesArray[index][checkProp] = "false";
    this.setState({ movies: copiedmoviesArray });
  };

  DeleteMovies = (id) => {
    let updatedMovieObject = this.state.movies.filter((el) => el._id !== id);
    this.setState({ movies: updatedMovieObject });
  };

  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/WatchList">
            <WatchList
              movies={this.state.movies}
              UpdateLikedMovies={this.UpdateLikedMovies}
            />
          </Route>
          <Route exact path="/Purchased">
            <Purchased
              movies={this.state.movies}
              UpdateLikedAndPurchsedMovies={this.UpdateLikedAndPurchsedMovies}
            />
          </Route>
          <Route path="/">
            <div className="row w-100">
              <div className="col-3 p-5">
                <List
                  genres={this.state.genres}
                  activeGenre={this.state.activeGenre}
                  UpdateSelectedList={this.UpdateSelectedList}
                />
              </div>
              <div className="col-8">
                <Table
                  movies={this.state.movies}
                  activeGenre={this.state.activeGenre}
                  UpdateLikedAndPurchsedMovies={
                    this.UpdateLikedAndPurchsedMovies
                  }
                  DeleteMovies={this.DeleteMovies}
                />
              </div>
            </div>
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
