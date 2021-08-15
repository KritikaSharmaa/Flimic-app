const Search = (props) => {
  return (
    <>
      <p className="mt-4 totalMovies">
        Showing {props.movies.length} movies from the database
      </p>
      <button className="btnNew">New</button>
      <div>
        <input
          type="text"
          className="InputBox"
          placeholder="Search"
          value={props.SearchValue}
          onChange={(e) => {
            props.UpdateSearchValue(e.currentTarget.value);
          }}
        ></input>
      </div>
    </>
  );
};
export default Search;
