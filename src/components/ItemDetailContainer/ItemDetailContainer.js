import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";

import { db } from "../../Firebase/FirebaseConfig";
import {
  collection,
  query,
  getDocs,
  documentId,
  where,
} from "firebase/firestore";

const Detail = () => {
  const [detail, setDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getDetail = async () => {
      const q = query(collection(db, "game"), where(documentId(), "==", id));

      const docs = [];

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setDetail(docs);
    };

    getDetail();
  }, [id]);

  return detail.map((data) => {
    return <ItemDetail data={data} key={data.id} stock={5} />;
  });
};

export default Detail;
