import { useCartContext } from "../../CartContex";
import Form from "../../components/Form/Form";

const Shop = () => {
  const { cart } = useCartContext();

  return (
    <div className="flex item-center m-4 py-5">
      <div className="w-6/12  p-5">
        <h2 className="text-gray-700 font-bold text-2xl  w-96 hover:text-gray-900 hover:cursor-pointer">
          Tu Pedido
        </h2>
        {cart.map((articles) => (
          <div className="flex  hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="w-60">
              <img className="h-20" src={articles.img} alt="" />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-semibold text-slate-800">
                {articles.title}
              </span>
              <span className="text-gray-600 text-lg capitalize">
              <span className="font-thin">Total: </span>$
              {articles.price * articles.quantity}
              </span>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">
              <span className="font-thin">Cantidad: </span>x {articles.quantity}
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
              <span className="font-thin">Subtotal: </span>${articles.price}
            </span>
          </div>
        ))}
      </div>
      <Form button={"Enviar"} />
    </div>
  );
};

export default Shop;
