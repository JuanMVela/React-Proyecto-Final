import React from "react";
import { useCartContext } from "../../CartContex";
import { Link } from "react-router-dom";

const CardWidget = () => {
  const { cart } = useCartContext();

  const quantity = cart.map((product) => {
    return product.quantity;
  });

  const total = quantity.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  return (
    <Link to={`/cart`}>
      <div>
        {total > 0 ? (
          <div className=" flex w-16 h-16 mt-4 px-2 py-2 ">
            <i className="bi bi-cart3"></i>
            <p className="text-xl block pl-1 ml-1 lg:inline-block lg:mt-0 text-gray-50 hover:text-black">
              {total}
            </p>
          </div>
        ) : (
          <div>
            <i className="bi bi-cart3"></i>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CardWidget;
