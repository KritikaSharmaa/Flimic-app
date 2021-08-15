const Pagination = (props) => {
  let TOP = Math.ceil(props.filteredArray.length / 3); //total of no pages
  // console.log(SlicedArray);
  let arr = [];
  for (let i = 1; i <= TOP; i++) {
    arr.push(i);
  }
  return (
    <>
      <ul className="pagination">
        {arr.map((el) => {
          return (
            <li
              key={el}
              className={`page-item ${
                props.NumberOfPages === el ? "active" : ""
              }`}
              onClick={() => {
                props.updateCurrentPage(el);
              }}
            >
              <div className="page-link">{el}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Pagination;
