import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import Carousel from "../../components/Carrousel/Carrousel"

const Home = () => {
  return (
    <div>
      <Carousel/>
      <h3 className='bg-black text-white text-center font-bold text-2xl  m-auto mt-12 mb-12 w-96 hover:text-gray-900 hover:cursor-pointer mt-1 p-4 w-full'>NUESTROS PRODUCTOS</h3>
    <ItemListContainer/>
    </div>
  )
}

export default Home