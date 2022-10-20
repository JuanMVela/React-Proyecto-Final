
const ItemCart = ({ product }) => {

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="w-60">
              <img className="h-20" src={product.img} alt="" />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-semibold text-slate-800">
                {product.title}
              </span>
              <span className="text-gray-600 text-xs capitalize">
                {product.category}
              </span>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">
              <span className="font-thin">Cantidad: </span>x {product.quantity}
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
              <span className="font-thin">Subtotal: </span>${product.price}
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
              <span className="font-thin">Total: </span>$
              {product.price * product.quantity}
            </span>
          </div>
  );
};

export default ItemCart;

