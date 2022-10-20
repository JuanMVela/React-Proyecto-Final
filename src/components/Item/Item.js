import React from "react";

const item = ({ data }) => {
  return (
    <div className="m-6">
<div class="card bg-white w-80 h-[28rem] rounded-xl p-2 space-y-4 mx-5">
       <a href="/#">
           <img class="w-full h-64 rounded-md transition hover:bg-slate-300"
               src={data.img}
               alt=""
               />
       </a>
       <div id="description" class="space-y-4 border-top">
           <a href="/#">
               <h2 class="text-black text-center font-semibold text-l transition hover:text-cyan-300 py-4">
                   {data.title}
               </h2>
           </a>
           <div className="absolute top-1 right-2 py-2 px-2 bg-yellow-400 rounded-lg">
            <span className="text-md text-black ">${data.price}.00</span>
          </div>
           <div class="flex text-sm items-center">
           <button class="m-auto px-24 py-3 bg-gray-900 rounded-md text-white text-sm focus:border-transparent">Ver mas</button>
           </div> </div>
</div>
</div>

  );
};

export default item;























// <div className="max-w-2xl m-auto my-4">
// <div className="max-w-2xl m-auto my-2 shadow-xl">
//   <div className=" bg-gray-100 flex justify-center items-center">
//     <div className="container flex justify-center ">
//       <div className="max-w-sm">
//         <div className="bg-white relative  hover:shadow-xl transition duration-500 rounded-lg ">
//           <img
//             className="rounded-t-lg h-96 w-auto"
//             src={data.img}
//             alt=""
//           />
//           <div className="py-6 px-8 rounded-lg bg-white">
//             <h1 className="text-gray-700 font-bold text-xl mb-3 w-auto h-20 hover:text-red-900 hover:cursor-pointer">
//               {data.title}
//             </h1>
//             <p className="text-gray-700 tracking-wide">{data.category}</p>
//             <button className="mt-6 py-2 px-4 bg-[#171717] text-gray-50 font-bold rounded-lg  hover:shadow-lg transition duration-300">
//               Buy Now
//             </button>
//           </div>
          // <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
          //   <span className="text-md">${data.price}</span>
          // </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>