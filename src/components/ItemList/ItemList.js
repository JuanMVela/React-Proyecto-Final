import React from "react";
import Item from "../Item/Item";

//Link react-router-dom
import { Link } from "react-router-dom";


const ItemList = ({ game }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {game.map((items, id) => {
        return (
          <Link to={`/detail/${items.id}`}>
            <div className="p-3">
              
              <Item key={id} data={items} />             
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ItemList;
