import Table2 from "./Table2";

const Purchased = (props) => {
  let filterMovies = props.movies.filter((el) => {
    return el.Rent === "true";
  });
  console.log(filterMovies);
  return (
    <>
      <Table2 filterMovies={filterMovies} />
    </>
  );
};
export default Purchased;
