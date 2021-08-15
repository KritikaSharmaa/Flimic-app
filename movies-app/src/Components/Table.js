import React from "react";
import Pagination from "./Pagination";
import Purchased from "./Purchased";
import Search from "./Search";
/************       **************          ************** */
class Table extends React.Component {
  state = {
    NumberOfPages: 1,
    SearchValue: "",
  };

  updateCurrentPage = (PageNo) => {
    this.setState({ NumberOfPages: PageNo });
  };

  UpdateSearchValue = (value) => {
    this.setState({ SearchValue: value });
  };

  render() {
    let filteredArray = this.props.movies.filter((el) => {
      if (this.props.activeGenre === "All Genres") {
        return true;
      } else if (this.props.activeGenre === el.genre.name) {
        return true;
      }
    });

    filteredArray = filteredArray.filter((el) => {
      //--> to remove case sensitivity we convert both searched value and moviw title in lowercase while comparing ..we are not changing state here.
      let filterdElementToLower = el.title.toLowerCase();
      let SearcedVal = this.state.SearchValue;
      let SearchedElementToLower = SearcedVal.toLowerCase();
      return filterdElementToLower.includes(SearchedElementToLower);
    });

    let startIdx = (this.state.NumberOfPages - 1) * 4;
    let LastIdx = Math.min(this.state.NumberOfPages * 4, filteredArray.length);
    let SlicedArray = filteredArray.slice(startIdx, LastIdx);
    return (
      <>
        <Search
          movies={this.props.movies}
          UpdateSearchValue={this.UpdateSearchValue}
          SearchValue={this.SearchValue}
        />
        <table className="table mt-4 w-100">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {SlicedArray.map((movieObj, index) => {
              return (
                <tr key={movieObj._id}>
                  <th scope="row">{movieObj.title}</th>
                  <td>{movieObj.genre.name}</td>
                  <td>{movieObj.numberInStock}</td>
                  <td>{movieObj.dailyRentalRate}</td>
                  <td
                    onClick={(e) => {
                      this.props.UpdateLikedAndPurchsedMovies(
                        movieObj._id,
                        "liked"
                      );
                    }}
                  >
                    {movieObj.liked === "true" ? (
                      <span
                        class="material-icons-outlined Watchcol "
                        style={{ fontSize: "1.7rem" }}
                      >
                        bookmark
                      </span>
                    ) : (
                      <span
                        class="material-icons-outlined"
                        style={{ fontSize: "1.7rem" }}
                      >
                        bookmark_add
                      </span>
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      class={`${
                        movieObj.Rent === "true"
                          ? "transpBtn"
                          : "myBtn btn-warning"
                      }`}
                      onClick={() => {
                        this.props.UpdateLikedAndPurchsedMovies(
                          movieObj._id,
                          "Rent"
                        );
                      }}
                    >
                      {movieObj.Rent === "true" ? (
                        <span
                          class="material-icons-outlined"
                          style={{
                            color: "green",
                            fontSize: "2.2rem",
                          }}
                        >
                          task_alt
                        </span>
                      ) : (
                        "Rent"
                      )}
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.DeleteMovies(movieObj._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <Pagination
            movies={this.props.movies}
            filteredArray={filteredArray}
            updateCurrentPage={this.updateCurrentPage}
            NumberOfPages={this.state.NumberOfPages}
          />
        </nav>
      </>
    );
  }
}
export default Table;
