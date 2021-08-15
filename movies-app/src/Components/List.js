import React from "react";

class List extends React.Component {
  //   state = {
  //     activeGenre: "All Genres",
  //   };
  //--> phle meine ek class component banaya kyuk mujhe state chaiye thi but mujhe is activeGenre state ki value sibling component mei bhi bhezni hai taki jab bhi mein genre change kru movie update hojaye..indirect way use krenge-->***********************[STATE LIFT UP]*********************    function ko parent m bna kar usme data bhezenge and state ko parent comp. m bnadenge tali uske sare child access kr paye..

  //-->active bootstrap ki bani bnai class hai
  render() {
    return (
      <>
        <ul className="list-group">
          <li
            className={`list-group-item ${
              this.props.activeGenre === "All Genres" ? "active" : ""
            }`}
            onClick={() => {
              this.props.UpdateSelectedList("All Genres");
            }}
          >
            All Genres
          </li>
          {/**Yh loop utni bar chelga jitni bar hmara data update hoga*/}
          {this.props.genres.map((el) => {
            return (
              <li
                key={el._id}
                className={`list-group-item ${
                  this.props.activeGenre === el.name ? "active" : ""
                }`}
                onClick={(e) => {
                  this.props.UpdateSelectedList(e.currentTarget.innerText);
                }}
              >
                {el.name}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
export default List;
