import React from "react";
import Search from "../search";

function Navbar(props) {
  return (
    <div className=" border-solid border-2 ">
      <div className="w-3/4 flex justify-between m-auto p-5 items-center">
        <div>
          <h1>Shop</h1>
        </div>
        <div className="flex content-center items-center ">
          <div>
            <Search />
          </div>
          <div className="ml-2">Sepetim</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
