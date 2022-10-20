import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContex";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data, stock }) => {
  const { addProduct } = useCartContext();

  const [buy, setBuy] = useState(false);

  const handleOnAdd = (quantity) => {   
    setBuy(true);
    addProduct(data, quantity);
  };

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={data.img}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 class="text-gray-700 font-bold text-2xl mb-3 w-96 hover:text-gray-900 hover:cursor-pointer">
              {data.title}
            </h1>
            <div className="flex mb-4"></div>
            <p className="leading-relaxed">{data.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex mx-6 items-center">
                {buy ? (
                  <Link to={`/`}>
                    <button className="py-4 px-6 mb-3 mx-2 shadow-lg shadow-slate-500/50 bg-[rgb(199,37,37)] text-white rounded hover:bg-[#ff1616] active:bg-sky-300 disabled:opacity-50  flex items-center justify-center">
                      Ir a Home
                    </button>
                  </Link>
                ) : (
                  <div></div>
                )}
                {buy ? (
                  <Link to={`/cart`}>
                    <button className="py-4 px-6 mb-3 mx-2 shadow-lg shadow-slate-500/50 bg-[rgb(199,37,37)] text-white rounded hover:bg-[#ff1616] active:bg-sky-300 disabled:opacity-50  flex items-center justify-center">
                      Ir a Pagar
                    </button>
                  </Link>
                ) : (
                  <ItemCount stock={stock} onAdd={handleOnAdd} />
                )}

                <div className="relative">
                  <div className="flex ml-72">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      Price: ${data.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
