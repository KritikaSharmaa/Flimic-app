const Table2 = (props) => {
  return (
    <>
      <table class="table table-dark table-striped mt-4 w-75 position-absolute top-50 start-50 translate-middle">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.filterMovies.map((el, index) => {
            return (
              <tr key={el._id}>
                <th scope="row">{el.title}</th>
                <td>{el.genre.name}</td>
                <td>{el.numberInStock}</td>
                <td>{el.dailyRentalRate}</td>
                <td
                  onClick={(e) => {
                    props.UpdateLikedMovies(el._id);
                  }}
                >
                  {el.liked === "true" ? (
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Table2;
