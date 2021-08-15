import Table2 from "./Table2";
const WatchList = (props) => {
  let filterMovies = props.movies.filter((el) => {
    return el.liked === "true";
  });
  return (
    <>
      <Table2 filterMovies={filterMovies} />
    </>
  );
};
export default WatchList;
