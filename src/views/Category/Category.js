import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"
import { Link} from 'react-router-dom';

import { db } from '../../Firebase/FirebaseConfig';
import { collection, query, getDocs, where } from "firebase/firestore";

import Item from "../../components/Item/Item"

const Category = () => {

const [detail, setDetail] = useState([]);

const { category } = useParams();

useEffect(()=>{

  const getDetail = async() =>{

    const q = query(collection(db, "game"), where("category", "==", category));

    const docs = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    
    docs.push({...doc.data(), id: doc.id})
    }); 

    setDetail(docs);

  }; 

    getDetail();

  }, [category]);
  

  return (
    <div className='flex flex-wrap'>
    {detail.map((data)=>{
      return <Link className='p-6 m-auto' to={`/detail/${data.id}`}><Item data={data} stock={5} /></Link>
    }
    )}
     </div>
  )
  }
  export default Category;
  