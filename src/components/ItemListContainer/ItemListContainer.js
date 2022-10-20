import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [game, setGame] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getGames = async () => {
    const q = query(collection(db, "game"));

    const docs = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });

    setGame(docs);
  };

  useEffect(() => {
    setIsLoading(true);
    getGames();
  }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <div>
      <h2 className="text-4xl text-center ml-4 underline font-serif">
        {greeting}
      </h2>
      <div>{isLoading ? <Spinner /> : <ItemList game={game} />}</div>
    </div>
  );
};

export default ItemListContainer;

